import Layout from '../src/components/Layout';
import '../styles/globals.css'
import '../styles/style.css'
import '../styles/responsive.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
