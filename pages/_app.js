import Layout from "../components/Layout";

import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps, router}) {
 
  return (
    
      <Layout router={router}>
          <Component {...pageProps} key={router.route} />
      </Layout>      
        
  )
}

export default MyApp


export const getStaticProps = async () => {
  const subscribersSiteId='c3303d50-f772-40a0-8bb7-9d93eb8ebada';
}

