import { useAuthContext } from '../useAuthContext/useAuthContext'
import { supabase } from '../../../lib/supabaseClient'
import { toast } from 'react-toastify'

export const useLogOut = () => {
  const { dispatch } = useAuthContext()

  const logOut = async () => {
    try {
      dispatch({ type: 'LOGOUT' })
      const { error } = await supabase.auth.signOut()

      if (error) return toast.error(error.message)
    } catch (error) {
      toast.error(error.message)
    }
  }

  return { logOut }
}
