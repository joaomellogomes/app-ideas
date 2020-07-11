import React, { createContext, useContext } from 'react'
import useFormContextController from './ContextController/FormContextController'

const FormContext = createContext({
  textInput: '',
  errorMessage: '',
  output: '',
  convert(textInput = '') {}
})

export const FormProvider = ({ children }) => (
  <FormContext.Provider value={{ ...useFormContextController() }}>
    {children}
  </FormContext.Provider>
)

export const useFormContext = () => useContext(FormContext)
