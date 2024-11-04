import { useState } from 'react'
import { toast } from 'react-toastify'
import { supabase } from '../../../lib/supabaseClient'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { setUserTempData } from 'app/lib/features/auth/auth.slice'

export const useGetUserId = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const getUserId = async ({ phone }) => {
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
        .select('guid')
        .is('deleted_at', null)
        .eq('phone', phone)
        .single()

      if (error) {
        setError(error.message)
        toast.error(error.message, { theme: 'dark' })
        return
      }
      if (data?.guid) {
        dispatch(setUserTempData({ phone, guid: data?.guid }))
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message, { theme: 'dark' })
    } finally {
      setIsLoading(false)
    }
  }
  return { getUserId, isLoading, error }
}
