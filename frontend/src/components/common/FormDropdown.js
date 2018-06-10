import React from 'react'
import { FormGroup, Input, Label } from 'reactstrap'


const FormDropdown = ({
  selectedOption,
  error,
  name,
  label,
  options,
}) => (
  <FormGroup color={error ? "danger" : ""}>
    <Label for={`${label}-input`}>{label}</Label>
    <Input type="select" name="select" id={`${label}-input`} defaultValue={selectedOption}>
      {options.map((option,i) => (<option key={i}>{option.name}</option>))}
    </Input>
  </FormGroup>
)

export default FormDropdown