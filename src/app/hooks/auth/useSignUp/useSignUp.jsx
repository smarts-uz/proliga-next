import { useState } from 'react'
import { supabase } from '../../../lib/supabaseClient'
import { toast } from 'react-toastify'
import { useAuthContext } from '../useAuthContext/useAuthContext'

export const useSignUp = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)
  const { dispatch } = useAuthContext()

  const signUp = async ({ email, password, confirmPassword, phone }) => {
    setIsLoading(false)
    setError(null)

    if (password.length < 6)
      return toast.error("Parol 6 ta belgidan kam bo'lmasligi kerak")
    if (phone.length !== 9) return toast.error('Telefon raqam xato terilgan')

    if (!email || !password || !phone)
      return toast.error("Barcha maydonlar to'ldirilishi shart")
    if (password !== confirmPassword) return toast.error('Parollar mos kelmadi')

    try {
      setIsLoading(true)

      const { data, error } = await supabase.auth.signUp(
        {
          email,
          password,
        },
        { phone }
      )

      if (error) {
        toast.error(error.message)
        setError(error.message)
        setIsLoading(false)
      }
      if (data?.user && data?.session) {
        setData(data)
        dispatch({ type: 'LOGIN', payload: data.user })
        toast.success('Tizimga muvaffaqiyatli kirdingiz')
        setIsLoading(false)
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message)
    }
  }
  return { signUp, isLoading, error, data }
}
