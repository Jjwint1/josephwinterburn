import '../styles/globals.css'
import App from 'next/app'

import { AnimatePresence } from 'framer-motion'

import NavLayout from '../components/navLayout/NavLayout'
import CVLayout from './CV/CVLayout'
import DefaultLayout from '../components/defaultLayout/DefaultLayout'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const Layout = Component.Layout || DefaultLayout;

    return (
      <NavLayout>
        <Layout>
          <Component {...pageProps}/>
        </Layout>
      </NavLayout>
    )
  }
}

export default MyApp
