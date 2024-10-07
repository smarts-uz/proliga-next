import { fetchPayExpense } from './payExpense.thunk'

export const payExpenseExtraReducer = (builder) => {
  builder
    .addCase(fetchPayExpense.pending, (state) => {
      state.isLoading = true
      state.expenses = []
    })
    .addCase(fetchPayExpense.fulfilled, (state, action) => {
      state.isLoading = false
      if (action.payload.data?.length > 0) {
        state.expenses = action.payload.data
      }
    })
    .addCase(fetchPayExpense.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload?.error?.message ?? null
    })
}
