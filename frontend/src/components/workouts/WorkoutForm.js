import React from 'react'
import { Alert, Button, Jumbotron, Form } from 'reactstrap'
import { convertMinutesToSeconds } from '../../helpers/utils/time'
import FormDropdown from '../common/FormDropdown'
import TextInput from '../common/TextInput'


const WorkoutForm = ({
  // Selectors
  errors,
  newWorkout,
  workoutTypes,
  workoutIntensity,
  // Actions
  editWorkout = () => {},
  saveNewWorkout = () => {},
}) => (
  <Jumbotron className="form-container">
    <Form onSubmit={(e)=> {
      e.preventDefault()
      saveNewWorkout()
    }}>
      <h1> Add New Workout </h1>
      {errors.non_field_errors && (
        <Alert color="danger">
          {errors.non_field_errors}
        </Alert>
      )}
      <FormDropdown
        selectedOption={newWorkout.type}
        label="Type"
        // error={(!errors.type) ? null : errors.type}
        options={workoutTypes}
        editInput={editWorkout}
      />
      <FormDropdown
        selectedOption={newWorkout.intensity}
        label="Intensity"
        // error={(!errors.intensity) ? null : errors.intensity}
        options={workoutIntensity}
        editInput={editWorkout}
      />
      <TextInput
        name="duration"
        label="Duration"
        defaultValue='00:00:00'
        // error={(!errors.duration) ? null : errors.duration}
        onChange={(e)=> {
          editWorkout({
            duration: convertMinutesToSeconds(e.target.value)}
          )}
        }
      />
      <TextInput
        name="calories_burned"
        label="Calories Burned"
        // error={(!errors.calories_burned) ? null : errors.calories_burned}
        defaultValue={0}
        onChange={(e)=> {
          editWorkout({ calories_burned: e.target.value })
        }}
      />
      <Button
        type="submit"
        color="primary"
        size="lg"
      >
        Save Workout
      </Button>
    </Form>
  </Jumbotron>
)

export default WorkoutForm