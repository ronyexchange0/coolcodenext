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
