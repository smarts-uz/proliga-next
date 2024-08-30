import { useState } from 'react'
import { supabase } from '../../../lib/supabaseClient'
import { toast } from 'react-toastify'
import { setUserAuth } from '../../../lib/features/auth/auth.slice'
import { useDispatch } from 'react-redux'
import { useCreateUserTable } from '../useCreateUserTable/useCreateUserTable'

export const useSignUp = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)
  const sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL.slice(8, 28)
  const dispatch = useDispatch()

  const signUp = async ({ email, password, confirmPassword, phone }) => {
    setIsLoading(false)
    setError(null)

    if (password.length < 6) {
      setError("Parol 6 ta belgidan kam bo'lmaydi")
      toast.error("Parol 6 ta belgidan kam bo'lmasligi kerak")
      return
    }
    if (!email || !password || !phone) {
      setError("Barcha maydonlar to'ldirilishi shart")
      return toast.error("Barcha maydonlar to'ldirilishi shart")
    }
    if (password !== confirmPassword) {
      setError('Parollar mos kelmadi')
      toast.error('Parollar mos kelmadi')
      return
    }

    try {
      setIsLoading(true)

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            phone,
          },
        },
      })

      if (error) {
        toast.error(error.message)
        setError(error.message)
      }
      if (data?.user && data?.session) {
        setData(data)
        localStorage.setItem(`user-auth-${sbUrl}`, JSON.stringify(data))
        toast.success('Tizimga muvaffaqiyatli kirdingiz')
        dispatch(setUserAuth(data))
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }
  return { signUp, isLoading, error, data }
}
