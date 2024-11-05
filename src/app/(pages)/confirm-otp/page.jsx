'use client'

import { useEffect } from 'react'
import ConfirmOTPForm from './ConfirmOTPForm'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'

const ConfirmOTP = () => {
  const { temp } = useSelector((state) => state.auth)
  const router = useRouter()

  useEffect(() => {
    if (!temp?.phone || !temp) {
      router.push('/auth')
    }
  }, [temp, router])

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault()
      event.returnValue = ''
    }
    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [])

  return (
    <main className="flex min-h-screen w-full justify-center">
      <section className="mx-4 mb-8 mt-24 flex w-full max-w-[28rem] flex-col items-center justify-center gap-4 bg-black sm:mx-0 2xl:mt-32">
        <ConfirmOTPForm />
      </section>
    </main>
  )
}

export default ConfirmOTP
