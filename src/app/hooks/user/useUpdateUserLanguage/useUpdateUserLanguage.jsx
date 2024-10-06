'use client'

import { supabase } from 'app/lib/supabaseClient'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { setUserTable } from 'app/lib/features/auth/auth.slice'
import { setLanguage } from 'app/lib/features/systemLanguage/systemLanguage.slice'
import { useTranslation } from 'react-i18next'
import { LANGUAGE } from 'app/utils/languages.util'

export const useUpdateUserLanguage = () => {
  const dispatch = useDispatch()
  const sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL.slice(8, 28)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { userTable } = useSelector((state) => state.auth)
  const { i18n } = useTranslation()

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
        toast.error(error.message, { theme: 'dark' })
        return
      }
      if (data) {
        dispatch(setUserTable(data[0]))
        dispatch(setLanguage(lang))
        i18n.changeLanguage(data[0]?.language ?? LANGUAGE.uz)
        localStorage.setItem(`user-table-${sbUrl}`, JSON.stringify(data[0]))
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message, { theme: 'dark' })
    } finally {
      setIsLoading(false)
    }
  }
  return { updateUserLanguage, isLoading, error }
}
