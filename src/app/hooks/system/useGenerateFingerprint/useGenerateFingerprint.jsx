import { setFingerprint } from 'app/lib/features/auth/auth.slice'
import FingerprintJS from '@fingerprintjs/fingerprintjs'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

export function useGenerateFingerprint() {
  const dispatch = useDispatch()
  const [error, setError] = useState(null)

  const generateFingerprint = async () => {
    try {
      const fp = await FingerprintJS.load()
      const result = await fp.get()
      dispatch(setFingerprint(result.visitorId))
    } catch (err) {
      setError(err)
    }
  }

  return { generateFingerprint, error }
}
