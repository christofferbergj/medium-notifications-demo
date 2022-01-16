import '@styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import { Notifications } from '@features/notifications/components/Notifications'
import { store } from '@redux/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />

        <Notifications />
      </Provider>
    </>
  )
}

export default MyApp
