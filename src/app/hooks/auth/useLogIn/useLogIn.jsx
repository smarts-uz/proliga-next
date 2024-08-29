import { use, useState } from 'react'
import { supabase } from '../../../lib/supabaseClient'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { setUserAuth } from '../../../lib/features/auth/auth.slice'

export const useLogIn = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)
  const dispatch = useDispatch()

  const logIn = async ({ login, password }) => {
    setIsLoading(false)
    setError(null)

    if (password.length < 6) {
      setError("Parol 6 ta belgidan kam bo'lmasligi kerak")
      toast.error("Parol 6 ta belgidan kam bo'lmasligi kerak")
      return
    }

    if (!login || !password) {
      setError("Barcha maydonlar to'ldirilishi shart")
      toast.error("Barcha maydonlar to'ldirilishi shart")
      return
    }

    try {
      setIsLoading(true)

      let phone

      if (!login.split('').includes('@')) {
        phone = login
        if (!phone.split('').includes('+')) {
          phone = '+' + phone
        }
        
      }

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
        dispatch(setUserAuth(data?.user))
        localStorage.setItem('user', JSON.stringify(data?.user))
        setData(data)
        toast.success('Tizimga muvaffaqiyatli kirdingiz')
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message)
    }
  }
  return { logIn, isLoading, error, data }
}
