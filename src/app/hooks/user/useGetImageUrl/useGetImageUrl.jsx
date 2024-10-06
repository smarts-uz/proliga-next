import { useState } from 'react'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { supabase } from '../../../lib/supabaseClient'
import { setUserPhoto } from 'app/lib/features/auth/auth.slice'

export const useUploadUserImage = () => {
  const dispatch = useDispatch()
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { userAuth, userTable } = useSelector((state) => state.auth)
  const { t } = useTranslation()

  const uploadUserImage = async ({ file }) => {
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
          toast.warning(error.message, { theme: 'dark' })
          return
        }
        if (data) {
          dispatch(setUserPhoto(data?.path))
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
          toast.warning(t("Surat qo'shishda xatolik"), { theme: 'dark' })
          return
        }
        if (data) {
          dispatch(setUserPhoto(data?.path))
        }
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message, { theme: 'dark' })
    } finally {
      setIsLoading(false)
    }
  }
  return { uploadUserImage, isLoading, error }
}
