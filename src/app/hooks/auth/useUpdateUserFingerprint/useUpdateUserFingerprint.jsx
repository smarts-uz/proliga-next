import { useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { supabase } from '../../../lib/supabaseClient'
import { setUserTable } from '../../../lib/features/auth/auth.slice'
import { useTranslation } from 'react-i18next'

export const useUpdateUserFingerprint = () => {
  const sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL.slice(8, 28)
  const { fingerprint, userTable } = useSelector((store) => store.auth)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const updateUserFingerprint = async ({ id }) => {
    setIsLoading(false)
    setError(null)

    if (!id) {
      setError('ID kirilmagan')
      toast.error(t('ID kiritilmagan'), { theme: 'dark' })
      return
    }
    if (!fingerprint) {
      setError('Fingerprint kirilmagan')
      toast.error(t('Fingerprint kiritilmagan'), { theme: 'dark' })
      return
    }

    try {
      setIsLoading(true)

      const { data, error } = await supabase
        .from('user')
        .update({ visitor: fingerprint, visited_at: new Date() })
        .eq('guid', id)
        .select('*')
        .single()

      if (error) {
        setError(error.message)
        toast.error(error.message, { theme: 'dark' })
        localStorage.removeItem(`user-table-${sbUrl}`)
        localStorage.removeItem(`user-auth-${sbUrl}`)
        return
      }
      if (data) {
        dispatch(setUserTable(data))
        localStorage.setItem(`user-table-${sbUrl}`, JSON.stringify(data))
        setData(data)
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message, { theme: 'dark' })
      localStorage.removeItem(`user-table-${sbUrl}`)
      localStorage.removeItem(`user-auth-${sbUrl}`)
    } finally {
      setIsLoading(false)
    }
  }
  return { updateUserFingerprint, isLoading, error, data }
}