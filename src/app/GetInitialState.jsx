import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserAuth, setUserTable } from './lib/features/auth/auth.slice'

const GetInitialState = ({ children }) => {
  const dispatch = useDispatch()
  const { userAuth, userTable } = useSelector((state) => state.auth)

  useEffect(() => {
    const sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL.slice(8, 28)
    const auth =
      localStorage.getItem(`user-auth-${sbUrl}`) &&
      JSON.parse(localStorage.getItem(`user-auth-${sbUrl}`))
    const table =
      localStorage.getItem(`user-table-${sbUrl}`) &&
      JSON.parse(localStorage.getItem(`user-table-${sbUrl}`))

    if (auth && auth?.session.access_token && !userAuth) {
      dispatch(setUserAuth(auth))
    }
    if (table && table.email && !userTable) {
      dispatch(setUserTable(table))
    }
  }, [dispatch, userAuth, userTable])

  // useEffect(() => {
  //   if (userAuth && userAuth.session.expiresAt >= Date.now()) {
  //     return async () => {
  //       const { data, error } = await supabase.auth.refreshSession({
  //         refresh_token: state.user.refresh_token,
  //       })

  //       if (error) {
  //         toast.error(error.message)
  //       }
  //     }
  //   }
  // }, [userAuth])

  return <>{children}</>
}

export default GetInitialState
