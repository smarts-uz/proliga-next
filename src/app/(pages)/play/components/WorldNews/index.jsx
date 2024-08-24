import News from '../News'
import MatchesHistory from '../MatchesHistory'
import Gutter from '../../../../../components/Gutter'

const WorldNews = () => {
  return (
    <Gutter>
      <section className="mb-6 flex justify-between">
        <MatchesHistory />
        <News />
      </section>
    </Gutter>
  )
}

export default WorldNews
