import Api from '../Api'
/**
 * ACTION TYPES
 */
const GOT_WORKOUTS = 'GOT_WORKOUTS'
const CREATED_WORKOUT = 'CREATED_WORKOUT'
const ADDED_EXERCISE = 'ADDED_EXERCISE'
const REMOVED_EXERCISE = 'REMOVED_EXERCISE'
const ADDED_SET = 'ADDED_SET'
const UPDATED_SET = 'UPDATED_SET'
const REMOVED_SET = 'REMOVED_SET'
// const SAVED = "SAVED"

/**
 * INITIAL STATE
 */

const initialStateWorkout = {

  // TODO: use moment to name workoutlogname today's date
  workoutLogName: '', // day of month    DATE.NOW()
  userId: '',
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

const gotWorkoutLog = (workout) => ({ type: GOT_WORKOUTS, workout })
const createdWorkout = (workout) => ({ type: CREATED_WORKOUT, workout })
const addedExercise = (exercise) => ({ type: ADDED_EXERCISE, exercise })
const removedExercise = (id) => ({ type: REMOVED_EXERCISE, id })
const addedSet = (exerciseId) => ({ type: ADDED_SET, exerciseId })
const removedSet = (exerciseId, set) => ({ type: REMOVED_SET, exerciseId, set })
const updatedSet = (exerciseId, set) => ({ type: UPDATED_SET, exerciseId, set })

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
export const getWorkoutLog = (logId, userId) => async (dispatch) => {
  try {
    // TODO: add workoutLogs field to user, and get the log id response
    const response = await Api.get(`/workoutlog/${logId}`)
    if (response) {
      const localWorkoutLog = JSON.parse(localStorage.getItem('workoutLog'))
      if (localWorkoutLog.id === response.id) {
        // Local Storage data has precedence over data base one. We just replace the one from the data base
        gotWorkoutLog(localWorkoutLog)
      } else {
        gotWorkoutLog(response.data)
      }
    } else {
      const workoutLog = {
        name: Date.now(), // Need more work to get the day only without time
        userId: userId,
        exercises: []
      }
      const response = await Api.post('/workoutlog/', workoutLog)
      dispatch(createdWorkout(response.data))
      // Create a local storage workout
      // name, id, exercises
      localStorage.setItem('workoutLog', JSON.stringify(response.data))
    }
  } catch (error) {
    console.log(error)
  }
}
// add exercise to the workoutlog
export const addExercise = (exercise) => async (dispatch) => {
  try {
    const localWorkout = JSON.parse(localStorage.getItem('workoutLog'))
    exercise.set[0] = emptySet
    localWorkout.exercises.push(exercise)
    localStorage.setItem('workoutLog', JSON.stringify(localWorkout))
    dispatch(addedExercise(exercise))
  } catch (error) {
    console.error(error)
  }
}

export const removeExercise = (exerciseId) => async (dispatch) => {
  try {
    const localWorkout = JSON.parse(localStorage.getItem('workoutLog')).exercises.filter(exercise => exercise.id !== exerciseId)
    localStorage.setItem('workoutLog', JSON.stringify(localWorkout))
    dispatch(removedExercise(exerciseId))
  } catch (error) {
    console.error(error)
  }
}

// const ADDED_SET = 'ADDED_SET'
// const UPDATED_SET = 'UPDATED_SET'
// const REMOVED_SET = 'REMOVED_SET'
export const addSet = (exerciseId) => async (dispatch) => {
  try {
    const localWorkout = JSON.parse(localStorage.getItem('workoutLog')).exercises.map(exercise => {
      if (exercise.id === exerciseId) {
        exercise.set.push(emptySet)
      }
      return exercise
    })
    localStorage.setItem('workoutLog', JSON.stringify(localWorkout))
    dispatch(addedSet(exerciseId))
  } catch (error) {
    console.error(error)
  }
}

export const updateSet = (exerciseId, set) => async (dispatch) => {
  try {
    const localWorkout = JSON.parse(localStorage.getItem('workoutLog')).exercise.map(exercise => {
      if (exercise.id === exerciseId) {
        exercise.sets.map(currentSet => {
          if (currentSet.id === set.id) {
            return set
          } else {
            return currentSet
          }
        })
      }
      return exercise
    })
    localStorage.setItem('workoutLog', JSON.stringify(localWorkout))
    dispatch(updatedSet(exerciseId, set))
  } catch (error) {
    console.error(error)
  }
}

// Need to work on this one ran out of time
export const removeSet = (exerciseId, set) => async (dispatch) => {
  try {
    const localWorkout = JSON.parse(localStorage.getItem('workoutLog')).exercise.map(exercise => {
      if (exercise.id === exerciseId) {
        exercise.sets.filter(currentSet => currentSet.id !== set.id)
      }
      return exercise
    })
    localStorage.setItem('workoutLog', JSON.stringify(localWorkout))
    dispatch(removedSet(exerciseId, set))
  } catch (error) {
    console.error(error)
  }
}

// thunk to save changins of workoutlog to the backend
// export const save = () => async (dispatch) => {
//   try {
//     // TODO: finish adding workoutlog id

//     await Api.put('/workoutLog/id')
//     dispatch(save())
//   } catch (error) {
//     console.error(error)
//   }
// }

/**
 * REDUCER
 */
export default function (state = initialStateWorkout, action) {
  switch (action.type) {
    case GOT_WORKOUTS:
      return action.workout
    case CREATED_WORKOUT:
      return action.workout
    case ADDED_EXERCISE:
      return { ...state, exercises: [...state.exercises, action.exercise] }
    case REMOVED_EXERCISE:
      return { ...state, exercises: state.exercises.filter(exercise => exercise.id !== action.id) }
    case ADDED_SET:
      return {
        ...state,
        exercises: state.exercises.map(exercise =>
          exercise.id === action.exerciseId ? exercise.sets.push(emptySet) : exercise)
      }
    case UPDATED_SET:
      return {
        ...state,
        exercises: state.exercises.map(exercise => {
          if (exercise.id === action.exerciseId) {
            exercise.sets[action.set.id] = action.set
          }
          return exercise
        })
      }
    case REMOVED_SET:
      return {
        ...state,
        exercises: state.exercises.map(exercise =>
          exercise.id === action.exercise.id ? exercise.sets.filter(set => set.id !== action.set.id) : exercise)
      }
    default:
      return state
  }
}
