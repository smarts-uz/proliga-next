'use client'
import './datepicker.scss'
import Image from 'next/image'
import DatePicker from 'react-datepicker'

import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useUploadUserImage } from 'app/hooks/user/useUploadUserImage/useUploadUserImage'
import { useUpdateUserData } from 'app/hooks/user/useUpdateUserData/useUpdateUserData'
import { toast } from 'react-toastify'

const CabinetSettingsTab = ({ setHomeTab }) => {
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
      toast.warning('Iltimos ismni kiriting', { theme: 'dark' })
    }

    if (!gender) {
      toast.warning('Iltimos jiningizni tanlang', { theme: 'dark' })
    }

    if (file) {
      uploadUserImage({ file })
    }

    await updateUserData(firstName, lastName, middleName, bio, gender, date)
    if (!isLoading && !error) {
      setHomeTab()
    }
  }

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  return (
    <section className="h-full w-full flex-1 rounded-xl bg-neutral-900/80 p-4 lg:h-auto xl:p-6">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <section className="flex w-full flex-col gap-2 sm:flex-row">
          <div className="cursor-pointer space-y-1">
            <p className="text-sm capitalize text-neutral-300">
              {t('Sizning Rasmingiz')}:
            </p>
            <label
              htmlFor="img"
              className="group flex size-24 flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-neutral-300 bg-gradient-to-r from-neutral-800 to-stone-900 transition-all hover:from-neutral-900 hover:to-stone-900 md:size-32"
              style={
                file && {
                  backgroundImage: `url(${URL.createObjectURL(file)})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }
              }
            >
              <div
                className={`flex-col items-center justify-center gap-0.5 rounded px-0 py-2 ${file ? 'mx-auto hidden bg-black bg-opacity-50 group-hover:flex' : 'flex bg-transparent'}`}
              >
                <Image
                  src={'/icons/placeholder-image-2.svg'}
                  alt="placeholder"
                  width={24}
                  height={24}
                  className="filter-neutral-200 size-6 self-center md:size-8"
                />
                <p
                  className={`break-words text-center text-[11px] text-neutral-300 md:text-xs`}
                >
                  {t('Rasmni yuklash')}
                </p>
              </div>
              <input
                type="file"
                onChange={handleFileChange}
                id="img"
                accept="image/png, image/jpeg, image/jpg"
                className="hidden"
              />
            </label>
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-2 self-start xs:gap-0 sm:w-auto sm:min-w-80">
            <div className="w-full">
              <label
                className="my-1 block text-sm font-bold capitalize text-neutral-300"
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
                className="my-1 block text-sm font-bold text-neutral-300"
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
        <section className="grid grid-cols-1 gap-x-2 gap-y-0 lg:grid-cols-2">
          <div className="col-span-2 w-full lg:col-span-1">
            <label
              className="my-1 block text-sm font-bold capitalize text-neutral-300"
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
              className="my-1 block text-sm font-bold capitalize text-neutral-300"
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
              className="my-1 block text-sm font-bold capitalize text-neutral-300"
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
              className="my-1 block text-sm font-bold capitalize text-neutral-300"
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
              className="h-36 min-h-36 w-full gap-4 rounded border border-neutral-400 bg-gradient-to-r from-neutral-800 to-stone-900 p-2 text-sm text-neutral-200 placeholder:text-neutral-300 md:text-base 2xl:min-h-44"
            />
          </div>
        </section>
        <button
          className="mt-1 w-full rounded border border-black bg-primary bg-opacity-75 py-2 font-semibold text-neutral-900 transition-all hover:bg-opacity-100 sm:max-w-64"
          type="submit"
        >
          {updateUserLoading ? (
            <Image
              src="/icons/loading.svg"
              width={24}
              height={24}
              alt="loading"
              className="filter-neutral-950 mx-auto size-6 animate-spin"
            />
          ) : (
            t('Saqlash')
          )}
        </button>
      </form>
    </section>
  )
}

const GENDERS = {
  UNSET: 'unset',
  MALE: 'male',
  FEMALE: 'female',
}

export default CabinetSettingsTab
