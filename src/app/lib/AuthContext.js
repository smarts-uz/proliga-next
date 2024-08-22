'use client'

import { createContext, useReducer, useEffect } from 'react'

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
  // const sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL.slice(8, 28)

  // const localAuth = JSON.parse(localStorage.getItem(`sb-${sbUrl}-auth-token`))

  useEffect(() => {
    const sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL.slice(8, 28)
    const localAuth = JSON.parse(localStorage.getItem(`sb-${sbUrl}-auth-token`))
    if (localAuth) {
      dispatch({ type: 'LOGIN', payload: localAuth })
    }
  }, [])

  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  })

  console.log('Auth', state)

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContextProvider
