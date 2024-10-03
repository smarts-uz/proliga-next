'use client'
import './datepicker.scss'
import Image from 'next/image'
import DatePicker from 'react-datepicker'

import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useUploadUserImage } from 'app/hooks/user/useUploadUserImage/useUploadUserImage'
import { useUpdateUserData } from 'app/hooks/user/useUpdateUserData/useUpdateUserData'

const CabinetSettingsTab = () => {
  const { t } = useTranslation()
  const { userTable } = useSelector((store) => store.auth)
  const [date, setDate] = useState(userTable?.birth_date ?? new Date())
  const [file, setFile] = useState(null)
  const [firstName, setFirstName] = useState(userTable?.name ?? '')
  const [lastName, setLastName] = useState(userTable?.last_name ?? '')
  const [middleName, setMiddleName] = useState(userTable?.middle_name ?? '')
  const [bio, setBio] = useState(userTable?.bio ?? '')
  const [gender, setGender] = useState(userTable?.gender ?? GENDERS.UNSET)
  const { uploadUserImage, isLoading, error } = useUploadUserImage()
  const {
    updateUserData,
    isLoading: updateUserLoading,
    error: updateUserError,
  } = useUpdateUserData()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!firstName) {
      toast.warning('Iltimos ismni kiriting')
    }
    if (!lastName) {
      toast.warning('Iltimos familiyangizni kiriting')
    }
    if (!gender) {
      toast.warning('Iltimos jiningizni tanlang')
    }
    if (!bio || bio.length < 8) {
      toast.warning('Iltimos bio kiriting')
    }

    if (file) {
      uploadUserImage({ file })
    }

    await updateUserData(firstName, lastName, middleName, bio, gender, date)
  }

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  return (
    <motion.section
      initial={{ opacity: 0.25 }}
      animate={{ opacity: 1 }}
      className="h-full w-full flex-1 rounded-xl bg-neutral-900 p-4 lg:h-auto xl:p-6"
    >
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <section className="flex w-full flex-col gap-4 lg:flex-row">
          <div className="cursor-pointer space-y-1">
            <p className="capitalize text-neutral-200">
              {t('Sizning Rasmingiz')}:
            </p>
            <label
              htmlFor="img"
              className="flex size-32 flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-neutral-300 bg-gradient-to-r from-neutral-800 to-stone-900 p-6 transition-all hover:from-neutral-900 hover:to-stone-900"
            >
              <Image
                src="/icons/placeholder-image-2.svg"
                alt="placeholder"
                width={24}
                height={24}
                className="filter-neutral-200 size-8"
              />
              <input
                type="file"
                onChange={handleFileChange}
                id="img"
                accept="image/png, image/jpeg, image/jpg"
                className="hidden"
              />
              <p className="break-words text-center text-xs text-neutral-300">
                {t('Rasmni yuklash')}
              </p>
            </label>
          </div>
          <div className="flex w-auto min-w-80 flex-col items-start justify-start self-start">
            <div className="w-full">
              <label
                className="mx-2 my-2 block text-sm font-bold capitalize text-neutral-300"
                htmlFor="gender"
              >
                {t('Jins')}
              </label>
              <select
                id="gender"
                onChange={(e) => setGender(e.target.value)}
                value={gender}
                className="mr-2 h-10 w-full rounded border border-neutral-400 bg-gradient-to-r from-neutral-800 to-stone-900 px-2 py-1 text-sm capitalize text-neutral-200 placeholder:text-neutral-300 md:text-base"
              >
                <option
                  className="bg-neutral-800 checked:bg-neutral-700"
                  value={GENDERS.UNSET}
                >
                  {t('Belgilanmagan')}
                </option>
                <option
                  className="bg-neutral-800 checked:bg-neutral-700"
                  value={GENDERS.MALE}
                >
                  {t('Erkak')}
                </option>
                <option
                  className="bg-neutral-800 checked:bg-neutral-700"
                  value={GENDERS.FEMALE}
                >
                  {t('Ayol')}
                </option>
              </select>
            </div>
            <div className="flex w-full flex-col">
              <label
                className="my-2 block text-sm font-bold text-neutral-300"
                htmlFor="birthdate"
              >
                {t("Tug'ilgan kuni")}
              </label>
              <DatePicker
                id="birthdate"
                selected={date}
                className="h-10 w-full rounded border border-neutral-400 bg-gradient-to-r from-neutral-800 to-stone-900 px-2 py-1 text-sm text-neutral-200 placeholder:text-neutral-300 md:text-base"
                onChange={(date) => setDate(date)}
              />
            </div>
          </div>
        </section>
        <section className="mb-4 grid grid-cols-1 gap-2 lg:grid-cols-2">
          <div className="col-span-2 w-full lg:col-span-1">
            <label
              className="my-2 block text-sm font-bold capitalize text-neutral-300"
              htmlFor="firstName"
            >
              {t('Ism')}
            </label>
            <input
              placeholder={userTable?.name ?? t('Ism')}
              id="firstName"
              name="firstName"
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              className="h-10 w-full rounded border border-neutral-400 bg-gradient-to-r from-neutral-800 to-stone-900 p-2 text-sm text-neutral-200 placeholder:text-neutral-300 md:h-12 md:text-base"
            />
          </div>
          <div className="col-span-2 w-full lg:col-span-1">
            <label
              className="my-2 block text-sm font-bold capitalize text-neutral-300"
              htmlFor="lastName"
            >
              {t('Familiya')}
            </label>
            <input
              id="lastName"
              name="lastName"
              placeholder={userTable?.last_name ?? t('Familiya')}
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              className="h-10 w-full rounded border border-neutral-400 bg-gradient-to-r from-neutral-800 to-stone-900 p-2 text-sm text-neutral-200 placeholder:text-neutral-300 md:h-12 md:text-base"
            />
          </div>
          <div className="col-span-2 w-full lg:col-span-1">
            <label
              className="my-2 block text-sm font-bold capitalize text-neutral-300"
              htmlFor="surname"
            >
              {t('Sharif')}
            </label>
            <input
              id="surname"
              name="surname"
              placeholder={userTable?.midde_name ?? t('Sharif')}
              type="text"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
              className="h-10 w-full rounded border border-neutral-400 bg-gradient-to-r from-neutral-800 to-stone-900 p-2 text-sm text-neutral-200 placeholder:text-neutral-300 md:h-12 md:text-base"
            />
          </div>
          <div className="col-span-2 w-full">
            <label
              className="my-2 block text-sm font-bold capitalize text-neutral-300"
              htmlFor="bio"
            >
              {t('Siz haqingizda')}
            </label>
            <textarea
              id="bio"
              placeholder={userTable?.bio ?? t('Siz haqingizda')}
              name="bio"
              type="date"
              cols={1}
              rows={5}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="h-10 min-h-56 w-full gap-4 rounded border border-neutral-400 bg-gradient-to-r from-neutral-800 to-stone-900 p-2 text-sm text-neutral-200 placeholder:text-neutral-300 md:h-12 md:text-base 2xl:min-h-64"
            />
          </div>
        </section>
        <button
          className="w-full rounded border border-black bg-primary bg-opacity-75 py-2 font-semibold text-neutral-900 transition-all hover:bg-opacity-100 sm:max-w-64"
          type="submit"
        >
          {updateUserLoading ? (
            <Image
              src="/icons/loading.svg"
              width={24}
              height={24}
              alt="loading"
              className="mx-auto size-6 animate-spin"
            />
          ) : (
            t('Saqlash')
          )}
        </button>
      </form>
    </motion.section>
  )
}

const GENDERS = {
  UNSET: 'unset',
  MALE: 'male',
  FEMALE: 'female',
}

export default CabinetSettingsTab
