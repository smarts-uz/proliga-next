import { useSelector } from 'react-redux'
import { useState } from 'react'
import { supabase } from 'app/lib/supabaseClient'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'

export const useSendOTP = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)
  const { t } = useTranslation()
  const { userTable } = useSelector((state) => state.auth)

  const sendOTP = async () => {
    setIsLoading(false)
    setError(null)

    if (!userTable?.guid) {
      toast.error(t('Foydalanuvchi topilmadi'), { theme: 'dark' })
      setError(t('Foydalanuvchi topilmadi'))
      return
    }

    if (!userTable?.phone) {
      toast.error(t('Telefon nomer kiritilmagan'), { theme: 'dark' })
      setError(t('Telefon nomer kiritilmagan'))
      return
    }

    try {
      setIsLoading(true)

      const { data, error } = await supabase.rpc('http__send_message_sms', {
        user_id: userTable?.guid,
        send_phone: userTable?.phone,
      })

      if (error) {
        setError(error.message)
        toast.error(error.message, { theme: 'dark' })
        return
      }
      if (data) {
        setData(data)
        toast.success(t('SMS muvaffaqiyatli yuborildi'), { theme: 'dark' })
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message, { theme: 'dark' })
    } finally {
      setIsLoading(false)
    }
  }
  return { sendOTP, isLoading, error, data }
}
