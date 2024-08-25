import Banner from './components/Banner'
import WorldNews from './components/WorldNews'
import Carousel from './components/Carousel'

const PlayLayout = ({ children }) => {
  return (
    <main className="min-h-screen bg-neutral-100">
      <Banner />
      {children}
      <WorldNews />
      <Carousel />
    </main>
  )
}

export default PlayLayout
