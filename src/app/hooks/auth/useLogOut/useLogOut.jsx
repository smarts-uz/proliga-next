import { supabase } from '../../../lib/supabaseClient'
import { toast } from 'react-toastify'

export const useLogOut = () => {

  const logOut = async () => {
    try {
      const { error } = await supabase.auth.signOut()

      if (error) return toast.error(error.message)
    } catch (error) {
      toast.error(error.message)
    }
  }

  return { logOut }
}
