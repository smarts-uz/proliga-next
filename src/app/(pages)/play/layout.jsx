import WorldNews from './components/WorldNews'
import Carousel from './components/Carousel'

const PlayLayout = ({ children }) => {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-neutral-800 to-neutral-900 pt-16">
      {children}
      <WorldNews />
      <Carousel />
    </main>
  )
}

export default PlayLayout
