import ReduxProvider from './Store.provider'
import AuthProvider from './Auth.provider'
import InitialStateProvider from './InitialState.provider'

export default function RootProvider({ children }) {
  return (
    <ReduxProvider>
      <AuthProvider>
        <InitialStateProvider>{children}</InitialStateProvider>
      </AuthProvider>
    </ReduxProvider>
  )
}
