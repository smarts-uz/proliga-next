import { supabase } from 'app/lib/supabaseClient'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'

export const useResetUserPassword = () => {
  const { t } = useTranslation()
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)

  const resetUserPassword = async ({ password, code, phone }) => {
    try {
      setIsLoading(true)
      setError(null)

      if (!phone) {
        toast.error(t('Telefon nomer kiritilmagan'), { theme: 'dark' })
        setError(t('Telefon nomer kiritilmagan'))
        return
      }

      if (password?.length < 6 || !password) {
        setError("Parol 6 ta belgidan kam bo'lmaydi")
        toast.error(t("Parol 6 ta belgidan kam bo'lmasligi kerak"), {
          theme: 'dark',
        })
      }

      if (!code) {
        toast.error(t('SMS kod bolishi shart'), { theme: 'dark' })
        setError(t('SMS Kod bolishi shart'))
        return
      }

      const { data, error } = await supabase.rpc(
        'http__reset_password_by_phone_number',
        {
          phone_number: phone,
          sms_code: code,
          new_pass: password,
        }
      )

      if (error) {
        setError(error.message)
        toast.error(error.message, { theme: 'dark' })
        return
      }
      if (data?.status === 200) {
        toast.success(t('Sizning parolingiz almashtirildi'), { theme: 'dark' })
        setData(data)
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message, { theme: 'dark' })
    } finally {
      setIsLoading(false)
    }
  }
  return { resetUserPassword, isLoading, error, data }
}
