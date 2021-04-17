import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Rozha+One&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script type="text/javascript" src="https://cdn.subscribers.com/assets/subscribers.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument