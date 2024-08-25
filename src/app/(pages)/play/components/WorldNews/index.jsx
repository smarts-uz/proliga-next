import News from './News'
import MatchesHistory from '../MatchesHistory'
import Gutter from '../../../../../components/Gutter'

const WorldNews = () => {
  return (
    <Gutter>
      <section className="mb-6 flex flex-col justify-between lg:flex-row">
        <MatchesHistory />
        <News />
      </section>
    </Gutter>
  )
}

export default WorldNews
