import { useState } from 'react'
import { supabase } from '../../../lib/supabaseClient'
import { toast } from 'react-toastify'
import { setUserAuth } from '../../../lib/features/auth/auth.slice'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

export const useSignUp = () => {
  const sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL.slice(8, 28)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const signUp = async ({ email, password, confirmPassword }) => {
    setIsLoading(false)
    setError(null)

    if (password.length < 6) {
      setError("Parol 6 ta belgidan kam bo'lmaydi")
      toast.error(t("Parol 6 ta belgidan kam bo'lmasligi kerak"), {
        theme: 'dark',
      })

      return
    }
    if (!email || !password) {
      setError("Barcha maydonlar to'ldirilishi shart")
      return toast.error(t("Barcha maydonlar to'ldirilishi shart"), {
        theme: 'dark',
      })
    }
    if (password !== confirmPassword) {
      setError('Parollar mos kelmadi')
      toast.error(t('Parollar mos kelmadi'), { theme: 'dark' })
      return
    }

    try {
      setIsLoading(true)

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      })

      if (error?.code === 'user_already_exists') {
        toast.error(t("Bu foydalanuvchi allaqachon ro'yxatdan o'tgan"), {
          theme: 'dark',
        })
        setError(error.message)
        localStorage.removeItem(`user-table-${sbUrl}`)
        localStorage.removeItem(`user-auth-${sbUrl}`)
        return
      }

      if (error) {
        toast.error(error.message, { theme: 'dark' })
        setError(error.message)
        localStorage.removeItem(`user-table-${sbUrl}`)
        localStorage.removeItem(`user-auth-${sbUrl}`)
        return
      }
      if (data?.user && data?.session) {
        setData(data)
        localStorage.setItem(`user-auth-${sbUrl}`, JSON.stringify(data))
        toast.success(t('Tizimga muvaffaqiyatli kirdingiz'), { theme: 'dark' })
        dispatch(setUserAuth(data))
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message, { theme: 'dark' })
      localStorage.removeItem(`user-table-${sbUrl}`)
      localStorage.removeItem(`user-auth-${sbUrl}`)
    } finally {
      setIsLoading(false)
    }
  }
  return { signUp, isLoading, error, data }
}
