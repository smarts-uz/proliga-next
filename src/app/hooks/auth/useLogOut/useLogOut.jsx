import { supabase } from '../../../lib/supabaseClient'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { setUserAuth } from '../../../lib/features/auth/auth.slice'

export const useLogOut = () => {
  const dispatch = useDispatch()

  const logOut = async () => {
    try {
      const { error } = await supabase.auth.signOut()

      if (error) return toast.error(error.message)
      dispatch(setUserAuth(null))
    } catch (error) {
      toast.error(error.message)
    }
  }

  return { logOut }
}
