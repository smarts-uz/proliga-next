'use client'

import { createContext, useReducer, useEffect } from 'react'
import { supabase } from './supabaseClient'
import { toast } from 'react-toastify'

export const AuthContext = createContext()

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN': {
      return { user: action.payload }
    }
    case 'LOGOUT': {
      return { user: null }
    }
    default:
      return state
  }
}

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  })

  useEffect(() => {
    const sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL.slice(8, 28)
    const localAuth = JSON.parse(localStorage.getItem(`sb-${sbUrl}-auth-token`))
    if (localAuth) {
      dispatch({ type: 'LOGIN', payload: localAuth })
    }
  }, [])

  useEffect(() => {
    if (state.user && state.user.expiresAt >= Date.now()) {
      ;async () => {
        const { data, error } = await supabase.auth.refreshSession({
          refresh_token: state.user.refresh_token,
        })

        console.log(data)
        if (error) {
          toast.error(error.message)
        }
      }
    }
  }, [state.user])

  console.log('Auth', state)

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContextProvider
