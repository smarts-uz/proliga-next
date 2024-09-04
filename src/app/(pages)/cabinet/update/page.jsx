'use client'

import Gutter from 'components/Gutter'
import { useFormik } from 'formik'
import { useUpdatePassword } from 'app/hooks/auth/useUpdatePassword/useUpdatePassword'
import Image from 'next/image'
import { useState } from 'react'
const UpdatePassword = () => {
  const { updatePassword, error, isLoading } = useUpdatePassword()
  const [showPassword, setShowPassword] = useState(false)

  const formik = useFormik({
    initialValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  const update = () => {
    try {
      updatePassword(
        formik.values.oldPassword,
        formik.values.newPassword,
        formik.values.confirmPassword
      )
    } catch (error) {}
  }
  return (
    <Gutter>
      <div className="z-10 flex min-h-svh items-center justify-center py-8 text-gray-200 lg:min-h-[45rem] 2xl:min-h-[100vh]">
        <form className="auth-container gap-2" onSubmit={formik.handleSubmit}>
          <label
            className="mb-2 block text-sm font-bold text-neutral-300"
            htmlFor="oldPassword"
          >
            Eski parol
          </label>
          <input
            id="oldPassword"
            name="oldPassword"
            className="auth-input"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.oldPassword}
          />

          <label
            className="mb-2 block text-sm font-bold text-neutral-300"
            htmlFor="newPassword"
          >
            Yangi parol
          </label>
          <input
            id="newPassword"
            name="newPassword"
            className="auth-input"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.newPassword}
          />
          <label
            className="mb-2 block text-sm font-bold text-neutral-300"
            htmlFor="confirmPassword"
          >
            Yangi parolni qayta kiriting
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            className="auth-input"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
          />

          <button
            className="mt-4 w-full rounded-sm border border-primary bg-neutral-900 py-3 font-semibold transition-all hover:bg-black"
            type="submit"
            onClick={() => update()}
          >
            Tahrirlash
          </button>
        </form>
      </div>
    </Gutter>
  )
}
export default UpdatePassword
