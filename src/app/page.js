'use client'
import dynamic from 'next/dynamic'
import { useGenerateLanguage } from './hooks/system/generateLanguage/generateLanguage'
import { Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPrizes } from './lib/features/prize/prize.thunk'
// const Hero = dynamic(() => import('../components/Hero'), {
//   ssr: false,
// })
import Hero from 'components/Hero'
const Promotions = dynamic(() => import('../components/Promotions'), {
  ssr: false,
})

function Home() {
  const { generate } = useGenerateLanguage()
  const { lang } = useSelector((store) => store.systemLanguage)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   generate()
  // }, [])

  useEffect(() => {
    dispatch(fetchPrizes())
  }, [dispatch])

  return (
    <>
      <Suspense fallback="loading">
        <Hero lang={lang} />
      </Suspense>
      <Promotions />
    </>
  )
}

export default Home
