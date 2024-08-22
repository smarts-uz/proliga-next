import Link from 'next/link'
import Image from 'next/image'
import Gutter from '@/src/components/Gutter'

const Footer = () => {
  return (
    <footer className="bg-neutral-900">
      <Gutter>
        <footer className="flex flex-wrap justify-between gap-4 rounded-md bg-opacity-90 
        pb-24 pt-8 text-neutral-200 xl:gap-0">
          <div className="flex min-w-80 flex-col gap-4">
            <Link href="/" className="hover:underline">
              Biz haqimizda
            </Link>
          </div>
          <span className="hidden rounded-md border-2 border-black xl:block" />
          <div className="flex min-w-80 flex-col gap-4">
            <Link href="/" className="hover:underline">
              Qoidalarimiz va maxfiylik
            </Link>
            <Link href="/" className="hover:underline">
              Foydalanuvchi shartnomasi
            </Link>
          </div>
          <span className="hidden rounded-md border-2 border-black xl:block" />
          <section className="flex min-w-80 flex-col gap-4">
            <h3 className="font-medium">Bizning ijtimoiy tarmoqlarimiz</h3>
            <div className="flex items-center gap-4">
              <Link href="https://www.instagram.com">
                <Image
                  src={'/icons/instagram.svg'}
                  alt="instagram"
                  width={24}
                  height={24}
                  className="size-8 opacity-75 transition-all hover:scale-110 hover:opacity-100"
                />
              </Link>
              <Link href="https://www.facebook.com">
                <Image
                  src={'/icons/facebook.svg'}
                  alt="facebook"
                  width={24}
                  height={24}
                  className="size-8 opacity-75 transition-all hover:scale-110 hover:opacity-100"
                />
              </Link>
              <Link href="https://www.telegram.org">
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
