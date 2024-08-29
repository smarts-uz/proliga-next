import { useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { supabase } from '../../../lib/supabaseClient'
import { setUserTable } from '../../../lib/features/auth/auth.slice'

export const useCreateUserTable = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)
  const dispatch = useDispatch()

  const createUserTable = async ({ email, phone }) => {
    setIsLoading(false)
    setError(null)

    if (!email || !phone) {
      setError('Email va Telefon kirilmagan')
      toast.error('Email va Telefon kiritilmagan')
      return
    }

    try {
      setIsLoading(true)

      const { data, error } = await supabase
        .from('user')
        .insert({ email, phone })
        .select()

      if (error) {
        setIsLoading(false)
        setError(error.message)
        toast.error(error.message)
        return
      }
      if (data) {
        setIsLoading(false)
        dispatch(setUserTable(data))
        // localStorage.setItem('user', JSON.stringify(data?.user))
        setData(data)
        toast.success('Tizimga muvaffaqiyatli kirdingiz')
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message)
    }
  }
  return { createUserTable, isLoading, error, data }
}
