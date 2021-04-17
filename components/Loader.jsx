import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import Image from "next/image";

import { logoBGAni, logoAni } from "../animations";

import loaderStyles from "../styles/Loader.module.scss";

const Loader = () => {

    const [x, setX] = useState(0)    

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 768px)')
        const mediaQueryMD = window.matchMedia('(max-width: 768px)')
        const mediaQuerySM = window.matchMedia('(max-width: 380px)')

        if (mediaQuery.matches) {
            setX(115)
        }

        if (mediaQueryMD.matches) {
            setX(55)
        }

        if (mediaQuerySM.matches) {
            setX(28)
        }
        
    }, [])

    return (
        <div className={loaderStyles.loader} >

            <motion.div 
            initial={{x: "-100%"}}
            exit={logoBGAni()}
            className={loaderStyles.whiteFrame}>
            </motion.div>

            <motion.div 
            initial={{x: "-100%"}}
            exit={logoBGAni(.3)}
            className={loaderStyles.blackFrame}>
            </motion.div>

            <motion.div 
            initial={{x: "-100%"}}
            exit={logoBGAni(.4)}
            className={loaderStyles.whiteFrame}>
            </motion.div>
            
            <motion.div 
            initial={{x: "-100%"}}
            exit={{x: 0, transition: {duration: .1}}}
            className={loaderStyles.logoWrapper}>

                <motion.div  
                initial={{opacity: 0, x: 0}}
                exit={logoAni(x)}
                className={loaderStyles.logoWrapperLeft}>
                    <Image
                    src="/assets/logo/logoLeft.svg"
                    alt="logo"
                    width={369.6}
                    height={385}
                    layout="responsive"
                    />
                </motion.div> 

                <motion.div 
                initial={{opacity: 0, x: 0}}
                exit={logoAni(-x)}
                className={loaderStyles.logoWrapperRight}>
                    <Image
                    src="/assets/logo/logoRight.svg"
                    alt="logo"
                    width={369.6}
                    height={385}
                    layout="responsive"
                    />
                </motion.div>  

            </motion.div>

        </div>
    )
}

export default Loader
