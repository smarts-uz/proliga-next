import { useState } from 'react'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { supabase } from '../../../lib/supabaseClient'
import { setUserPhoto } from 'app/lib/features/auth/auth.slice'

export const useUploadImage = () => {
  const dispatch = useDispatch()
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { userAuth, userTable } = useSelector((state) => state.auth)
  const { t } = useTranslation()

  const uploadImage = async ({ file }) => {
    setIsLoading(true)
    setError('')

    try {
      const { data, error } = supabase.storage
        .from('public-bucket')
        .getPublicUrl(userTable?.photo)

      if (error) {
        setError(error.message)
        return
      }
      if (data) {
        console.log(data)
        toast.success(t("Su'rat qo'shildi"))
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }
  return { uploadImage, isLoading, error }
}
