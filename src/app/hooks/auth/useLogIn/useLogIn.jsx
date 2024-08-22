import { useState } from 'react'
import { supabase } from '@/src/app/lib/supabaseClient'
import { toast } from 'react-toastify'
import { useAuthContext } from '../useAuthContext/useAuthContext'

export const useLogIn = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)
  const { dispatch } = useAuthContext()

  const logIn = async ({ email, password, phone }) => {
    setIsLoading(false)
    setError(null)

    if (password.length < 6)
      return toast.error("Parol 6 ta belgidan kam bo'lmasligi kerak")
    if (phone.length !== 9) return toast.error('Telefon raqam xato terilgan')

    if (!email || !password || !phone)
      return toast.error("Barcha maydonlar to'ldirilishi shart")

    try {
      setIsLoading(true)

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        setIsLoading(false)
        setError(error.message)
        toast.error(error.message)
        return
      }
      if (data?.user && data?.session) {
        setIsLoading(false)
        setData(data)
        localStorage.setItem('user', JSON.stringify(data?.user))
        dispatch({ type: 'LOGIN', payload: data })
        toast.success('Tizimga muvaffaqiyatli kirdingiz')
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message)
    }
  }
  return { logIn, isLoading, error, data }
}
