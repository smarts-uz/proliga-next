import { fetchTours, fetchTeamViewTours } from './tours.thunk'
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
      let registeredTour = state.tours.find(
        (tour) => tour.id === action.payload.registered_tour_id
      )
      if (registeredTour) {
        state.registeredTour = registeredTour
      }
      if (!tour) {
        tour = state.tours.find(
          (tour) => tour.id === action.payload.registered_tour_id
        )
      }
      if (!tour) {
        state.currentTour = state.tours[0]
      }
      if (tour) {
        state.currentTour = tour
        state.registeredTour = registeredTour ?? tour
        state.currentTourIndex = state.tours.indexOf(tour)
      }
    })
    .addCase(fetchTours.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload.error.message ?? null
    })
    .addCase(fetchTeamViewTours.pending, (state) => {
      state.isLoading = true
    })
    .addCase(fetchTeamViewTours.fulfilled, (state, action) => {
      state.isLoading = false
      state.tours = action.payload?.data
      let tour = state.tours.find((tour) => tour.status === TOUR.inProcess)
      let registeredTour = state.tours.find(
        (tour) => tour.id === action.payload.registered_tour_id
      )
      if (registeredTour) {
        state.registeredTour = registeredTour
      }
      if (!tour) {
        tour = state.tours.find(
          (tour) =>
            tour.status === TOUR.completed &&
            tour.order === registeredTour?.order
        )
      }
      if (!tour) {
        tour = state.tours.find(
          (tour) =>
            tour.status === TOUR.inProcess &&
            tour.order === registeredTour?.order
        )
      }
      if (!tour) {
        state.currentTour = {}
      }
      if (tour) {
        state.currentTour = tour
        state.registeredTour = registeredTour ?? tour
        state.currentTourIndex = state.tours.indexOf(tour)
      }
    })
    .addCase(fetchTeamViewTours.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload.error.message ?? null
    })
}
