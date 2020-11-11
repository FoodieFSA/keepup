import Api from '../Api'
import Storage from '../Storage'
/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'

/**
 * INITIAL STATE
 */
const defaultUser = { }

/**
 * ACTION CREATORS
 */
const getUser = (user) => ({ type: GET_USER, user })
const removeUser = () => ({ type: REMOVE_USER })

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
    res = await Api.post(`/auth/${method}`, payload)
  } catch (authError) {
    dispatch(getUser({ error: authError.response.data.error }))
    return throw new Error(authError.response.data.error)
  }
  Storage.saveToken(res.data.accessToken)
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
    default:
      return state
  }
}
