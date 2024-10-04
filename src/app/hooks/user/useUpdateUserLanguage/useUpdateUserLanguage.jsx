'use client'

import { supabase } from 'app/lib/supabaseClient'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { setUserTable } from 'app/lib/features/auth/auth.slice'
import { setLanguage } from 'app/lib/features/systemLanguage/systemLanguage.slice'

export const useUpdateUserLanguage = () => {
  const dispatch = useDispatch()
  const sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL.slice(8, 28)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { userTable } = useSelector((state) => state.auth)

  const updateUserLanguage = async ({ lang }) => {
    try {
      setIsLoading(true)
      setError('')

      const { data, error } = await supabase
        .from('user')
        .update({
          language: lang,
        })
        .eq('id', userTable.id)
        .select()

      if (error) {
        setError(error.message)
        toast.error(error.message)
        return
      }
      if (data) {
        dispatch(setUserTable(data[0]))
        dispatch(setLanguage(lang))
        localStorage.setItem(`user-table-${sbUrl}`, JSON.stringify(data[0]))
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }
  return { updateUserLanguage, isLoading, error }
}
