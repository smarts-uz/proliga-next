import SettingsSkeleton from './components/SettingsSkeleton'

const Loading = () => {
  return (
    <div className="bg-gradient-to-tr from-red-800 to-blue-900 pb-12 pt-20 md:min-h-max xl:pb-16 2xl:pb-24">
      <SettingsSkeleton />
    </div>
  )
}

export default Loading
