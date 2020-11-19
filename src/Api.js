import axios from 'axios'
import { serverUrl } from '../env.json'
// import moment from 'moment'
import { isClear } from './Components'
import { store, refreshUserToken } from './store'

const api = axios.create({
  baseURL: serverUrl
})

api.interceptors.request.use(
  async config => {
    const userInfo = store.getState().user

    if (isClear(userInfo.id)) {
      return config
    }

    // const momentNow = moment.utc()
    // const expireMoment = moment.utc(userInfo.expiresIn)
    // const minutesLeft = expireMoment.diff(momentNow, 'seconds')
    // if (minutesLeft < 0 && !isClear(userInfo.id)) {
    //   const tokenResponse = await axios.post(`${serverUrl}/auth/refresh_token`, null,
    //     {
    //       withCredentials: true
    //     })
    //   const tokenInfo = tokenResponse.data
    //   const refreshUser = {
    //     accessToken: tokenInfo.accessToken,
    //     tokenType: tokenInfo.tokenType,
    //     expiresIn: tokenInfo.expiresIn,
    //     id: userInfo.id,
    //     userType: userInfo.userType,
    //     userData: userInfo.userData
    //   }
    //   store.dispatch(refreshUserToken(refreshUser))
    //   config.headers.Authorization = userInfo.tokenType + ' ' + userInfo.accessToken
    //   return config
    // } else {
    config.headers.Authorization = userInfo.tokenType + ' ' + userInfo.accessToken
    return config
  }, error => Promise.reject(error)
)
// https://medium.com/swlh/handling-access-and-refresh-tokens-using-axios-interceptors-3970b601a5da
// https://gist.github.com/mkjiau/650013a99c341c9f23ca00ccb213db1c
api.interceptors.response.use(response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const userInfo = store.getState().user

      if (isClear(userInfo.id)) {
        return Promise.reject(error);
      }

      const tokenResponse = await axios.post(`${serverUrl}/auth/refresh_token`, null,
        {
          withCredentials: true
        })

      const tokenInfo = tokenResponse.data
      const refreshUser = {
        accessToken: tokenInfo.accessToken,
        tokenType: tokenInfo.tokenType,
        expiresIn: tokenInfo.expiresIn,
        id: userInfo.id,
        userType: userInfo.userType,
        userData: userInfo.userData
      }
      store.dispatch(refreshUserToken(refreshUser))

      originalRequest.headers.Authorization = 'Bearer ' + tokenInfo.accessToken
      return new Promise((resolve) => resolve(axios(originalRequest)))
    }
    return Promise.reject(error)
  }
)

export default api
