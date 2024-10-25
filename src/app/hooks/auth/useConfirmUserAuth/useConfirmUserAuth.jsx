import { useState } from 'react'
import { supabase } from '../../../lib/supabaseClient'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

export const useConfirmUserAuth = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { t } = useTranslation()
  const { userAuth } = useSelector((state) => state.auth)
  const email = userAuth?.user?.email

  const confirmUserAuth = async ({ password, setIsVerified }) => {
    setIsLoading(false)
    setError(null)

    if (password.length < 6) {
      setError("Parol 6 ta belgidan kam bo'lmasligi kerak")
      toast.error(t("Parol 6 ta belgidan kam bo'lmasligi kerak"), {
        theme: 'dark',
      })
      return
    }

    if (!email || !password) {
      setError("Barcha maydonlar to'ldirilishi shart")
      toast.error(t("Barcha maydonlar to'ldirilishi shart"), { theme: 'dark' })
      return
    }

    if (!email.includes('@')) {
      setError("Elektron pochta manzili notog'ri kiritildi")
      toast.error(t("Elektron pochta manzili notog'ri kiritildi"), {
        theme: 'dark',
      })
      return
    }

    try {
      setIsLoading(true)

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) {
        setError(error.message)
        toast.error(error.message, { theme: 'dark' })
        return
      }
      if (data?.user) {
        setIsVerified(true)
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message, { theme: 'dark' })
    } finally {
      setIsLoading(false)
    }
  }
  return { confirmUserAuth, isLoading, error }
}
