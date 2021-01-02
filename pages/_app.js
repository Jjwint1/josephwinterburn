import '../styles/globals.css'
import App from 'next/app'

import { AnimatePresence } from 'framer-motion'

import NavLayout from '../components/navLayout/NavLayout'
import CVLayout from './CV/CVLayout'
import DefaultLayout from '../components/defaultLayout/DefaultLayout'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' 
config.autoAddCss = false

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const Layout = Component.Layout || DefaultLayout;
    const Name = Component.Name;

    return (
      <NavLayout>
        <Layout active={Name}>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps}/>
          </AnimatePresence>
        </Layout>
      </NavLayout>
    )
  }
}

export default MyApp
