import { supabase } from 'app/lib/supabaseClient'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { setUserTable } from 'app/lib/features/auth/auth.slice'
import { useTranslation } from 'react-i18next'

export const useUpdateUserData = () => {
  const dispatch = useDispatch()
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { userAuth, userTable } = useSelector((state) => state.auth)
  const { t } = useTranslation()
  const sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL.slice(8, 28)

  const updateUserData = async (
    firstName,
    lastName,
    middleName,
    bio,
    gender,
    birthdate
  ) => {
    if (!firstName) {
      setError(t('Ism kiriting'))
      toast.warning(t('Ism kiriting'))
      return
    }
    if (!gender) {
      setError(t('Jinsni tanlang'))
      toast.warning(t('Jinsni tanlang'))
      return
    }
    if (!birthdate) {
      setError(t("Tug'ilgan yilingizni kiriting"))
      toast.warning(t("Tug'ilgan yilingizni kiriting"))
      return
    }
    if (!userAuth) {
      setError('User not authenticated')
      toast.error('User not authenticated')
      return
    }

    try {
      setIsLoading(true)
      setError('')

      const { data, error } = await supabase
        .from('user')
        .update({
          name: firstName,
          last_name: lastName,
          middle_name: middleName,
          bio,
          gender,
          birth_date: birthdate,
          photo: userTable.photo,
        })
        .eq('guid', userAuth.user.id)
        .select()

      if (error) {
        setError(error.message)
        toast.error(error.message)
        return
      }
      if (data) {
        dispatch(setUserTable(data[0]))
        localStorage.setItem(`user-table-${sbUrl}`, JSON.stringify(data[0]))
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }
  return { updateUserData, isLoading, error }
}
