import { Checkbox } from '@material-ui/core'

const SingleExercise = ({ exercise, handleExerciseChange, exerciseId }) => {
  return (
    <tr key={exerciseId}>
      <td>{exercise.exerciseName}</td>
      <td>Set: {exercise.set}</td>
      <td>LBS: {exercise.LBS}</td>
      <td>Reps: {exercise.reps}</td>
      <td>
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
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
      </td>
    </tr>
  )
}

export default SingleExercise
