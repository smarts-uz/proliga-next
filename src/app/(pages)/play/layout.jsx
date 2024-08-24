import Banner from './components/Banner'
import WorldNews from './components/WorldNews'
import Carousel from './components/Carousel'

const PlayLayout = ({ children }) => {
  return (
    <main className="bg-neutral-200 min-h-screen">
      <Banner />
      {children}
      <WorldNews />
      <Carousel />
    </main>
  )
}

export default PlayLayout
