'use client'
import ResetPasswordForm from './ResetPasswordForm'

const ResetPassword = () => {
  return (
    <main className="flex min-h-screen w-full justify-center">
      <section className="mx-4 mb-8 mt-24 flex w-full max-w-[28rem] flex-col items-center justify-center gap-4 bg-black sm:mx-0 2xl:mt-32">
        <ResetPasswordForm />
      </section>
    </main>
  )
}

export default ResetPassword
