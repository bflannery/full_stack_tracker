import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, FormFeedback, Label, Input } from 'reactstrap'

const TextInput = ({
  error,
  label,
  name,
  type,
  ...rest
}) => {
  const id = `id_${name}`, input_type = type ? type : 'text'
  return (
    <FormGroup color={error ? 'danger' : ''}>
      {label && (
        <Label htmlFor={id}>
          {label}
        </Label>
      )}
      <Input
        type={input_type}
        name={name}
        id={id}
        className={error ? 'is-invalid' : ''}
        {...rest}
      />
      {error && (
        <FormFeedback className="invalid-feedback">
          {error}
        </FormFeedback>
      )}
    </FormGroup>
  )
}


TextInput.propTypes = {
  error: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
}

export default TextInput
