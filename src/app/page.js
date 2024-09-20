'use client'
import { useGenerateLanguage } from './hooks/system/generateLanguage/generateLanguage'

import Promotions from '../components/Promotions'
import Hero from '../components/Hero'
import { useEffect } from 'react'

function Home() {
  // const { generate } = useGenerateLanguage()

  // useEffect(() => {
  //   generate()
  // }, [])

  return (
    <section>
      <Hero />
      <Promotions />
    </section>
  )
}

export default Home
