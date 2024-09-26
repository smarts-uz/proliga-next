import { motion } from 'framer-motion'

const CabinetLanguageTab = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-full w-full flex-1 rounded-xl bg-neutral-900 p-4 lg:h-auto xl:p-6"
    >
      lang
    </motion.section>
  )
}

export default CabinetLanguageTab
