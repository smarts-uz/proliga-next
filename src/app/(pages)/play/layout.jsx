import Banner from '@/src/components/Banner'

const PlayLayout = ({ children }) => {
  return (
    <>
      <Banner />
      {children}
    </>
  )
}

export default PlayLayout
