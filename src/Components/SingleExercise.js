import {Checkbox} from '@material-ui/core'

const SingleExercise = ({exercise, handleExerciseChange, exerciseId}) => {
  return (
    <div>
      <h4>{exercise.exerciseName}</h4>
      <div>Set: {exercise.set}</div>
      <div>LBS: {exercise.LBS}</div>
      <div>Reps: {exercise.reps}</div>
      <Checkbox
        checked={exercise.complete}
        onChange={() =>
          handleExerciseChange(
            exerciseId,
            null,
            null,
            null,
            null,
            !exercise.complete
          )
        }
        inputProps={{'aria-label': 'secondary checkbox'}}
      />
    </div>
  )
}

export default SingleExercise
