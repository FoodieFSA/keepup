import MaterialTable from 'material-table'
import {useState} from 'react'

const createData = (
  bodyPart,
  exerciseName,
  exerciseSet,
  exereciseWeight,
  exerciseRep
) => {
  return {bodyPart, exerciseName, exerciseSet, exereciseWeight, exerciseRep}
}

const dummyData = [
  createData('Chest', 'Flat Bench Press', 4, 135, 8),
  createData('Back', 'Deadlift', 5, 225, 5),
  createData('Shoulders', 'Lateral Raise', 4, 15, 10),
]

const dummyColumns = [
  {title: 'Body Part', field: 'bodyPart'},
  {title: 'Exercise Name', field: 'exerciseName'},
  {title: 'Exercise Set', field: 'exerciseSet'},
  {title: 'Exercise Weight', field: 'exereciseWeight'},
  {title: 'Exercise Rep', field: 'exerciseRep'},
]

// const editTable = () => {
//   const [columns, setColumns] = useState(dummyColumns)
//   const [data, setData] = useState(dummyData)
// }

const WorkoutLog = () => {
  const [columns, setColumns] = useState(dummyColumns)
  const [data, setData] = useState(dummyData)

  return (
    <MaterialTable
      title="Workout Log"
      columns={dummyColumns}
      data={dummyData}
      // actions={[
      //   {
      //     icon: 'edit',
      //     tootltip: 'Edit Entry',
      //   },
      // ]}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...data, newData])

              resolve()
            }, 1000)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data]
              const index = oldData.tableData.id
              dataUpdate[index] = newData
              setData([...dataUpdate])

              resolve()
            }, 1000)
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data]
              const index = oldData.tableData.id
              dataDelete.splice(index, 1)
              setData([...dataDelete])

              resolve()
            }, 1000)
          }),
      }}
    />
  )
}

export default WorkoutLog
