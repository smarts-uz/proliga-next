import { useSelector } from 'react-redux'
import { useState } from 'react'
import { supabase } from 'app/lib/supabaseClient'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'

export const useConfirmOTP = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)
  const { t } = useTranslation()
  const { userTable } = useSelector((state) => state.auth)

  const confirmOTP = async (code) => {
    setIsLoading(false)
    setError(null)

    if (!code) {
      toast.error(t('SMS kodingizni kiriting'), { theme: 'dark' })
      setError(t('SMS kodingizni kiriting'))
      return
    }

    if (code.length !== 6) {
      toast.error(t("SMS kodingiz 6 ta raqamdan iborat bo'lishi kerak"), {
        theme: 'dark',
      })
      setError(t("SMS kodingiz 6 ta raqamdan iborat bo'lishi kerak"))
      return
    }

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

      const { data, error } = await supabase.rpc('verify__sms_code', {
        user_id: userTable?.guid,
        confirm_code: code,
      })
      if (error) {
        setError(error.message)
        toast.error(error.message, { theme: 'dark' })
        return
      }
      if (data?.status === 419) {
        toast.warning(t('Kod eskirib qolgan!'), { theme: 'dark' })
      }
      if (data?.status === 200) {
        setData(data)
        toast.success(t('SMS muvaffaqiyatli tasdiqlandi'), { theme: 'dark' })
      }
      if (data?.status === 400) {
        toast.error(t('SMS kodingiz xato'), { theme: 'dark' })
      }
      if (data?.status === 404) {
        toast.error(t('SMS kod topilmadi'), { theme: 'dark' })
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message, { theme: 'dark' })
    } finally {
      setIsLoading(false)
    }
  }
  return { confirmOTP, isLoading, error, data }
}
