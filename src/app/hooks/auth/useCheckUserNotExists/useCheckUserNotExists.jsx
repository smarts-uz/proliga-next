import { useState } from 'react'
import { toast } from 'react-toastify'
import { supabase } from '../../../lib/supabaseClient'
import { useTranslation } from 'react-i18next'

export const useCheckUserNotExists = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(false)
  const { t } = useTranslation()

  const checkUserNotExists = async ({ phone }) => {
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
        .select('phone')
        .eq('phone', phone)
        .single()

      if (error?.code === 'PGRST116') {
        setData(true)
        return
      }
      if (error) {
        setError(error.message)
        toast.error(error.message, { theme: 'dark' })
        return
      }
      if (data) {
        setData(false)
        return
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message, { theme: 'dark' })
    } finally {
      setIsLoading(false)
    }
  }
  return { checkUserNotExists, isLoading, error, data }
}
