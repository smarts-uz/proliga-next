'use client'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLanguage } from '../lib/features/systemLanguage/systemLanguage.slice'
import { LANGUAGE } from '../utils/languages.util'
import { useTranslation } from 'react-i18next'
import {
  fetchAllNotifications,
  setupNotificationListener,
} from '../lib/features/systemNotification/systemNotification.thunk'
import { fetchSystemConfig } from '../lib/features/systemConfig/systemConfig.thunk'
import { useGenerateFingerprint } from 'app/hooks/system/useGenerateFingerprint/useGenerateFingerprint'
import { useUpdateUserFingerprint } from 'app/hooks/auth/useUpdateUserFingerprint/useUpdateUserFingerprint'
import { useUpdateUserGeo } from 'app/hooks/auth/useUpdateUserGeo/useUpdateUserGeo'
import { useGetUserAgent } from 'app/hooks/system/useGetUserAgent/useGetUserAgent'
import { fetchGeo } from 'app/lib/features/auth/auth.thunk'
import { fetchPrizes } from 'app/lib/features/prize/prize.thunk'

const InitialStateProvider = ({ children }) => {
  const dispatch = useDispatch()
  const { userAuth, userTable, fingerprint, geo } = useSelector(
    (state) => state.auth
  )
  const { lang } = useSelector((state) => state.systemLanguage)
  const { generateFingerprint } = useGenerateFingerprint()
  const { updateUserFingerprint } = useUpdateUserFingerprint()
  const { updateUserGeo } = useUpdateUserGeo()
  const { getUserAgent } = useGetUserAgent()
  const { i18n } = useTranslation()

  useEffect(() => {
    generateFingerprint()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    getUserAgent()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    dispatch(fetchGeo())
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchSystemConfig())
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchPrizes())
  }, [dispatch])

  useEffect(() => {
    if (userTable?.id && userAuth?.user?.id) {
      dispatch(fetchAllNotifications({ userId: userTable.id }))
    }
  }, [dispatch, userTable, userAuth])

  useEffect(() => {
    if (userTable?.id && userAuth?.user?.id) {
      dispatch(setupNotificationListener({ userId: userTable.id }))
    }
  }, [dispatch, userTable, userAuth])

  useEffect(() => {
    if (lang !== userTable?.language && userTable?.id) {
      dispatch(setLanguage(userTable?.language ?? LANGUAGE.uz))
      i18n.changeLanguage(userTable?.language ?? LANGUAGE.uz)
    }
  }, [dispatch, lang, userTable?.language, i18n, userTable])

  useEffect(() => {
    if (userTable?.guid && userTable?.id && userAuth?.user?.id && fingerprint) {
      userTable?.visitor !== fingerprint &&
        updateUserFingerprint({ id: userTable.guid })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fingerprint, userTable, userAuth])

  useEffect(() => {
    if (userTable?.id && userAuth?.user?.id && geo && geo?.city) {
      const table = userTable.geo && JSON.parse(userTable.geo)

      if (!table?.ip) return

      table?.ip !== geo.ip && updateUserGeo({ id: userTable.guid })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fingerprint, userTable, userAuth])

  return children
}

export default InitialStateProvider
