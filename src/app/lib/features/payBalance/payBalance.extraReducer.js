import { fetchPayBalance } from './payBalance.thunk'

export const payBalanceExtraReducer = (builder) => {
  builder
    .addCase(fetchPayBalance.pending, (state) => {
      state.isLoading = true
    })
    .addCase(fetchPayBalance.fulfilled, (state, action) => {
      state.isLoading = false
      state.balance = []
      if (action.payload.data?.length > 0) {
        state.balance = action.payload.data
      }
    })
    .addCase(fetchPayBalance.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload?.error?.message ?? null
    })
}
