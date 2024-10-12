import WorldNews from './components/WorldNews'
import dynamic from 'next/dynamic'
const RulesSlider = dynamic(() => import('./components/RulesSlider'), {
  ssr: false,
})

const PlayLayout = ({ children }) => {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-neutral-800 to-neutral-900">
      {children}
      <WorldNews />
      <RulesSlider />
      {/* <div className="pb-4">
        <div className="mx-auto h-24 w-full max-w-[1200px] rounded bg-red-400"></div>
      </div> */}
    </main>
  )
}

export default PlayLayout
