import React from 'react'
import FormInput from './FormInput'
import FormOutput from './FormOutput'
import useStyles from './styles/Form.styles'
import { useFormContext } from './contexts/FormContext'
import { useFormViewController } from './ViewController/FormController'

export default function Form() {
  const { errorMessage } = useFormContext()
  const { handleSubmit } = useFormViewController()
  const classes = useStyles()

  return (
    <form onSubmit={handleSubmit} className={classes.form} autoComplete="off">
      <fieldset>
        <legend>
          Conversão de binário para decimal
          {errorMessage && <strong> ({errorMessage})</strong>}
        </legend>
        <div>
          <FormInput />
          <FormOutput />
        </div>
      </fieldset>
    </form>
  )
}
