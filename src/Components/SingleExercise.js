import { Checkbox } from '@material-ui/core'

const SingleExercise = ({ exercise, handleExerciseChange, exerciseId }) => {
  const columnHeader = ['Set', 'LBS', 'Reps', 'Complete']
  return (
    <table id='table'>
      {/* <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100vw' }}> */}
      <thead>
        <tr>
          {columnHeader.map((columnName, index) => {
            return <th key={index}>{columnName.toUpperCase()}</th>
          })}
        </tr>
      </thead>
      <tbody>
        <tr>
          {/* <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '77vw' }}> */}
          <td>{exercise.set}</td>
          <td>{exercise.LBS}</td>
          <td>{exercise.reps}</td>
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
                )}
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          </td>
          {/* </div> */}
        </tr>
      </tbody>
    </table>
  )
}

export default SingleExercise
