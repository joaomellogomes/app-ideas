import { useFormContext } from '../contexts/FormContext'

export function useFormInputController() {
  const { convert } = useFormContext()

  const handleChange = e => {
    convert(e.target.value)
  }

  return { handleChange }
}
