import { supabase } from 'app/lib/supabaseClient'
import { useState } from 'react'
import { toast } from 'react-toastify'

export const useUpdatePassword = () => {
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const updatePassword = async (oldPassword, password, confirmPassword) => {
    try {
      setIsLoading(true)
      setError(null)

      if (password && password === confirmPassword) {
        const { data, error } = await supabase.auth.updateUser({
          password: password,
        })
        if (error) {
          setError(error.message)
          toast.error(error.message)
          return
        }
        if (data?.user) {
          setData(data)
          toast.success("ma'lumot taxrirlandi")
        }
      } else {
        toast.error('parolda xatolik')
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }
  return { updatePassword, isLoading, error }
}
