'use client'
import React, { useState } from 'react'
import { useFormik } from 'formik'
import Gutter from '../../../components/Gutter'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import UppyDashboard from './formik/Uppy/index'
function Page() {
  const [startDate, setStartDate] = useState(new Date())

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      middleName: '',
      birthdate: '',
      lastName: '',
      bio: '',
      gender: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <Gutter>
      <div className="z-10 flex min-h-svh items-center justify-center bg-neutral-800 py-8 text-gray-200 lg:min-h-[45rem] 2xl:min-h-[100vh]">
        <form
          onSubmit={formik.handleSubmit}
          className="auth-container flex w-screen max-w-[80rem] items-center justify-center gap-2"
        >
          <h3 className="flex gap-4 text-xl">Ma&apos;lumot</h3>
          <div className="flex max-w-[40rem]">
            <div className="my-4 md:w-[36rem]">
              <label
                className="my-2 block text-sm font-bold text-neutral-300"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="text"
                disabled
                placeholder="example@email.com"
                className="auth-input"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <label
                className="my-2 block text-sm font-bold text-neutral-300"
                htmlFor="firstName"
              >
                Ism
              </label>
              <input
                placeholder="Ism"
                id="firstName"
                name="firstName"
                type="text"
                className="auth-input"
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
              <label
                className="my-2 block text-sm font-bold text-neutral-300"
                htmlFor="lastName"
              >
                Familiya
              </label>
              <input
                id="lastName"
                name="lastName"
                placeholder="Familiya"
                type="text"
                className="auth-input"
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />

              <label
                className="my-2 block text-sm font-bold text-neutral-300"
                htmlFor="middleName"
              >
                Sharif
              </label>
              <input
                id="middleName"
                name="middleName"
                placeholder="Sharif"
                type="text"
                className="auth-input"
                onChange={formik.handleChange}
                value={formik.values.middleName}
              />

              <label
                className="my-2 block text-sm font-bold text-neutral-300"
                htmlFor="bio"
              >
                Siz haqingizda
              </label>
              <textarea
                id="bio"
                placeholder="Siz haqingizda"
                name="bio"
                type="date"
                cols={1}
                rows={5}
                className="auth-input min-h-64 gap-4"
                onChange={formik.handleChange}
                value={formik.values.bio}
              />
              <div className="py-4 lg:flex">
                <div>
                  <label
                    className="mx-2 my-2 block text-sm font-bold text-neutral-300"
                    htmlFor="gender"
                  >
                    Jins
                  </label>
                  <select
                    id="gender"
                    className="auth-input mx-2 lg:w-48"
                    onChange={formik.handleChange}
                    value={formik.values.gender}
                  >
                    <option value="male">Erkak</option>
                    <option value="female">Ayol</option>
                    <option value="unset">Belgilanmagan</option>
                  </select>
                </div>
                <div>
                  <label
                    className="my-2 block text-sm font-bold text-neutral-300"
                    htmlFor="birthdate"
                  >
                    Tug&apos;ilgan kuni
                  </label>
                  <DatePicker
                    id="birthdate"
                    selected={startDate}
                    className="auth-input mx-2 lg:w-full"
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
              </div>

              <label
                className="5 my-2 block text-sm font-bold text-neutral-300"
                htmlFor="photo"
              >
                Profil uchun surat
              </label>
              <UppyDashboard />
              <button
                className="mt-4 w-full rounded-sm border border-primary bg-neutral-900 py-3 font-semibold transition-all hover:bg-black"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </Gutter>
  )
}

export default Page
