import React from 'react'
import { useFormContext } from './contexts/FormContext'
import useStyles from './styles/FormInput.styles'
import { TextField } from '@material-ui/core'

export default function FormOutput() {
  const { output } = useFormContext()
  const classes = useStyles()

  return (
    <TextField
      inputProps={{ 'aria-labelledby': 'decimal-value' }}
      alt="Resultado do valor em decimal"
      placeholder="Valor decimal será exibido aqui"
      label="Valor em decimal"
      id="decimal-value"
      name="decimal-value"
      value={output}
      disabled
    />
  )
}
