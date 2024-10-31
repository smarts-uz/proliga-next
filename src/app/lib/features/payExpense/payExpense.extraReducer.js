import { fetchPayExpenses } from './payExpense.thunk'

export const payExpenseExtraReducer = (builder) => {
  builder
    .addCase(fetchPayExpenses.pending, (state) => {
      state.isLoading = true
    })
    .addCase(fetchPayExpenses.fulfilled, (state, action) => {
      state.isLoading = false
      state.expenses = []
      if (action.payload.data?.length > 0) {
        state.expenses = action.payload.data
      }
    })
    .addCase(fetchPayExpenses.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload?.error?.message ?? null
    })
}
