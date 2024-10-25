import { supabase } from 'app/lib/supabaseClient'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { setUserTable } from 'app/lib/features/auth/auth.slice'
import { useTranslation } from 'react-i18next'

export const useFillBalance = () => {
  const dispatch = useDispatch()
  const sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL.slice(8, 28)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { userTable } = useSelector((state) => state.auth)
  const { t } = useTranslation()

  const fillBalance = async (amount) => {
    if (!amount) {
      setError('Amount is required')
      toast.error('Amount is required', { theme: 'dark' })
      return
    }
    if (!userTable?.guid) {
      setError('User not found')
      toast.error('User not found', { theme: 'dark' })
      return
    }

    try {
      setIsLoading(true)
      setError('')

      const { data, error } = await supabase
        .from('user')
        .update({
          balance: userTable.balance + amount,
        })
        .eq('guid', userTable?.guid)
        .select()
        .single()

      if (error) {
        setError(error.message)
        toast.error(error.message)
        return
      }
      if (data) {
        console.log(data)
        toast.success(t('Hisobingiz toldirildi'), { theme: 'dark' })
        dispatch(setUserTable(data))
        localStorage.setItem(`user-table-${sbUrl}`, JSON.stringify(data))
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }
  return { fillBalance, isLoading, error }
}
