import { supabase } from 'app/lib/supabaseClient'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { setUserTable } from 'app/lib/features/auth/auth.slice'
import { useTranslation } from 'react-i18next'

export const useRefreshUserTable = () => {
  const dispatch = useDispatch()
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { userAuth } = useSelector((state) => state.auth)
  const { t } = useTranslation()
  const sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL.slice(8, 28)

  const refreshUserTable = async () => {
    if (!userAuth) {
      setError('User not authenticated')
      toast.error(t('Foydalanuvchi autentifikatsiya qilinmagan'), {
        theme: 'dark',
      })
      return
    }

    try {
      setIsLoading(true)
      setError('')

      const { data, error } = await supabase
        .from('user')
        .select('*')
        .eq('guid', userAuth.user.id)
        .single()

      if (error) {
        setError(error.message)
        toast.error(error.message, { theme: 'dark' })
        return
      }
      if (data) {
        dispatch(setUserTable(data))
        localStorage.setItem(`user-table-${sbUrl}`, JSON.stringify(data))
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message, { theme: 'dark' })
    } finally {
      setIsLoading(false)
    }
  }
  return { refreshUserTable, isLoading, error }
}
