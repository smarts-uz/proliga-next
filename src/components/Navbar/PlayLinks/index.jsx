'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const PlayLinks = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="hidden items-center gap-4 text-neutral-300 sm:flex sm:text-sm lg:gap-6 lg:text-base"
    >
      <Link
        className="transition-all hover:text-white hover:underline"
        href="/championships"
      >
        Profil
      </Link>
      <Link
        className="transition-all hover:text-white hover:underline"
        href="/championships"
      >
        Transfer
      </Link>
      <Link
        className="transition-all hover:text-white hover:underline"
        href="/championships"
      >
        Turnir
      </Link>
      <Link
        className="transition-all hover:text-white hover:underline"
        href="/championships"
      >
        Jurnal
      </Link>
      <Link
        className="transition-all hover:text-white hover:underline"
        href="/championships"
      >
        Statistika
      </Link>

      <Link
        className="transition-all hover:text-white hover:underline"
        href="/championships"
      >
        Chempionat
      </Link>
      <Link
        className="transition-all hover:text-white hover:underline"
        href="/prizes"
      >
        Yutuqlar
      </Link>
      <Link
        className="transition-all hover:text-white hover:underline"
        href="/regulation"
      >
        Qoida
      </Link>
    </motion.section>
  )
}

export default PlayLinks
