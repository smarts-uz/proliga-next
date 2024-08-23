import News from '../News'
import MatchesHistory from '../MatchesHistory'
import Gutter from '../Gutter'

const WorldNews = () => {
  return (
    <Gutter>
      <section className="flex justify-between mb-6">
        <MatchesHistory />
        <News />
      </section>
    </Gutter>
  )
}

export default WorldNews
