'use client'

import GeoIPInfo from 'components/GEOIPInfo'
import Gutter from 'components/Gutter'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

function Geo() {
  useEffect(() => {
    toast.success('Welcome to secret page!!!', { theme: 'dark' })
  }, [])

  return (
    <section className="flex min-h-svh flex-col items-center justify-center">
      <Gutter>
        <GeoIPInfo />
      </Gutter>
    </section>
  )
}

export default Geo
