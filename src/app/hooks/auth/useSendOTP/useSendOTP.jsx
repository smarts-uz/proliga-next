import { useState } from 'react'
import { supabase } from 'app/lib/supabaseClient'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/navigation'

export const useSendOTP = () => {
  const router = useRouter()
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)
  const { t } = useTranslation()

  const sendOTP = async ({
    phone,
    shouldRedirect = false,
    redirectTo = '',
  }) => {
    setIsLoading(false)
    setError(null)

    if (!phone) {
      toast.error(t('Telefon raqam kiritilmagan'), { theme: 'dark' })
      setError(t('Telefon raqam kiritilmagan'))
      return
    }

    try {
      setIsLoading(true)

      const { data, error } = await supabase.rpc('http__send_message_sms', {
        send_phone: phone,
      })

      if (error) {
        setError(error.message)
        toast.error(error.message, { theme: 'dark' })
        return
      }
      if (data?.status !== 200) {
        setError(data?.response?.message)
        toast.error(data?.response?.message, { theme: 'dark' })
        return
      }
      if (data?.status === 200) {
        setData(data)
        toast.success(t('SMS muvaffaqiyatli yuborildi'), { theme: 'dark' })
        if (shouldRedirect) {
          router.push(redirectTo)
        }
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
