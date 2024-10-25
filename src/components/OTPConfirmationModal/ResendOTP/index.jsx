'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function ResendOTP() {
  const [countdown, setCountdown] = useState(60)
  const [isResendEnabled, setIsResendEnabled] = useState(false)

  useEffect(() => {
    let timer
    if (countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1)
      }, 1000)
    } else {
      setIsResendEnabled(true)
    }
    return () => clearTimeout(timer)
  }, [countdown])

  return (
    <div className="flex items-center space-x-2">
      <Button
        disabled={!isResendEnabled}
        type="button"
        className={`${
          isResendEnabled
            ? 'text-primary hover:text-primary/70'
            : 'text-neutral-300'
        } h-7 border bg-transparent px-2 text-xs`}
      >
        <Image
          src="./icons/resend.svg"
          alt="swap"
          height="20"
          width="20"
          className={`mr-1.5 size-5 ${isResendEnabled ? 'filter-primary' : 'filter-neutral-300'}`}
        />
        Resend OTP
      </Button>
      {!isResendEnabled && (
        <div className="text-sm text-neutral-200">{countdown}s</div>
      )}
    </div>
  )
}
