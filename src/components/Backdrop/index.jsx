import { motion } from 'framer-motion'

const Backdrop = ({ children, onClick, bgOpacity }) => {
  return (
    <motion.div
      className={`fixed bottom-0 left-0 right-0 top-0 z-30 flex h-full w-full items-center justify-center overflow-y-hidden bg-black backdrop-blur-sm before:w-full ${bgOpacity ? bgOpacity : 'bg-opacity-25'}`}
      onClick={onClick}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

export default Backdrop
