import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, Input, Label } from 'reactstrap'

const FormDropdown = ({
  editInput,
  error,
  label,
  options,
  selectedOption,
}) => (
  <FormGroup color={error ? 'danger' : ''}>
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

FormDropdown.propTypes = {
  editInput: PropTypes.func.isRequired,
  error: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array.isRequired,
  selectedOption: PropTypes.string.isRequired,
}


export default FormDropdown