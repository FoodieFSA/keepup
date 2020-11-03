import {useState, useEffect} from 'react'
import {Button} from '@material-ui/core'
import produce from 'immer'
import SingleExercise from '../Components/SingleExercise'

const WorkoutLog = () => {
  const initialExercise = {
    exerciseName: 'Bench Press',
    set: 1,
    LBS: 0,
    reps: 0,
    complete: false,
  }

  const [state, setState] = useState({
    workoutLogName: 'MONDAY WORKOUT',
    exerciseSets: [],
  })

  const handleExerciseChange = (
    exerciseId,
    incomingExerciseName,
    incomingSet,
    incomingLBS,
    incomingReps,
    incomingComplete
  ) => {
    const tempExercise = state.exerciseSets[exerciseId]

    setState(
      produce((draftState) => {
        draftState.exerciseSets[exerciseId].exerciseName =
          incomingExerciseName || tempExercise.exerciseName
        draftState.exerciseSets[exerciseId].set =
          incomingSet || tempExercise.set
        draftState.exerciseSets[exerciseId].LBS =
          incomingLBS || tempExercise.LBS
        draftState.exerciseSets[exerciseId].reps =
          incomingReps || tempExercise.reps
        draftState.exerciseSets[exerciseId].complete =
          incomingComplete === null ? tempExercise.complete : incomingComplete
      })
    )
  }

  const addNewExercise = () => {
    setState(
      produce((draftState) => {
        draftState.exerciseSets.push({...initialExercise})
      })
    )
  }

  return (
    <div>
      <h2>{state.workoutLogName}</h2>
      {state.exerciseSets.map((exercise, index) => {
        return (
          <SingleExercise
            key={index}
            exerciseId={index}
            exercise={exercise}
            handleExerciseChange={handleExerciseChange}
          />
        )
      })}

      <Button variant="contained" color="primary" onClick={addNewExercise}>
        Add a New Exercise
      </Button>
    </div>
  )
}

export default WorkoutLog
