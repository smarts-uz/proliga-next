'use client'

import { useState } from 'react'
import {
  LoginFormSkeleton,
  SignUpFormSkeleton,
  AuthTabsSkeleton,
} from './components/AuthSkeleton'
import dynamic from 'next/dynamic'
const SignUpForm = dynamic(() => import('./components/SignUpForm'), {
  ssr: false,
  loading: () => <SignUpFormSkeleton />,
})
const LoginForm = dynamic(() => import('./components/LoginForm'), {
  ssr: false,
  loading: () => <LoginFormSkeleton />,
})
const AuthTabs = dynamic(() => import('./components/Tabs'), {
  ssr: false,
  loading: () => <AuthTabsSkeleton />,
})

const Auth = () => {
  const [currentTab, setCurrentTab] = useState(tabs.login)
  const active = 'bg-black text-primary opacity-100 font-bold'
  const passive = 'bg-transparent text-neutral-400'

  return (
    <main className="flex min-h-screen w-full justify-center">
      <section className="mx-4 mb-8 mt-24 flex w-full max-w-[28rem] flex-col gap-4 bg-black sm:mx-0 2xl:mt-32">
        <AuthTabs
          tabs={tabs}
          setCurrentTab={setCurrentTab}
          loginStyles={currentTab === tabs.login ? active : passive}
          registerStyles={currentTab === tabs.signup ? active : passive}
        />
        {currentTab === 'login' && (
          <LoginForm onClick={() => setCurrentTab(tabs.signup)} />
        )}
        {currentTab === 'signup' && (
          <SignUpForm onClick={() => setCurrentTab(tabs.login)} />
        )}
      </section>
    </main>
  )
}

const tabs = {
  login: 'login',
  signup: 'signup',
}
export default Auth
