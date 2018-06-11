import React from 'react'
import { FormGroup, Input, Label } from 'reactstrap'

const FormDropdown = ({
  editInput,
  error,
  label,
  name,
  options,
  selectedOption,
}) => (
  <FormGroup color={error ? "danger" : ""}>
    <Label for={`${label}-input`}>{label}</Label>
    <Input
      type="select"
      name="select"
      id={`${label}-input`}
      defaultValue={selectedOption}
      onChange={(e) => editInput({type: parseInt(e.target.value)})}
    >
      {options.map((option,i) => (<option key={i} value={option.id}>{option.name}</option>))}
    </Input>
  </FormGroup>
)

export default FormDropdown