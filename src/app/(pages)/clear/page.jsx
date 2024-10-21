'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

function Clear() {
  const router = useRouter()
  useEffect(() => {
    localStorage.clear()
    router.push('/')
  }, [router])

  return <div></div>
}

export default Clear
