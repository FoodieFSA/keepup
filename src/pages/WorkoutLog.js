import React from 'react'
import MaterialTable from 'material-table'
import { AddBox, ArrowDownward } from "@material-ui/icons";

const createData = (
  bodyPart,
  exerciseName,
  exerciseSet,
  exereciseWeight,
  exerciseRep
) => {
  return {bodyPart, exerciseName, exerciseSet, exereciseWeight, exerciseRep}
}

const data = [
  createData('Chest', 'Flat Bench Press', 4, 135, 8),
  createData('Back', 'Deadlift', 5, 225, 5),
  createData('Shoulders', 'Lateral Raise', 4, 15, 10),
]

const columns = [
  {title: 'Body Part', field: 'bodyPart'},
  {title: 'Exercise Name', field: 'exerciseName'},
  {title: 'Exercise Set', field: 'exerciseSet'},
  {title: 'Exercise Weight', field: 'exereciseWeight'},
  {title: 'Exercise Rep', field: 'exerciseRep'},
]

const WorkoutLog = () => {
  return (
    <div>
      <MaterialTable title="Workout Log" data={data} columns={columns} />
    </div>
  )
}

export default WorkoutLog
