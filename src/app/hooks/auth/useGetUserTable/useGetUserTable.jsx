import { useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { supabase } from '../../../lib/supabaseClient'
import { setUserTable } from '../../../lib/features/auth/auth.slice'
import { useTranslation } from 'react-i18next'

export const useGetUserTable = () => {
  const sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL.slice(8, 28)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const getUserTable = async ({ phone }) => {
    setIsLoading(false)
    setError(null)

    if (!phone) {
      setError(t('Email yoki Telefon kiritilmagan'))
      toast.error(t('Email yoki Telefon kiritilmagan'), { theme: 'dark' })
      return
    }
    console.log('executed')

    try {
      setIsLoading(true)

      const { data, error } = await supabase
        .from('user')
        .select('*')
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
        dispatch(setUserTable(data))
        localStorage.setItem(`user-table-${sbUrl}`, JSON.stringify(data))
        setData(data)
      }
    } catch (error) {
      setError(error.message)
      console.log('idd')
      toast.error(error.message, { theme: 'dark' })
    } finally {
      setIsLoading(false)
    }
  }
  return { getUserTable, isLoading, error, data }
}
