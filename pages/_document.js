import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Rozha+One&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-N9DQYH7QRJ"></script>
          <script dangerouslySetInnerHTML={{ __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N9DQYH7QRJ');
          ` }}></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument