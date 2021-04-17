import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import { fade, logoAniOnce } from "../animations";
import Image from "next/image";

import styles from "../styles/LoaderOnce.module.scss";

const LoaderOnce = () => {

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
        // <motion.div 
        // initial={{opacity: 0}} 
        // animate={{opacity: [0, 1, 1 ,0], transition: {duration: 6, times: [0, .001, .8, 1]}, transitionEnd: {display: "none"} }}
        // className={styles.loaderOnce}
        // >
        //     <div className={styles.logoWrapper}>
        //         <motion.div  
        //         initial={{opacity: 0, x: 0}}
        //         animate={logoAniOnce(x)}
        //         className={styles.logoWrapperLeft}>
        //             <Image
        //             src="/assets/logo/logoLeft.svg"
        //             alt="logo"
        //             width={369.6}
        //             height={385}
        //             layout="responsive"
        //             />
        //         </motion.div> 

        //         <motion.div 
        //         initial={{opacity: 0, x: 0}}
        //         animate={logoAniOnce(-x)}
        //         className={styles.logoWrapperRight}>
        //             <Image
        //             src="/assets/logo/logoRight.svg"
        //             alt="logo"
        //             width={369.6}
        //             height={385}
        //             layout="responsive"
        //             />
        //         </motion.div>  
        //     </div>

        //     <motion.h2 initial="initial" animate="animate" variants={fade(3.6)}>
        //         coolCode
        //     </motion.h2>

        //     <motion.p initial="initial" animate="animate" variants={fade(4)}>
        //         Take your business to the next level
        //     </motion.p>
            
        // </motion.div>

        <motion.div 
        initial={{opacity: 0}} 
        animate={{opacity: [0, 1, 1 ,0], transition: {duration: 7, times: [0, .001, .8, 1]}, transitionEnd: {display: "none"} }}
        className={styles.loaderOnce}
      
        >
             <video autoPlay muted className={styles.video} width="320" height="200">
                    <source src="/assets/video.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            
        </motion.div>
    )
}

export default LoaderOnce
