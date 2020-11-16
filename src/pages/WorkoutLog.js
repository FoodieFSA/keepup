import { useState } from 'react'
import { Button } from '@material-ui/core'
import produce from 'immer'
import SingleExercise from '../Components/SingleExercise'

const WorkoutLog = () => {
  const initialExercise = {
    exerciseName: 'Bench Press',
    set: 0,
    LBS: 0,
    reps: 0,
    complete: false
  }

  const [state, setState] = useState({
    workoutLogName: 'MONDAY WORKOUT',
    exerciseSets: []
  })

  const handleExerciseChange = (
    exerciseId,
    setId,
    incomingExerciseName,
    incomingSet,
    incomingLBS,
    incomingReps,
    incomingComplete
  ) => {
    const tempExercise = state.exerciseSets[exerciseId][setId]
    setState(
      produce((draftState) => {
        draftState.exerciseSets[exerciseId][setId].exerciseName =
          incomingExerciseName || tempExercise.exerciseName
        draftState.exerciseSets[exerciseId][setId].set =
          incomingSet || tempExercise.set
        draftState.exerciseSets[exerciseId][setId].LBS =
          incomingLBS || tempExercise.LBS
        draftState.exerciseSets[exerciseId][setId].reps =
          incomingReps || tempExercise.reps
        draftState.exerciseSets[exerciseId][setId].complete =
          incomingComplete === null ? tempExercise.complete : incomingComplete
      })
    )
  }

  // TODO need the remove exercise function and remove set function
  const addNewExercise = () => {
    setState(
      produce((draftState) => {
        draftState.exerciseSets.push([{ ...initialExercise }])
      })
    )
  }
  const addNewSet = (exerciseIndex, prevSetNum = 0) => {
    const tempSet = { ...initialExercise }
    tempSet.set = prevSetNum
    setState(
      produce((draftState) => {
        draftState.exerciseSets[exerciseIndex].push({ ...tempSet })
      })
    )
  }

  return (
    <div style={{ flex: 1 }}>
      <h2 id="workoutlog-title">{state.workoutLogName}</h2>
      {state.exerciseSets &&
            state.exerciseSets.map((exercise, index) => {
              return (
                <SingleExercise
                  key={index}
                  exerciseId={index}
                  exercise={exercise}
                  handleExerciseChange={handleExerciseChange}
                  addNewSet={addNewSet}
                />
              )
            })
      }
      <Button variant="contained" color="primary" onClick={addNewExercise}>
          Add a New Exercise
      </Button>

    </div>
  )
}

export default WorkoutLog
