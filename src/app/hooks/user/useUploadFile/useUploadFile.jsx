import userSlice from 'app/lib/features/user/user.slice'
import { supabase } from 'app/lib/supabaseClient'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

export const useUploadFile = () => {
  const [error, setError] = useState(null)
  const [img, setImg] = useState(null)
  const { userAuth } = useSelector((state) => state.auth)
  const [isLoading, setIsLoading] = useState(false)
  console.log(userSlice);
  
  const uploadFile = async (file) => {
    try {
      setIsLoading(true)
      setError('')
      if (localStorage.getItem('photo_path')) {
        const { data, error } = await supabase.storage
          .from('avatars')
          .update(`public/${userAuth.user.id}`, file, {
            cacheControl: '3600',
            upsert: true,
          })
        if (data) {
          localStorage.setItem('photo_path', data.fullPath)
          toast.success("Su'rat taxrirlandi")
        }
        if (error) {
          setError(error.message)
          toast.warning("Su'ratni taxrirlashda xatolik")
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
          localStorage.setItem('photo_path', data.fullPath)
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

  const downloadFile = async () => {
    try {
      const { data, error } = await supabase.storage
        .from('avatars')
        .download('public/' + userAuth.user.id)
      if (data) {
        const fr = new FileReader()
        fr.readAsDataURL(data)
        fr.onload = () => {
          setImg(fr.result)
        }
        setIsLoading(false)
      }
      if (error) {
        setError(error.message)
        return
      }
    } catch (error) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }
  return { uploadFile, downloadFile, img }
}
