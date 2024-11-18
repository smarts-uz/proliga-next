/* eslint-disable @next/next/no-img-element */
'use client'

import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useGetUserPhoto } from 'app/hooks/user/useGetUserPhoto/useGetUserPhoto'
import Image from 'next/image'
import RefillBalanceModal from 'components/RefillBalanceModal'
import CabinetProfileOTP from './OTPBox'
import RefillBalanceBox from './RefillBalanceBox'

const CabinetProfileTab = ({ setSettingsTab }) => {
  const { userTable, publicUrl } = useSelector((store) => store.auth)
  const { t } = useTranslation()
  const [balanceModal, setBalanceModal] = useState(false)
  const { getUserPhoto } = useGetUserPhoto()
  const { config } = useSelector((store) => store.systemConfig)
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

  useEffect(() => {
    if (userTable?.photo) {
      const fetch = async () => await getUserPhoto()
      fetch()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userTable])

  const getCorrectGenderText = (gender) => {
    if (gender === 'male') {
      return t('Erkak')
    } else if (gender === 'female') {
      return t('Ayol')
    } else {
      return t('Belgilanmagan')
    }
  }

  return (
    <>
      <section className="flex h-full w-full flex-1 flex-col gap-2 rounded-xl bg-neutral-900/80 p-4 lg:h-auto xl:p-6">
        <div className="flex items-center gap-2 md:gap-4">
          {userTable?.email && (
            <div className="flex size-16 select-none items-center justify-center rounded-full bg-primary text-3xl font-bold uppercase text-black md:size-20">
              {userTable.email.slice(0, 1)}
            </div>
          )}
          {publicUrl && (
            <img
              src={publicUrl}
              className="flex size-16 select-none rounded-full md:size-20"
              alt="user avatar"
              width={24}
              height={24}
              loading="lazy"
            />
          )}
          <div className="flex flex-col justify-center text-sm md:text-base">
            <div className="flex gap-1 text-sm font-bold capitalize text-neutral-50 xs:max-w-64 md:max-w-96 md:text-base">
              <p className="truncate">
                {userTable?.name ? userTable?.name : t('Ism')}
              </p>
              <p className="truncate lg:hidden">
                {userTable?.last_name
                  ? userTable?.last_name.slice(0, 1) + '.'
                  : t('Familiya')}
              </p>
              <p className="hidden truncate lg:block">
                {userTable?.last_name ? userTable?.last_name : t('Familiya')}
              </p>
              <p className="truncate lg:hidden">
                {userTable?.middle_name
                  ? userTable?.middle_name.slice(0, 1) + '.'
                  : t('Sharif')}
              </p>
              <p className="hidden truncate lg:block">
                {userTable?.middle_name ? userTable?.middle_name : t('Sharif')}
              </p>
            </div>
            <span className="text-neutral-300">{userTable?.email}</span>
          </div>
          <button
            onClick={setSettingsTab}
            className="ml-auto hidden rounded border border-primary bg-black px-2 py-1 text-neutral-100 transition-all hover:bg-primary hover:text-black md:block"
          >
            {t('Tahrirlash')}
          </button>
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
