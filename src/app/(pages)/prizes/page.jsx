import Gutter from 'components/Gutter'
import { useTranslation } from 'react-i18next'
const Prizes = () => {
  const { t } = useTranslation()
  return (
    <Gutter>
      <div className="text-2xl mt-8">{t("Yutuqlar")}</div>
    </Gutter>
  )
}

export default Prizes
