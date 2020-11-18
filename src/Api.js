import axios from 'axios'
import { serverUrl } from '../env.json'
// import moment from 'moment'
import { isClear } from './Components'
import { store } from './store'
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
    // const expireMoment = moment.utc(userInfo.expires_at)
    // const minutesLeft = expireMoment.diff(momentNow, 'minutes')
    // console.log(expireMoment.format('MMMM Do YYYY, h:mm:ss a'), 'mimmmmmmmmmmmmmmmmmmmmmmmm')
    // if (minutesLeft < 480) { // TODO for test use 21895
    //   console.log('65241')
    //
    //   // Check also link 2020082723
    //   // To have a cleaner redux initial state, waiting for other request-responses to finalize
    //   // TODO need Reset All to clear out state
    //   // setTimeout(() => store.dispatch(authActions.ResetAll()), 3000)
    //
    //   // https://github.com/axios/axios/issues/583#issuecomment-504317347
    //   return new Promise(() => {})
    // } else if (minutesLeft < 1440) {
    //   // Refresh the token if its going to expire in 24 hours
    //
    //   // Interceptor auto-catches error https://github.com/axios/axios/issues/754#issuecomment-286806251
    //   // TODO need to update the token
    //   // const tokenResponse = await axios.post(`${serverUrl}auth/refreshToken`, null,
    //   //   { headers: { Authorization: 'Bearer ' + userInfo.accessToken } })
    //   // const useData = tokenResponse.data
    //   //
    //   // console.log('93838', useData.accessToken)
    //   // store.dispatch(authActions.PutUserInfo({
    //   //   userId: userInfo.userId,
    //   //   userType: userInfo.userType,
    //   //   templateType: userInfo.templateType,
    //   //   accessToken: useData.accessToken,
    //   //   accessExpiration: GetExpiration(useData.expiresIn)
    //   // }))
    //   //
    // }
    config.headers.Authorization = 'Bearer ' + userInfo.accessToken
    return config
  }, error => Promise.reject(error)
)

// for call the apis in backend
export default api
