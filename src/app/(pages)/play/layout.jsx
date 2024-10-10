import WorldNews from './components/WorldNews'
import RulesSlider from './components/RulesSlider'

const PlayLayout = ({ children }) => {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-neutral-800 to-neutral-900">
      {children}
      <WorldNews />
      <RulesSlider />
    </main>
  )
}

export default PlayLayout
