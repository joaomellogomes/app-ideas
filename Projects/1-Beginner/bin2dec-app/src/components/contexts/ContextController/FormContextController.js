import { useState } from 'react'
import { isBinary, toDecimal } from '../../../services/domain/BinaryNumberDomain'

export default function useFormContextController() {
  const [textInput, setTextInput] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [output, setOutput] = useState('')

  const convert = (textInput = '') => {
    setTextInput(textInput)

    if (!isBinary(textInput)) {
      setErrorMessage('Aceitos somente 0 e 1 para números binários ')
      return
    }

    setErrorMessage('')

    const result = toDecimal(textInput)

    setOutput(result.toString())
  }

  return {
    textInput,
    errorMessage,
    output,
    convert
  }
}
