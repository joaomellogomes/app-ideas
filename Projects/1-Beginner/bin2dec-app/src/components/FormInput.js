import React from 'react'
import { useFormContext } from './contexts/FormContext'
import { useFormInputController } from './ViewController/FormInputController'
import useStyles from './styles/FormInput.styles'
import { TextField } from '@material-ui/core'

export default function FormInput() {
  const { textInput } = useFormContext()
  const { handleChange } = useFormInputController()
  const classes = useStyles()

  return (
    <TextField
      inputProps={{ 'aria-labelledby': 'input-binary-value' }}
      alt="Inserir número binário"
      id="input-binary-value"
      label="Número binário"
      placeholder="Insira um número binário"
      variant="outlined"
      value={textInput}
      onChange={handleChange}
    />
  )
}
