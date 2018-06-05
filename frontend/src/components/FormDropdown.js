import React from 'react'
import { FormGroup, Input, Label } from 'reactstrap'


const FormDropdown = ({
  error,
  name,
  label,
  options,
}) => (
  <FormGroup color={error ? "danger" : ""}>
    <Label for={`${label}-input`}>{label}</Label>
    <Input type="select" name="select" id={`${label}-input`} >
      {options.map((option,i) => (<option key={i}>{option}</option>))}
    </Input>
  </FormGroup>
)

export default FormDropdown