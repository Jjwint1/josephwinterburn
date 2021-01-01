import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

    render() {
      return (
        <Html>
            <Head>
                <link
                    rel="preload"
                    href="/fonts/Optima/Optima.ttf"
                    as="font"
                    crossOrigin=""
                />

                <link
                    rel="preload"
                    href="/fonts/Optima/Optima-Bold.ttf"
                    as="font"
                    crossOrigin=""
                />

                <link rel="shortcut icon" href="favicon.ico" />
            </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
  }
  
  export default MyDocument