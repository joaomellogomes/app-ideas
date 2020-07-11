import React from 'react'
import Form from './components/Form'
import { FormProvider } from './components/contexts/FormContext'
import useStyles from './components/styles/App.styles'

function App() {
  const classes = useStyles()

  return (
    <div className={`App ${classes.app}`}>
      <FormProvider>
        <Form />
      </FormProvider>
    </div>
  )
}

export default App
