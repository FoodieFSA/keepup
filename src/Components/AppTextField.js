import {TextField} from '@material-ui/core'
import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {SetFormMessage} from './index'
const useStyles = makeStyles(() => ({
  root: {
    padding: '10px 0',
  },
  input: {
    color: 'white',
  },
}))

const AppTextField = (props) => {
  const classes = useStyles()
  return (
    <div style={{display: 'flex', flexDirection: 'column', color: 'red'}}>
      <TextField
        id="standard-basic"
        className={classes.root}
        InputLabelProps={{className: classes.input}}
        InputProps={{className: classes.input}}
        label={props.label}
        type={props.type}
        name={props.name}
        value={props.values[props.name]}
        onChange={props.handleChange}
      />
      {props.name in props.errors
        ? SetFormMessage(props.errors[props.name])
        : ' '}
    </div>
  )
}
export default AppTextField
