'use client'
import dynamic from 'next/dynamic'
import { useGenerateLanguage } from './hooks/system/generateLanguage/generateLanguage'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchPrizes } from './lib/features/prize/prize.thunk'
const Hero = dynamic(() => import('../components/Hero'), {
  ssr: false,
})
const Promotions = dynamic(() => import('../components/Promotions'), {
  ssr: false,
})

function Home() {
  const { generate } = useGenerateLanguage()
  const dispatch = useDispatch()

  // useEffect(() => {
  //   generate()
  // }, [])

  useEffect(() => {
    dispatch(fetchPrizes())
  }, [dispatch])

  return (
    <>
      <Hero />
      <Promotions />
    </>
  )
}

export default Home
