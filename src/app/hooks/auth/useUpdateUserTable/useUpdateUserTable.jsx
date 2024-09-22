import { useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { supabase } from '../../../lib/supabaseClient'
import { setUserTable } from '../../../lib/features/auth/auth.slice'
import { useTranslation } from 'react-i18next'
export const useUpdateUserTable = () => {
  const sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL.slice(8, 28)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const updateUserTable = async ({ id, email, phone }) => {
    setIsLoading(false)
    setError(null)

    if (!id || !phone || !email) {
      setError('Email yoki Telefon kirilmagan')
      toast.error(t("Email yokiTelefon kiritilmagan"))
      return
    }

    try {
      setIsLoading(true)

      const { data, error } = await supabase
        .from('user')
        .update({ phone, email })
        .eq('guid', id)
        .select()

      if (error) {
        setError(error.message)
        toast.error(error.message)
        return
      }
      if (data) {
        dispatch(setUserTable(data[0]))
        localStorage.setItem(`user-table-${sbUrl}`, JSON.stringify(data[0]))
        setData(data)
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }
  return { updateUserTable, isLoading, error, data }
}
