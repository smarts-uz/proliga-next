import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import Image from 'next/image'
import Gutter from '../Gutter'
import { configKey, configType } from 'app/utils/config.util'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const Footer = () => {
  const { t } = useTranslation()
  const { config } = useSelector((store) => store.systemConfig)

  const [email, setEmail] = useState('')
  const [instagram, setInstagram] = useState('') // search for config & check if it's active
  const [telegram, setTelegram] = useState('')

  useEffect(() => {
    if (config?.length > 0) {
      setEmail(
        config?.find(
          (i) =>
            i.key === configKey.link_email && i.type === configType.TextField
        ).value ?? null
      )
      setInstagram(
        config?.find(
          (i) =>
            i.key === configKey.link_instagram &&
            i.type === configType.TextField
        ).value ?? null
      )
      setTelegram(
        config?.find(
          (i) =>
            i.key === configKey.link_telegram && i.type === configType.TextField
        ).value ?? null
      )
    }
  }, [config])

  return (
    <footer className="w-full border-t border-neutral-400 bg-black">
      <Gutter>
        <footer className="flex flex-wrap justify-between gap-4 rounded-md bg-opacity-90 py-8 text-sm text-neutral-200 lg:pb-12 lg:text-base xl:gap-0">
          <div className="flex min-w-80 flex-col gap-4">
            <Link href="/about-us" className="capitalize hover:underline">
              {t('Biz haqimizda')}
            </Link>
            <Link href="/packages" className="capitalize hover:underline">
              {t('Paketlar')}
            </Link>
          </div>
          <span className="hidden rounded-md border-2 border-neutral-300 xl:block" />
          <div className="flex min-w-80 flex-col gap-4">
            <Link href="/regulation" className="hover:underline">
              {t('Qoidalarimiz va maxfiylik')}
            </Link>
            <Link href="/user-agreement" className="hover:underline">
              {t('Foydalanuvchi shartnomasi')}
            </Link>
          </div>
          <span className="hidden rounded-md border-2 border-neutral-300 xl:block" />
          <section className="flex min-w-80 flex-col gap-4">
            <h3 className="cursor-default font-medium">
              {t('Bizning ijtimoiy tarmoqlarimiz')}
            </h3>
            <div className="flex items-center gap-4">
              <Link target="_blank" href={instagram ?? '/'}>
                <Image
                  src={'/icons/instagram.svg'}
                  alt="instagram"
                  width={24}
                  height={24}
                  className="size-8 opacity-75 transition-all hover:scale-110 hover:opacity-100"
                />
              </Link>
              <Link target="_blank" href={email ?? '/'}>
                <Image
                  src={'/icons/mail.svg'}
                  alt="facebook"
                  width={24}
                  height={24}
                  className="size-8 opacity-75 transition-all hover:scale-110 hover:opacity-100"
                />
              </Link>
              <Link target="_blank" href={telegram ?? '/'}>
                <Image
                  src={'/icons/telegram.svg'}
                  alt="telegram"
                  width={24}
                  height={24}
                  className="size-8 opacity-75 transition-all hover:scale-110 hover:opacity-100"
                />
              </Link>
            </div>
          </section>
        </footer>
      </Gutter>
    </footer>
  )
}

export default Footer
