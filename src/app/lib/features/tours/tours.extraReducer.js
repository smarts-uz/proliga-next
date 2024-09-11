import { fetchTours } from './tours.thunk'
import { TOUR } from 'app/utils/tour.util'

export const toursExtraReducer = (builder) => {
  builder
    .addCase(fetchTours.pending, (state) => {
      state.isLoading = true
    })
    .addCase(fetchTours.fulfilled, (state, action) => {
      state.isLoading = false
      state.tours = action.payload.data
      let tour = state.tours.find(
        (tour) => tour.status === TOUR.notStartedTransfer
      )
      let tourIndex = state.tours.findIndex(
        (tour) => tour.status === TOUR.notStartedTransfer
      )
      if (!tour) {
        tour = state.tours.find((tour) => tour.status === TOUR.completed)
        tourIndex = state.tours.findIndex(
          (tour) => tour.status === TOUR.completed
        )
      }
      console.log(tour, tourIndex)
      if (tour) {
        state.currentTour = tour
        state.currentTourIndex = tourIndex
      }
    })
    .addCase(fetchTours.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload.error.message ?? null
    })
}
