import { Provider } from 'react-redux'
import store from './lib/store.global'

export default function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>
}
