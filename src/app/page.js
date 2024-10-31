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

  // useEffect(() => {
  //   function showPosition(position) {
  //     console.log(position)
  //   }
  //   navigator.geolocation.getCurrentPosition(showPosition)
  // })
  return (
    <section>
      <Hero />
      <Promotions />
    </section>
  )
}

export default Home
