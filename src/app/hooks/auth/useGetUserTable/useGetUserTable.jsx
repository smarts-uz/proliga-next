import { useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { supabase } from '../../../lib/supabaseClient'
import { setUserTable } from '../../../lib/features/auth/auth.slice'

export const useGetUserTable = () => {
  const sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL.slice(8, 28)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)
  const dispatch = useDispatch()

  const getUserTable = async ({ phone }) => {
    setIsLoading(false)
    setError(null)

    if (!phone) {
      setError('Email yoki Telefon kirilmagan')
      toast.error('Email yoki Telefon kiritilmagan')
      return
    }

    try {
      setIsLoading(true)

      const { data, error } = await supabase
        .from('user')
        .select()
        .eq('phone', phone)

      if (error) {
        setError(error.message)
        toast.error(error.message)
        return
      }
      if (!data[0]) {
        setError('Parol yoki telefon raqam notogri kiritilgan')
        toast.error('Parol yoki telefon raqam notogri kiritilgan')
        return
      }
      if (data && data[0]) {
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
  return { getUserTable, isLoading, error, data }
}
