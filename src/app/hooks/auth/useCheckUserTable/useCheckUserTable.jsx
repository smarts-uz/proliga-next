import { useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { supabase } from '../../../lib/supabaseClient'
import { useTranslation } from 'react-i18next'
import { setUserTempData } from '../../../lib/features/auth/auth.slice'

export const useCheckUserTable = () => {
  const sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL.slice(8, 28)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const checkUserTable = async ({ phone }) => {
    setIsLoading(false)
    setError(null)

    if (!phone) {
      setError(t('Email yoki Telefon kiritilmagan'))
      toast.error(t('Email yoki Telefon kiritilmagan'), { theme: 'dark' })
      return
    }

    try {
      setIsLoading(true)

      const { data, error } = await supabase
        .from('user')
        .select('phone, email')
        .eq('phone', phone)
        .single()

      if (error?.code === 'PGRST116') {
        setError(error.message)
        toast.error(t('Bunaqa raqamli foydalanuvchi yoq'), { theme: 'dark' })
        return
      }
      if (error) {
        setError(error.message)
        toast.error(error.message, { theme: 'dark' })
        return
      }
      if (!data) {
        setError(t('Parol yoki telefon raqam notogri kiritilgan'))
        toast.error(t('Parol yoki telefon raqam notogri kiritilgan'), {
          theme: 'dark',
        })
        return
      }
      if (data) {
        dispatch(setUserTempData({ email: data?.email, phone: data?.phone }))
        setData(data)
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message, { theme: 'dark' })
    } finally {
      setIsLoading(false)
    }
  }
  return { checkUserTable, isLoading, error, data }
}