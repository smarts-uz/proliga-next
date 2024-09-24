import News from './News'
import Matches from './Matches'
import Gutter from '../../../../../components/Gutter'

const WorldNews = () => {
  return (
    <Gutter>
      <section className="mb-6 flex flex-col justify-between gap-4 py-6 lg:flex-row">
        <Matches />
        <News />
      </section>
    </Gutter>
  )
}

export default WorldNews
