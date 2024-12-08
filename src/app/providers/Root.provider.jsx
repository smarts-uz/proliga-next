import ReduxProvider from './Store.provider'
import AuthProvider from './Auth.provider'
import InitialStateProvider from './InitialState.provider'
import { QueryClient, QueryClientProvider } from 'react-query'

export default function RootProvider({ children }) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider>
        <AuthProvider>
          <InitialStateProvider>{children}</InitialStateProvider>
        </AuthProvider>
      </ReduxProvider>
    </QueryClientProvider>
  )
}
