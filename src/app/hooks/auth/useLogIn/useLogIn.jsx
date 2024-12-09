import { useState } from 'react'
import { supabase } from '../../../lib/supabaseClient'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { setUserAuth } from '../../../lib/features/auth/auth.slice'
import { useTranslation } from 'react-i18next'
import { useGetUserTable } from '../useGetUserTable/useGetUserTable'
import { setUserTempData } from '../../../lib/features/auth/auth.slice'

export const useLogIn = () => {
  const { getUserTable } = useGetUserTable()
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)
  const dispatch = useDispatch()
  const sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL.slice(8, 28)
  const { t } = useTranslation()
  const { temp } = useSelector((store) => store.auth)

  const logIn = async ({ email, password }) => {
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

      if (error?.code === 'invalid_credentials') {
        setError(t('Login yoki parol xato'))
        toast.error(t('Login yoki parol xato'), { theme: 'dark' })
        return
      }
      if (error) {
        setError(error.message)
        toast.error(error.message, { theme: 'dark' })
        return
      }
      if (data?.user) {
        setData(data)
        dispatch(setUserAuth(data))
        localStorage.setItem(`user-auth-${sbUrl}`, JSON.stringify(data))
        await getUserTable({ phone: temp?.phone })
        dispatch(setUserTempData(null))
        toast.success(t('Tizimga muvaffaqiyatli kirdingiz'), { theme: 'dark' })
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message, { theme: 'dark' })
    } finally {
      setIsLoading(false)
    }
  }
  return { logIn, isLoading, error, data }
}
