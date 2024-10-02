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

  const uploadImage = async ({ file, setImagePath }) => {
    setIsLoading(true)
    setError('')

    try {
      if (userTable.photo) {
        const { data, error } = await supabase.storage
          .from('avatars')
          .update(userTable?.photo, file, {
            cacheControl: '3600',
            upsert: true,
          })

        if (error) {
          setError(error.message)
          toast.warning(error.message)
          return
        }
        if (data) {
          dispatch(setUserPhoto(data?.fullPath))
          setImagePath(data?.fullPath)
        }
      } else {
        const { data, error } = await supabase.storage
          .from('avatars')
          .upload(`public/${userAuth.user.id}`, file, {
            cacheControl: '3600',
            upsert: false,
          })

        if (error) {
          setError(error.message)
          toast.warning(t("Surat qo'shishda xatolik"))
          return
        }
        if (data) {
          setImagePath(data?.fullPath)
          dispatch(setUserPhoto(data?.fullPath))
        }
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
