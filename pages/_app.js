import {useRef} from "react";

import Layout from "../components/Layout";

import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps, router}) {
  const subscribersSiteId='c3303d50-f772-40a0-8bb7-9d93eb8ebada';
  // const scripts = ["https://cdn.subscribers.com/assets/subscribers.js"]
  // const scriptsLoaded = useRef(false);
  // if (typeof window !== "undefined" && !scriptsLoaded.current) {
  //   scripts.forEach((script) => {
  //     const element = document.createElement("script");
  //     element.src = script;
  //     element.type = "text/javascript";
  //     const position = document.querySelector("body");
  //     position.appendChild(element);
  //   });
  //   scriptsLoaded.current = true;
  // }
  
  return (
    
      <Layout router={router}>
          <Component {...pageProps} key={router.route} />
      </Layout>      
        
  )
}

export default MyApp
