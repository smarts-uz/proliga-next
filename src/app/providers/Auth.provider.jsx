'use client'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserAuth, setUserTable } from '../lib/features/auth/auth.slice'
import { usePathname, useRouter } from 'next/navigation'

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch()
  const path = usePathname()
  const router = useRouter()

  const { userAuth, userTable } = useSelector((state) => state.auth)

  useEffect(() => {
    const sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL.slice(8, 28)
    const auth =
      localStorage.getItem(`user-auth-${sbUrl}`) &&
      JSON.parse(localStorage.getItem(`user-auth-${sbUrl}`))
    const table =
      localStorage.getItem(`user-table-${sbUrl}`) !== 'undefined' &&
      JSON.parse(localStorage.getItem(`user-table-${sbUrl}`))

    if (
      auth?.session?.access_token &&
      table?.email &&
      !userAuth &&
      !userTable
    ) {
      dispatch(setUserAuth(auth))
      dispatch(setUserTable(table))
    }
    if ((!auth || !table) && path.slice(1, 5) === 'play') {
      router.push('/')
    }
  }, [dispatch, userAuth, userTable, router, path])

  return children
}

export default AuthProvider
