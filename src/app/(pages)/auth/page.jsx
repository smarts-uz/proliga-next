'use client'

import { useState } from 'react'
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'
import { useTranslation } from 'react-i18next'
const Auth = () => {
  const [currentTab, setCurrentTab] = useState(tabs.login)

  const active = 'bg-black text-primary opacity-100 font-bold'
  const passive = 'bg-transparent text-neutral-400'
const {t} = useTranslation()
  return (
    <main className="flex min-h-screen w-full justify-center">
      <section className="mx-4 mb-8 mt-24 flex w-full max-w-[28rem] flex-col gap-4 bg-black sm:mx-0 2xl:mt-32">
        <div className="flex rounded bg-neutral-900 p-1">
          <button
            className={`flex-1 select-none rounded py-1.5 text-sm font-medium capitalize transition-all ${currentTab === tabs.login ? active : passive}`}
            onClick={() => setCurrentTab(tabs.login)}
          >
            {t("Tizimga kirish")}
          </button>
          <button
            className={`flex-1 select-none rounded py-1.5 text-sm font-medium transition-all ${currentTab === tabs.signup ? active : passive}`}
            onClick={() => setCurrentTab(tabs.signup)}
          >
            {t("Ro'yxatdan o'tish")}
          </button>
        </div>
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
