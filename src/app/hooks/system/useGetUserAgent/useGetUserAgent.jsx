import { toast } from 'react-toastify'
import { useState } from 'react'
import { setAgent } from 'app/lib/features/auth/auth.slice'
import { useDispatch } from 'react-redux'

export function useGetUserAgent() {
  const dispatch = useDispatch()
  const [data, setData] = useState()
  const [error, setError] = useState(null)

  const getUserAgent = async () => {
    try {
      const ua = navigator.userAgent
      const browserRegex =
        /(chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
      const match = ua.match(browserRegex) || []
      const browser = match[1] || ''
      const browserVersion = match[2] || ''

      const osRegex = /(mac|win|linux|android|ios|iphone|ipad)/i
      const osMatch = ua.match(osRegex) || []
      const os = osMatch[1] || ''
      const deviceType = /Mobi|Tablet|Android|iOS/.test(ua)
        ? 'Mobile'
        : 'Desktop'

      const info = {
        userAgent: ua,
        platform: navigator.platform,
        language: navigator.language,
        cookiesEnabled: navigator.cookieEnabled,
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        colorDepth: window.screen.colorDepth,
        pixelRatio: window.devicePixelRatio,
        browser,
        browserVersion,
        os,
        deviceType,
        orientation: window.screen.orientation.type,
        connectionType: navigator.connection?.effectiveType,
        memoryUsage: performance.memory?.usedJSHeapSize,
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        touchSupport: 'ontouchstart',
        hardwareConcurrency: navigator.hardwareConcurrency,
      }

      dispatch(setAgent(info))
      setData(info)
    } catch (error) {
      toast.error('Error getting user agent')
      setError(error)
    }
  }

  return { getUserAgent, data, error }
}
