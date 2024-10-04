import { useState } from 'react'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { supabase } from '../../../lib/supabaseClient'
import { setPublicUrl } from 'app/lib/features/auth/auth.slice'

export const useGetUserPhoto = () => {
  const dispatch = useDispatch()
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { userAuth, userTable } = useSelector((state) => state.auth)
  const { t } = useTranslation()

  const getUserPhoto = async () => {
    setIsLoading(true)
    setError('')

    try {
      const { data, error } = supabase.storage
        .from('avatars')
        .getPublicUrl(userTable?.photo)

      if (error) {
        setError(error.message)
        return
      }
      if (data) {
        dispatch(setPublicUrl(data.publicUrl))
        console.log(data)
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }
  return { getUserPhoto, isLoading, error }
}
