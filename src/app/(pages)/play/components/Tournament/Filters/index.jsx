import { useSelector } from 'react-redux'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const TournamentSelectedTour = ({ tour, setTour }) => {
  const { tours } = useSelector((store) => store.tours)

  const handleSelectTour = (value) => {
    setTour(value)
  }

  return (
    <div className="mb-4 w-full max-w-40">
      <Select value={tour} onValueChange={handleSelectTour}>
        <SelectTrigger className="h-8 w-full min-w-40 truncate rounded border-neutral-500 bg-neutral-950 px-2 text-neutral-200 shadow md:max-w-48">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {tours?.map((t) => (
            <SelectItem key={t.id} defaultChecked={t.id === tour} value={t.id}>
              {t.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default TournamentSelectedTour
