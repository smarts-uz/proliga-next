import WorldNews from './components/WorldNews'
import dynamic from 'next/dynamic'

const Carousel = dynamic(() => import('./components/Carousel'), {
  ssr: false,
})

const PlayLayout = ({ children }) => {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-neutral-800 to-neutral-900">
      {children}
      <WorldNews />
      <Carousel />
    </main>
  )
}

export default PlayLayout
