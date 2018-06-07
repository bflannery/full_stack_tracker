import React from 'react'
import { Alert, Button, Jumbotron, Form } from 'reactstrap'

import FormDropdown from './FormDropdown'
import TextInput from './TextInput'


const WORKOUT_TYPES = [
  'Other',
  'Atomic',
  'CrossFit',
  'Run'
]

const INTENSITY_TYPES = [
  'HIIT',
  'Strength',
  'Endurance'
]

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
  <Jumbotron className="container">
    <Form onSubmit={(e)=> {
      e.preventDefault()
      saveNewWorkout()
    }}>
      <h1> Add New Workout </h1>
      {/*{errors.non_field_errors && (*/}
        {/*<Alert color="danger">*/}
          {/*{errors.non_field_errors}*/}
        {/*</Alert>*/}
      {/*)}*/}
      <FormDropdown
        selectedOption={newWorkout.type}
        label="Type"
        // error={(!errors.type) ? null : errors.type}
        options={workoutTypes}
      />
      <FormDropdown
        label="Intensity"
        // error={(!errors.intensity) ? null : errors.intensity}
        options={workoutIntensity}
      />
      <TextInput
        name="duration"
        label="Duration"
        defaultValue='00:00:00'
        // error={(!errors.duration) ? null : errors.duration}
        onChange={(e)=> {
          editWorkout({duration: e.target.value})}}
      />
      <TextInput
        name="caloriesBurned"
        label="Calories Burned"
        // error={(!errors.calories_burned) ? null : errors.calories_burned}
        onChange={(e)=> { editWorkout({caloriesBurned: e.target.value}) } }
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