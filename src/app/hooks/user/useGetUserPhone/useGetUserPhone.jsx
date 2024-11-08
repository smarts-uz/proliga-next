import { useState } from 'react'
import { toast } from 'react-toastify'
import { supabase } from '../../../lib/supabaseClient'
import { useTranslation } from 'react-i18next'

export const useGetUserPhone = () => {
  const { t } = useTranslation()
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)

  const getUserPhone = async ({ phone }) => {
    setIsLoading(false)
    setError(null)

    if (!phone) {
      setError('Telefon kirilmagan')
      toast.error(t('Telefon kiritilmagan'), { theme: 'dark' })
      return
    }

    try {
      setIsLoading(true)

      const { data, error } = await supabase
        .from('user')
        .select('phone')
        .is('deleted_at', null)
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
      if (data?.phone) {
        setData(data?.phone)
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message, { theme: 'dark' })
    } finally {
      setIsLoading(false)
    }
  }
  return { getUserPhone, isLoading, error, data }
}
