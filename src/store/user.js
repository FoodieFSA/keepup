import Api from '../Api'
/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const REFRESH_TOKEN = ' REFRESH_TOKEN'
/**
 * INITIAL STATE
 */
const defaultUser = { }

/**
 * ACTION CREATORS
 */
const getUser = (user) => ({ type: GET_USER, user })
const removeUser = () => ({ type: REMOVE_USER })
export const refreshUserToken = (user) => ({ type: REFRESH_TOKEN, user })
/**
 * THUNK CREATORS
 */
export const me = () => async (dispatch) => {
  try {
    const res = await Api.get('/auth/me')
    dispatch(getUser(res.data || defaultUser))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (payload, method) => async (dispatch) => {
  let res

  try {
    res = await Api.post(`/auth/${method}`, payload, {
      withCredentials: true
    })
  } catch (authError) {
    dispatch(getUser({ error: authError.response.data.error }))
    return throw new Error(authError.response.data.error)
  }
  try {
    dispatch(getUser(res.data))
    return res
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async (dispatch) => {
  try {
    await Api.post('/auth/logout')
    dispatch(removeUser())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function (state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    case REFRESH_TOKEN:
      return action.user
    default:
      return state
  }
}
