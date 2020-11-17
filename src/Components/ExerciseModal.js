import {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Modal, Input, Backdrop, Fade, InputAdornment} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

const dummyData = [
  {id: 0, body_part: 'Chest', name: 'Bench Press'},
  {id: 1, body_part: 'Back', name: 'Deadlift'},
  {id: 2, body_part: 'Shoulders', name: 'Lateral Raises'},
  {id: 3, body_part: 'Legs', name: 'Barbell Back Squat'},
  {id: 4, body_part: 'Biceps', name: 'Dumbbell Curls'},
]

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

const ExerciseModal = ({handleModal, open}) => {
  const classes = useStyles()
  const [searchResults, setSearchResults] = useState([])
  const [input, setInput] = useState('')

  const searchExercises = (input) => {
    const searchResults = dummyData.filter((exercise) => {
      return exercise.name.toLowerCase().startsWith(input.toLowerCase())
    })

    setSearchResults(searchResults)
  }

  const handleChange = (e) => {
    setInput(e.target.value)
    searchExercises(e.target.value)
  }

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <h2 id="transition-modal-title">Pick an Exercise</h2>
          <Input
            id="transition-modal-description"
            value={input}
            onChange={handleChange}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />

          {searchResults.map((result) => {
            return <div key={result.id}>{result.name}</div>
          })}
        </div>
      </Fade>
    </Modal>
  )
}

export default ExerciseModal
