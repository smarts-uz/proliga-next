import { supabase } from 'app/lib/supabaseClient'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'

export const useUpdatePassword = () => {
  const { t } = useTranslation()
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const updatePassword = async (newPassword, isVerified, setIsVerified) => {
    if (!isVerified) {
      toast.error(t("Parol notog'ri"), { theme: 'dark' })
      setError(t("Parol notog'ri"))
      return
    }

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
        setIsVerified(false)
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
