import Api from '../Api'
/**
 * ACTION TYPES
 */
const GET_WORKOUTS = 'GET_WORKOUTS'
const CREATE_WORKOUT = 'CREATE_WORKOUT'
const CREATE_EXERCISE = 'CREATE_EXERCISE'
const REMOVE_EXERCISE = 'REMOVE_EXERCISE'
const ADD_SET = 'ADD_SET'
const UPDATE_SET = 'UPDATE_SET'
const REMOVE_SET = 'REMOVE_SET'
// const SAVE = "SAVE"

/**
 * INITIAL STATE
 */

const initialStateWorkout = {

  // TODO: use moment to name workoutlogname today's date
  workoutLogName: '', // day of month    DATE.NOW()

  // adding exercise objects into the exercises array
  exercises: []
  // modalOpen: false,
}

// initial state for set
const emptySet = { lbs: 0, rep: 0, completeStatus: false }

// {
//   id:"",
//   name: "",
//   sets: [{lbs: 0, rep: 0, completeStatus: false}],
// }

const getWorkout = (workout) => ({ type: GET_WORKOUTS, workout })
const createWorkout = () => ({ type: CREATE_WORKOUT })
// const createExercise = (exercise) => ({type: CREATE_EXERCISE, exercise})
// const removeExercise = (id) => ({type: REMOVE_EXERCISE, id})
// const addSet = (exerciseId) => ({ type: ADD_SET, exerciseId})
// const removeSet = (exercise, set) => ({ type: REMOVE_SET})
// const updateSet = (exercise, set) => ({ type: UPDATE_SET, set})

/*

TODO:
- need to incoporate immer to the object
- create local storage workout object
- need to account for same day workout -> thinking to use Date as identifier for workout objects
- need immer^ for this

*/

/**
 * THUNK CREATORS
 */

// thunk to get workout log, we are assuming user has field for an array of workoutlogs
export const getWorkoutLog = (logId) => async (dispatch) => {
  try {
    // TODO: add workoutLogs field to user, and get the log id response
    if (logId) {
      const response = await Api.get(`/workoutlog/${logId}`)
      if (response) {
        getWorkout(response.data)
      } else {
        createWorkout()
        // Create a local storage workout
      }
    }
  } catch (error) {
    console.log(error)
  }
}

// thunk to save changins of workoutlog to the backend
export const save = () => async (dispatch) => {
  try {
    // TODO: finish adding workoutlog id

    await Api.put('/workoutLog/id')
    dispatch(save())
  } catch (error) {
    console.error(error)
  }
}

/**
 * REDUCER
 */
export default function (state = initialStateWorkout, action) {
  switch (action.type) {
    case GET_WORKOUTS:
      return action.workout
    case CREATE_WORKOUT:
      return state
    case CREATE_EXERCISE:
      return { ...state, exercises: [...state.exercises, action.exercise] }
    case REMOVE_EXERCISE:
      return { ...state, exercises: state.exercises.filter(exercise => exercise.id !== action.id) }
    case ADD_SET:
      return {
        ...state,
        exercises: state.exercises.map(exercise =>
          exercise.id === action.exerciseId ? exercise.sets.push(emptySet) : exercise)
      }
    case UPDATE_SET:
      return {
        ...state,
        exercises: state.exercises.map(exercise => {
          if (exercise.id === action.exerciseId) {
            exercise.sets[action.set.id] = action.set
          }
          return exercise
        })
      }
    case REMOVE_SET:
      return {
        ...state,
        exercises: state.exercises.map(exercise =>
          exercise.id === action.exercise.id ? exercise.sets.filter(set => set.id !== action.set.id) : exercise)
      }
    default:
      return state
  }
}
