import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import {
  setUserAuth,
  setUserTable,
} from '../../../lib/features/auth/auth.slice'
import { setGame } from 'app/lib/features/competition/competition.slice'
import { useRouter  } from 'next/navigation'

export const useLogOut = () => {
  const dispatch = useDispatch()
  const sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL.slice(8, 28)
  const router = useRouter()

  const logOut = async () => {
    try {
      dispatch(setUserAuth(null))
      dispatch(setUserTable(null))
      dispatch(setGame(null))

      localStorage.removeItem(`user-auth-${sbUrl}`)
      localStorage.removeItem(`user-table-${sbUrl}`)
      router.push('/')
    } catch (error) {
      toast.error(error.message)
    } finally {
      toast.success('Tizimdan chiqdingiz')
    }
  }

  return { logOut }
}
