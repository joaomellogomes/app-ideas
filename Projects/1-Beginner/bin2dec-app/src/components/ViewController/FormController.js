export const useFormViewController = () => {
  const handleSubmit = e => {
    e.preventDefault()
  }

  return { handleSubmit }
}
