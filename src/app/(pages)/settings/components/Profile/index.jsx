/* eslint-disable @next/next/no-img-element */
'use client'

import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import RefillBalanceModal from 'components/RefillBalanceModal'
import RefillBalanceBox from './RefillBalanceBox'
import CabinetProfileOTP from './OTPBox'
import Image from 'next/image'

const CabinetProfileTab = () => {
  const { userTable, userAuth } = useSelector((store) => store.auth)
  const { config } = useSelector((store) => store.systemConfig)
  const { t } = useTranslation()
  const [balanceModal, setBalanceModal] = useState(false)
  const [canSendSMS, setCanSendSMS] = useState(true)

  const date = new Date(userTable?.birth_date)
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  useEffect(() => {
    if (config?.length > 0) {
      setCanSendSMS(
        Boolean(
          config?.find((i) => i.key === 'can_send_sms').value.toLowerCase() ===
            'true'
        )
      )
    }
  }, [config])

  const getCorrectGenderText = (gender) => {
    if (gender === 'male') {
      return t('Erkak')
    } else if (gender === 'female') {
      return t('Ayol')
    } else {
      return t('Belgilanmagan')
    }
  }

  const handleClick = (value) => {
    navigator.clipboard.writeText(value)
    toast.info(t('Buferga muvaffaqiyatli nusxalandi!'), { theme: 'dark' })
  }

  return (
    <>
      <section className="flex h-full w-full flex-1 flex-col gap-2 rounded-xl bg-neutral-900/80 p-4 lg:h-auto xl:p-6">
        <div className="flex flex-wrap items-center gap-2 md:gap-4">
          {userTable?.email && !userTable?.photo && (
            <span className="flex size-16 select-none items-center justify-center rounded-full bg-primary text-3xl font-bold uppercase text-black md:size-20">
              {userTable.email.slice(0, 1)}
            </span>
          )}
          {userTable?.email && userTable?.photo && (
            <Image
              src={userTable?.photo}
              alt="user"
              width={32}
              draggable={false}
              height={32}
              key={userTable?.photo}
              className="size-16 rounded-full bg-white md:size-20"
            />
          )}
          {!userTable?.email && !userTable?.photo && (
            <Image
              src={'/icons/user.svg'}
              alt="user"
              width={32}
              draggable={false}
              height={32}
              key={userAuth?.user.email}
              className="size-16 rounded-full bg-white md:size-20"
            />
          )}
          <div className="flex flex-col justify-center text-sm md:text-base">
            <div className="flex gap-1 text-sm font-bold capitalize text-neutral-50 xs:max-w-64 md:max-w-96 md:text-base">
              {userTable?.name && <p className="truncate">{userTable?.name}</p>}
              {userTable?.last_name && (
                <>
                  <p className="truncate lg:hidden">
                    {userTable?.last_name.slice(0, 1) + '.'}
                  </p>
                  <p className="hidden truncate lg:block">
                    {userTable?.last_name}
                  </p>
                </>
              )}
              {userTable?.middle_name && (
                <>
                  <p className="truncate lg:hidden">
                    {userTable?.middle_name.slice(0, 1) + '.'}
                  </p>
                  <p className="hidden truncate lg:block">
                    {userTable?.middle_name}
                  </p>
                </>
              )}
              {!userTable?.name &&
                !userTable?.last_name &&
                !userTable?.middle_name && (
                  <p className="truncate">{t('Sizning Ismingiz')}</p>
                )}
            </div>
            <span className="text-neutral-300">{userTable?.email}</span>
          </div>
          <div className="ml-auto flex items-center justify-center gap-1 px-0 py-0 text-sm md:gap-2">
            <p className="block">{t('Foydalanuvchi Id:')}</p>
            <div
              className="flex cursor-pointer items-center justify-center gap-0.5 rounded-md border bg-primary/75 px-2 py-0.5 text-base text-black transition-all hover:bg-primary hover:underline"
              onClick={() => handleClick(userTable?.id)}
            >
              <Image
                width="20"
                height="20"
                className="filter-black size-5"
                src="/icons/copy.svg"
                alt="copy"
              />
              {userTable?.id}
            </div>
          </div>
        </div>
        <section className="flex flex-col gap-2">
          <h3 className="font-medium capitalize">{t('Qisqacha Malumot')}:</h3>
          <div className="grid grid-cols-1 gap-1 lg:grid-cols-2">
            <div className="flex gap-2 rounded border border-neutral-500 bg-neutral-800 p-2">
              <div className="flex items-center gap-1 capitalize">
                <Image
                  src="/icons/call.svg"
                  className="filter-neutral-50 size-5 sm:size-6"
                  alt="phone"
                  width={24}
                  height={24}
                />
                <p className="text-sm sm:text-base">{t('Telefon raqam')} :</p>
              </div>
              <p>{userTable?.phone}</p>
            </div>
            <div className="flex gap-2 rounded border border-neutral-500 bg-neutral-800 p-2">
              <div className="flex items-center gap-1 capitalize">
                <Image
                  src="/icons/calendar.svg"
                  alt="phone"
                  width={24}
                  height={24}
                  className="filter-neutral-50 size-5 sm:size-6"
                />
                <p className="text-sm sm:text-base">{t("Tug'ilgan kuni")} :</p>
              </div>
              <p>{day + '/' + month + '/' + year}</p>
            </div>
            <div className="flex gap-2 rounded border border-neutral-500 bg-neutral-800 p-2">
              <div className="flex gap-1 capitalize">
                <Image
                  src="/icons/two-people.svg"
                  alt="phone"
                  width={24}
                  height={24}
                  className="filter-neutral-50 size-5 sm:size-6"
                />
                <p className="text-sm sm:text-base">{t('Jins')} :</p>
              </div>
              <p>
                {getCorrectGenderText(userTable?.gender) ?? t('Belgilanmagan')}
              </p>
            </div>
          </div>
        </section>
        <section>
          <h3 className="font-medium">{t('Bio')}:</h3>
          <div className="scroll-y-auto line-clamp-5 h-28 max-w-full text-wrap break-words rounded border border-neutral-500 bg-neutral-800 p-2 text-sm">
            {userTable?.bio ? userTable?.bio : t("Ma'lumot yo'q")}
          </div>
        </section>
        <section className="flex flex-wrap justify-start gap-1 sm:gap-2">
          <RefillBalanceBox setBalanceModal={setBalanceModal} />
          {!userTable?.phone_verified && canSendSMS && <CabinetProfileOTP />}
        </section>
      </section>
      <RefillBalanceModal
        setIsModalOpen={setBalanceModal}
        isModalOpen={balanceModal}
      />
    </>
  )
}

export default CabinetProfileTab
