import { supabase } from 'app/lib/supabaseClient'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { setUserAuth } from 'app/lib/features/auth/auth.slice'
export const useUpdateUserData = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { userAuth } = useSelector((state) => state.auth)

  const updateData = async (
    firstName,
    lastName,
    middleName,
    bio,
    gender,
    birthdate,
    password
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
        })
        .eq('guid', userAuth.user.id)
        .select()
      if (error) {
        setError(error.message)
        toast.error(error.message)
        return
      }
      if (data?.user && data?.session) {
        dispatch(setUserAuth(data))
        setData(data)
        toast.success("ma'lumot taxrirlandi")
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
