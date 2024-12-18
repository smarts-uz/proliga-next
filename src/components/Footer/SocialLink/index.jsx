import Link from 'next/link'
import Image from 'next/image'

export default function SocialLink({ href, icon, alt, target = '_blank' }) {
  return (
    <Link
      href={href}
      target={target}
      rel="noopener noreferrer"
      className="focus:ring-offset-background transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    >
      <Image
        src={`/icons/${icon}.svg`}
        alt={alt}
        width={24}
        height={24}
        className="opacity-75 transition-opacity hover:opacity-100"
      />
    </Link>
  )
}
