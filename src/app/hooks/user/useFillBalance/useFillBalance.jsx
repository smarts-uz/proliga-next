import { supabase } from 'app/lib/supabaseClient'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'
import { useRefreshUserTable } from '../useRefreshUserTable/useRefreshUserTable'

export const useFillBalance = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { userTable } = useSelector((state) => state.auth)
  const { t } = useTranslation()
  const { refreshUserTable } = useRefreshUserTable()

  const fillBalance = async (amount, system) => {
    if (!amount) {
      setError('Amount is required')
      toast.error('Amount is required', { theme: 'dark' })
      return
    }
    if (!userTable?.id) {
      setError('User not found')
      toast.error('User not found', { theme: 'dark' })
      return
    }

    try {
      setIsLoading(true)
      setError('')

      const { data, error } = await supabase
        .from('pay_balance')
        .insert({
          user_id: userTable?.id,
          price: amount,
          system,
        })
        .select()
        .single()

      if (error) {
        setError(error.message)
        toast.error(error.message, { theme: 'dark' })
        return
      }
      if (data) {
        await refreshUserTable()
        toast.success(t('Hisobingiz toldirildi'), { theme: 'dark' })
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message, { theme: 'dark' })
    } finally {
      setIsLoading(false)
    }
  }
  return { fillBalance, isLoading, error }
}
