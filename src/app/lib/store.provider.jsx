import { Provider } from 'react-redux'
import store from './store.global'

export default function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>
}