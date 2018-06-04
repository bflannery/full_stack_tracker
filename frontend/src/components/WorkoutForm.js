import React, { Component } from 'react'
import { Alert, Button, Jumbotron, Form } from 'reactstrap'

import TextInput from './TextInput'

const WorkoutForm = (
  errors,
) => (
  <Jumbotron className="container">
    <Form onSubmit={(e)=> { console.log(e.target.value) } }>
      <h1> Add New Workout </h1>
      {errors.non_field_errors && (
        <Alert color="danger">
          {errors.non_field_errors}
        </Alert>
      )}
      <TextInput
        name="type"
        label="Type"
        error={errors.type}
        onChange={(e)=> { console.log(e.target.value) } }
      />
      <TextInput
        name="intensity"
        label="Intensity"
        error={errors.intensity}
        type="password"
        onChange={(e)=> { console.log(e.target.value) } }
      />
      <TextInput
        name="duration"
        label="Duration"
        error={errors.duration}
        onChange={(e)=> { console.log(e.target.value) } }
      />
      <TextInput
        name="caloriesBurned"
        label="Calories Burned"
        error={errors.calories_burned}
        onChange={(e)=> { console.log(e.target.value) } }
      />

      <Button
        type="submit"
        color="primary"
        size="lg"
      >
        Log In
      </Button>
    </Form>
  </Jumbotron>
)

export default WorkoutForm