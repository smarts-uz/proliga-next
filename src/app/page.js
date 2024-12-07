'use client'
import dynamic from 'next/dynamic'
// import { useGenerateLanguage } from './hooks/system/generateLanguage/generateLanguage'
// import { Suspense, useEffect, useTransition } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchPrizes } from './lib/features/prize/prize.thunk'
// const Hero = dynamic(() => import('../components/Hero'), {
//   ssr: false,
// })
import Hero from 'components/Hero'
// import { useTranslation } from 'react-i18next'
import { Suspense } from 'react'
const Promotions = dynamic(() => import('../components/Promotions'), {
  ssr: false,
})

function Home() {
  // const { i18n } = useTranslation()
  // const { generate } = useGenerateLanguage()
  // const { lang } = useSelector((store) => store.systemLanguage)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   generate()
  // }, [])

  // useEffect(() => {
  //   dispatch(fetchPrizes())
  // }, [dispatch])

  // get language
  // const lang = i18n.language
  // console.log(lang)

  return (
    <>
      <Suspense fallback={'loading'}>
        <Hero />
      </Suspense>
      <Promotions />
    </>
  )
}

export default Home
