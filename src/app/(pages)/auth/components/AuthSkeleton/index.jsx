'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const AuthSkeleton = () => {
  const [currentTab, setCurrentTab] = useState('login')
  const active = 'bg-black text-primary opacity-100 font-bold'
  const passive = 'bg-transparent text-neutral-400'
  const { t } = useTranslation()

  return (
    <section className="mx-4 mb-8 mt-24 flex w-full max-w-[28rem] flex-col gap-4 bg-black sm:mx-0 2xl:mt-32">
      <div className="flex rounded bg-neutral-900 p-1">
        <button
          className={`flex-1 select-none rounded py-1.5 text-sm font-medium capitalize transition-all ${currentTab === 'login' ? active : passive}`}
          onClick={() => setCurrentTab('login')}
        >
          {t('Tizimga kirish_1')}
        </button>
        <button
          className={`flex-1 select-none rounded py-1.5 text-sm font-medium transition-all ${currentTab === 'signup' ? active : passive}`}
          onClick={() => setCurrentTab('signup')}
        >
          {t("Ro'yxatdan o'tish")}
        </button>
      </div>
      <LoginFormSkeleton />
    </section>
  )
}

export const LoginFormSkeleton = () => {
  return (
    <Card className="w-full max-w-[28rem] bg-neutral-950 shadow shadow-neutral-500">
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-8 w-3/4" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="flex justify-between">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-1/4" />
        </div>
        <Skeleton className="h-12 w-full" />
      </CardContent>
    </Card>
  )
}

export const SignUpFormSkeleton = () => {
  return (
    <Card className="w-full max-w-[28rem] bg-neutral-950 shadow shadow-neutral-500">
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-8 w-3/4" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="flex justify-between">
          <Skeleton className="h-4 w-1/4" />
        </div>
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-12 w-full" />
      </CardContent>
    </Card>
  )
}

export default AuthSkeleton
