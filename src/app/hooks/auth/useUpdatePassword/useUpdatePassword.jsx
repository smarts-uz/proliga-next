import { supabase } from 'app/lib/supabaseClient'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'
export const useUpdatePassword = () => {
  const { t } = useTranslation()
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
          toast.error(error.message, { theme: 'dark' })
          return
        }
        if (data?.user) {
          setData(data)
          toast.success(t("Ma'lumot taxrirlandi"), { theme: 'dark' })
        }
      } else {
        toast.error(t("Parolda xatolik"), { theme: 'dark' })
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message, { theme: 'dark' })
    } finally {
      setIsLoading(false)
    }
  }
  return { updatePassword, isLoading, error }
}
