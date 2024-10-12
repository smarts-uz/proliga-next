import Gutter from '../../../../../components/Gutter'
import dynamic from 'next/dynamic'
const Matches = dynamic(() => import('./Matches'), {
  ssr: false,
})
const News = dynamic(() => import('./News'), {
  ssr: false,
})
import Banner from './Banner'

const WorldNews = () => {
  return (
    <Gutter>
      <section className="mb-6 flex flex-col justify-between gap-2 py-6 lg:flex-row">
        <Matches />
        <Banner />
        <News />
      </section>
    </Gutter>
  )
}

export default WorldNews
