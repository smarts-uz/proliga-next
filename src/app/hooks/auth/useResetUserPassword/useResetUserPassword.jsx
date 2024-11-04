import { supabase } from 'app/lib/supabaseClient'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'

export const useResetUserPassword = () => {
  const { t } = useTranslation()
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const resetUserPassword = async (newPassword) => {
    try {
      setIsLoading(true)
      setError(null)

      const { data, error } = await supabase.auth.updateUser({
        password: newPassword,
      })

      if (error) {
        setError(error.message)
        toast.error(error.message, { theme: 'dark' })
        return
      }
      if (data) {
        toast.success(t('Sizning Parolingiz Almashdi'), { theme: 'dark' })
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message, { theme: 'dark' })
    } finally {
      setIsLoading(false)
    }
  }
  return { resetUserPassword, isLoading, error }
}
