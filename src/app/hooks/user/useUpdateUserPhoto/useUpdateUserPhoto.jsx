import { supabase } from 'app/lib/supabaseClient'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { setUserTable, setUserTempData } from 'app/lib/features/auth/auth.slice'
import { useTranslation } from 'react-i18next'

export const useUpdateUserPhoto = () => {
  const dispatch = useDispatch()
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { userAuth, userTable } = useSelector((state) => state.auth)
  const { t } = useTranslation()
  const sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL.slice(8, 28)

  const updateUserPhoto = async (path) => {
    try {
      setIsLoading(true)
      setError('')
      console.log(path, 'path')

      if (!path) {
        setError(t('Rasmni tanlang'))
        toast.warning(t('Rasmni tanlang'), { theme: 'dark' })
        return
      }

      if (!userAuth || !userTable) {
        setError('User not authenticated')
        toast.error(t('Foydalanuvchi autentifikatsiya qilinmagan'), {
          theme: 'dark',
        })
        return
      }

      const { data, error } = await supabase
        .from('user')
        .update({
          photo: path,
        })
        .eq('guid', userAuth.user.id)
        .select()
        .single()

      if (error) {
        setError(error.message)
        toast.error(error.message, { theme: 'dark' })
        return
      }
      if (data) {
        dispatch(setUserTable(data))
        localStorage.setItem(`user-table-${sbUrl}`, JSON.stringify(data))
        toast.success(t('Rasm muvofaqiyatli yuklandi'), { theme: 'dark' })
        dispatch(setUserTempData(null))
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message, { theme: 'dark' })
    } finally {
      setIsLoading(false)
    }
  }
  return { updateUserPhoto, isLoading, error }
}
