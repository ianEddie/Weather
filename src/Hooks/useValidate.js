import { useEffect, useRef, useState } from 'react'
//
export function useValidate () {
  const [input, updateInput] = useState('')
  const [error, setError] = useState(null)
  const firstInput = useRef(true)
  useEffect(() => {
    if (firstInput.current) {
      firstInput.current = input === ''
      return
    }
    if (input === undefined) {
      setError('No weather results')
      return
    }
    if (input === '') {
      setError('Type a City name')
      return
    }
    if (input.length < 2) {
      setError('Type more than 1 character')
      return
    }
    setError(null)
  }, [input])
  return { error, input, updateInput }
}
