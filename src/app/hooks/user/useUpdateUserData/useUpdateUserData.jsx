import { supabase } from 'app/lib/supabaseClient'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { setUserAuth } from 'app/lib/features/auth/auth.slice'
import { useTranslation } from 'react-i18next'

export const useUpdateUserData = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { userAuth } = useSelector((state) => state.auth)
  const { t } = useTranslation()
  const updateData = async (
    firstName,
    lastName,
    middleName,
    bio,
    gender,
    birthdate,
    photo
  ) => {
    try {
      setIsLoading(true)
      setError('')

      const { data, error } = await supabase
        .from('user')
        .update({
          name: firstName,
          last_name: lastName,
          middle_name: middleName,
          bio: bio,
          gender: gender,
          birth_date: birthdate,
          photo,
        })
        .eq('guid', userAuth.user.id)
        .select()

      if (error) {
        setError(error.message)
        toast.error(error.message)
        return
      }
      if (data) {
        dispatch(setUserAuth(data))
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }
  return { updateData, isLoading, error }
}
