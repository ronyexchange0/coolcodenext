import {AnimatePresence, motion} from "framer-motion";
import Head from "next/head";

import Footer from "./Footer";
import Navbar from "./Navbar";
import LoaderOnce from "./LoaderOnce";

const Layout = ({ children, router }) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="shortcut icon" type="image/svg" href="/assets/logo.svg"/>
            </Head>

            <LoaderOnce /> 
            
            <div className="app">
                <AnimatePresence  exitBeforeEnter>
                    <motion.div key={router.route}  exit={{opacity: 0, transition: {delay: 2, duration: 0} }}>
                        <Navbar/>
                    </motion.div>
                </AnimatePresence>

                <AnimatePresence exitBeforeEnter>
                    {children}
                </AnimatePresence>

                <Footer/>
            </div>
        </>
  )
}

export default Layout