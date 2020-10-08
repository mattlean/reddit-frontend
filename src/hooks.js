import { useEffect, useRef } from 'react'

export const usePrevVal = (val) => {
  const ref = useRef(null)

  useEffect(() => {
    ref.current = val
  }, [val])

  return ref.current
}

export default useEffect
