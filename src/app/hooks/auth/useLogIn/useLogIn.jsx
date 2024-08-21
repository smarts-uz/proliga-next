import { useState } from 'react'
import { supabase } from '@/src/app/lib/supabaseClient'
import { toast } from 'react-toastify'

export const useLogIn = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)

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
        setError(error.message)
        toast.error(error.message)
        setIsLoading(false)
      }
      if (data?.user && data?.session) {
        setData(data)
        toast.success('Tizimga muvaffaqiyatli kirdingiz')
        setIsLoading(false)
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message)
    }
  }
  return { logIn, isLoading, error, data }
}
