import { configKey, configType } from 'app/utils/config.util'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { Separator } from '@/components/ui/separator'

const Footer = () => {
  const { t } = useTranslation()
  const { config } = useSelector((store) => store.systemConfig)

  const [socialLinks, setSocialLinks] = useState({
    email: '',
    instagram: '',
    telegram: '',
  })

  useEffect(() => {
    if (config?.length > 0) {
      setSocialLinks({
        email:
          config.find(
            (i) =>
              i.key === configKey.link_email && i.type === configType.TextField
          )?.value ?? '/',
        instagram:
          config.find(
            (i) =>
              i.key === configKey.link_instagram &&
              i.type === configType.TextField
          )?.value ?? '/',
        telegram:
          config.find(
            (i) =>
              i.key === configKey.link_telegram &&
              i.type === configType.TextField
          )?.value ?? '/',
      })
    }
  }, [config])

  const footerLinks = [
    { href: '/about-us', label: t('Biz haqimizda') },
    { href: '/packages', label: t('Paketlar') },
    { href: '/regulation', label: t('Qoidalarimiz va maxfiylik') },
    { href: '/user-agreement', label: t('Foydalanuvchi shartnomasi') },
  ]

  return (
    <footer className="bg-background text-foreground w-full border-t border-neutral-800">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('Navigatsiya')}</h3>
            <nav className="flex flex-col space-y-2">
              {footerLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors duration-200 hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('Huquqiy')}</h3>
            <nav className="flex flex-col space-y-2">
              {footerLinks.slice(2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors duration-200 hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="space-y-4 lg:col-span-2">
            <h3 className="text-lg font-semibold">
              {t('Bizning ijtimoiy tarmoqlarimiz')}
            </h3>
            <div className="flex space-x-4">
              <SocialLink
                href={socialLinks.instagram}
                icon="instagram"
                alt="Instagram"
              />
              <SocialLink href={socialLinks.email} icon="mail" alt="Email" />
              <SocialLink
                href={socialLinks.telegram}
                icon="telegram"
                alt="Telegram"
              />
            </div>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="text-muted-foreground text-center text-sm">
          © {new Date().getFullYear()} {t('Barcha huquqlar himoyalangan')}
        </div>
      </div>
    </footer>
  )
}

export default Footer

export function SocialLink({ href, icon, alt }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="focus:ring-offset-background transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    >
      <Image
        src={`/icons/${icon}.svg`}
        alt={alt}
        width={24}
        height={24}
        className="size-6 opacity-75 transition-opacity hover:opacity-100 md:size-7 xl:size-8"
      />
    </Link>
  )
}
