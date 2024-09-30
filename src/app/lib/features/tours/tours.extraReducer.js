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
      state.registeredTourId = action.payload.registered_tour_id
      let tour = state.tours.find(
        (tour) =>
          tour.status === TOUR.notStartedTransfer ||
          (tour.status === TOUR.completed &&
            tour.id >= action.payload.registered_tour_id) ||
          tour.status === TOUR.inProcess
      )
      if (tour) {
        state.currentTour = tour
        state.currentTourIndex = state.tours.indexOf(tour)
      }
    })
    .addCase(fetchTours.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload.error.message ?? null
    })
}
