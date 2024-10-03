import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserAuth, setUserTable } from './lib/features/auth/auth.slice'
import { usePathname, useRouter } from 'next/navigation'

const GetInitialState = ({ children }) => {
  const dispatch = useDispatch()
  const { userAuth, userTable } = useSelector((state) => state.auth)
  const path = usePathname()
  const router = useRouter()

  useEffect(() => {
    const sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL.slice(8, 28)
    const auth =
      localStorage.getItem(`user-auth-${sbUrl}`) &&
      JSON.parse(localStorage.getItem(`user-auth-${sbUrl}`))
    const table =
      localStorage.getItem(`user-table-${sbUrl}`) &&
      JSON.parse(localStorage.getItem(`user-table-${sbUrl}`))

    if (auth && auth?.session?.access_token && !userAuth) {
      dispatch(setUserAuth(auth))
    }
    if (table && table.email && !userTable) {
      dispatch(setUserTable(table))
    }
    if (!auth && !table && path.slice(1, 5) === 'play') {
      router.push('/')
    }
  }, [dispatch, userAuth, userTable, router, path])

  return <>{children}</>
}

export default GetInitialState
