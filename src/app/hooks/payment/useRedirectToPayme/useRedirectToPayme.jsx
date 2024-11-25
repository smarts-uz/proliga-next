import { useState } from 'react'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'

export const useRedirectToPayme = () => {
  const router = useRouter()
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { lang } = useSelector((store) => store.systemLanguage)
  const { userTable } = useSelector((store) => store.auth)
  const RETURN_URL = process.env.NEXT_PUBLIC_URL

  const redirectToPayme = ({ amount }) => {
    setIsLoading(false)
    setError(null)

    if (!userTable?.id) {
      setError('User not found')
      toast.error('User not found', { theme: 'dark' })
      return
    }

    if (!amount) {
      setError('Amount is required')
      toast.error('Amount is required', { theme: 'dark' })
      return
    }

    try {
      setIsLoading(true)

      const url = new URL('https://checkout.paycom.uz')
      const m = process.env.NEXT_PUBLIC_PAYME_ID // merchant id
      const ac = userTable?.id // account
      const a = amount * 100 // amount
      const l = lang
      const cr = 4217 // UZS
      const ct = 15000 // Millinseconds to wait
      const encoded = btoa(
        `m=${m};ac.user_id=${ac};a=${a};l=${l};c=${RETURN_URL};ct=${ct};cr=${cr};`
      )
      router.push(url.href + encoded)
    } catch (error) {
      setError(error.message)
      toast.error(error.message, { theme: 'dark' })
    } finally {
      setIsLoading(false)
    }
  }
  return { redirectToPayme, isLoading, error }
}
