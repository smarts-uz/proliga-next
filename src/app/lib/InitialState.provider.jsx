import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserAuth, setUserTable } from '../lib/features/auth/auth.slice'
import { usePathname, useRouter } from 'next/navigation'
import { setLanguage } from '../lib/features/systemLanguage/systemLanguage.slice'
import { LANGUAGE } from '../utils/languages.util'
import { useTranslation } from 'react-i18next'
import {
  fetchAllNotifications,
  setupNotificationListener,
} from '../lib/features/systemNotification/systemNotification.thunk'
import { fetchSystemConfig } from '../lib/features/systemConfig/systemConfig.thunk'

const InitialStateProvider = ({ children }) => {
  const dispatch = useDispatch()
  const { userAuth, userTable } = useSelector((state) => state.auth)
  const { systemNotifications } = useSelector(
    (state) => state.systemNotifications
  )
  const { lang } = useSelector((state) => state.systemLanguage)
  const { i18n } = useTranslation()
  const path = usePathname()
  const router = useRouter()

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
    if (!auth && !table && path.slice(1, 5) === 'play') {
      router.push('/')
    }
  }, [dispatch, userAuth, userTable, router, path])

  useEffect(() => {
    if (userTable?.id) {
      dispatch(fetchAllNotifications({ userId: userTable.id }))
    }
  }, [dispatch, userTable])

  useEffect(() => {
    if (userTable?.id) {
      dispatch(setupNotificationListener({ userId: userTable.id }))
    }
  }, [dispatch, userTable, systemNotifications])

  useEffect(() => {
    if (lang !== userTable?.language && userTable?.id) {
      dispatch(setLanguage(userTable?.language ?? LANGUAGE.uz))
      i18n.changeLanguage(userTable?.language ?? LANGUAGE.uz)
    }
  }, [dispatch, lang, userTable?.language, i18n, userTable])

  useEffect(() => {
    dispatch(fetchSystemConfig())
    // console.log('Hello you sneaky developer, what are you doing here?')
  }, [dispatch])

  return children
}

export default InitialStateProvider
