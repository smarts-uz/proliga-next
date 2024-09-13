import { supabase } from 'app/lib/supabaseClient'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

export const useUploadFile = () => {
  const [error, setError] = useState(null)
  const { userAuth } = useSelector((state) => state.auth)
  const [isLoading, setIsLoading] = useState(false)

  const uploadFile = async (file) => {
    try {
      setIsLoading(true)
      setError('')
      if (localStorage.getItem('photo_path')) {
        const { data, error } = await supabase.storage
          .from('avatars')
          .update(localStorage.getItem('photo_path'), file, {
            cacheControl: '3600',
            upsert: true,
          })
        if (data) {
          localStorage.setItem('photo_path', data.path)
          toast.success("Su'rat taxrirlandi")
        }
        if (error) {
          setError(error.message)
          toast.warning(error.message)
          return
        }
      } else {
        const { data, error } = await supabase.storage
          .from('avatars')
          .upload(`public/${userAuth.user.id}`, file, {
            cacheControl: '3600',
            upsert: false,
          })
        if (data) {
          localStorage.setItem('photo_path', data.path)
          toast.success("Su'rat qo'shildi")
        }

        if (error) {
          setError(error.message)
          toast.warning("Surat qo'shishda xatolik")
          return
        }
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return { uploadFile, isLoading, error }
}
