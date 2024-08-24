'use client'
import Rules from '../components/Rules'
import Promotions from '../components/Promotions'
import Hero from '../components/Hero'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserAuth } from './lib/features/auth/auth.slice'

export default function Home() {
  const dispatch = useDispatch()
  const { userAuth } = useSelector((state) => state.auth)

  console.log(userAuth)
  useEffect(() => {
    const sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL.slice(8, 28)
    const auth = JSON.parse(localStorage.getItem(`sb-${sbUrl}-auth-token`))
    if (auth.access_token) {
      dispatch(setUserAuth(auth.user))
    }
  }, [dispatch])

  // useEffect(() => {
  //   if (state.user && state.user.expiresAt >= Date.now()) {
  //     ;async () => {
  //       const { data, error } = await supabase.auth.refreshSession({
  //         refresh_token: state.user.refresh_token,
  //       })

  //       console.log(data)
  //       if (error) {
  //         toast.error(error.message)
  //       }
  //     }
  //   }
  // }, [state.user])

  return (
    <section>
      <Hero />
      <Promotions />
      <Rules />
    </section>
  )
}
