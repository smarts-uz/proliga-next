'use client'

import dynamic from 'next/dynamic'
import { useGenerateLanguage } from './hooks/system/generateLanguage/generateLanguage'
const Hero = dynamic(() => import('../components/Hero'), {
  ssr: false,
})
const Promotions = dynamic(() => import('../components/Promotions'), {
  ssr: false,
})

function Home() {
  const { generate } = useGenerateLanguage()

  // useEffect(() => {
  //   generate()
  // }, [])

  return (
    <>
      <Hero />
      <Promotions />
    </>
  )
}

export default Home
