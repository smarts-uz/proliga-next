import { supabase } from '../../../lib/supabaseClient'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import {
  setUserAuth,
  setUserTable,
} from '../../../lib/features/auth/auth.slice'

export const useLogOut = () => {
  const dispatch = useDispatch()
  const sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL.slice(8, 28)

  const logOut = async () => {
    try {
      // const { error } = await supabase.auth.signOut()

      // if (error) return toast.error(error.message)

      dispatch(setUserAuth(null))
      dispatch(setUserTable(null))

      localStorage.removeItem(`user-auth-${sbUrl}`)
      localStorage.removeItem(`user-table-${sbUrl}`)
    } catch (error) {
      toast.error(error.message)
    } finally {
      toast.success('Tizimdan chiqdingiz')
    }
  }

  return { logOut }
}
