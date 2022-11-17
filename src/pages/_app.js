import React from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'

import '../styles/globals.css'
import MainLayout from '../layouts/MainLayout'

function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
