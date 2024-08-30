import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserAuth } from './lib/features/auth/auth.slice'

const GetInitialState = ({ children }) => {
  const dispatch = useDispatch()
  const { userAuth } = useSelector((state) => state.auth)

  useEffect(() => {
    const sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL.slice(8, 28)
    const auth = JSON.parse(localStorage.getItem(`sb-${sbUrl}-auth-token`))
    if (auth && auth?.access_token) {
      dispatch(setUserAuth(auth.user))
    }
  }, [dispatch])

  useEffect(() => {
    if (userAuth && userAuth.expiresAt >= Date.now()) {
      return async () => {
        const { data, error } = await supabase.auth.refreshSession({
          refresh_token: state.user.refresh_token,
        })

        if (error) {
          toast.error(error.message)
        }
      }
    }
  }, [userAuth])

  return <>{children}</>
}

export default GetInitialState
