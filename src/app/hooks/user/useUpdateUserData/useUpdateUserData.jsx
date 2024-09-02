import { supabase } from 'app/lib/supabaseClient'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

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
    birthdate
  ) => {
    try {
      setIsLoading(true)
      setError('')
      // const { data, error } = await supabase.auth.updateUser({
      //   password: 'ppp009q12',
      // })
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
      toast.success("ma'lumot taxrirlandi")
    } catch (error) {
      console.log(error)
    }
  }
  return { updateData, isLoading, error }
}
