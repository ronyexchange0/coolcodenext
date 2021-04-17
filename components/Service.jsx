import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";

import { textSlideUp, fadeUp } from "../animations";
import CustomLink from "./CustomLink"
import SplitText from "./SplitText"

import styles from "../styles/Service.module.scss"


const Service = ({children, title, isOdd, slug}) => {

    const animation = useAnimation()
    const [serviceRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: "-150px"
    })

    useEffect(() => {
        if (inView) {
            animation.start("animate")
        }
    }, [animation, inView])

    return (

        <motion.div 
        ref={serviceRef}
        initial="initial"
        animate={animation}
        className={`${styles.service} ${isOdd ? "col-xl-8 col-md-10" : "col-xl-8 col-md-10"}`}>

            <div className={styles.textWrapper}>
                <motion.h3 variants={textSlideUp(1)}>
                    <span className={styles.text}>{title}</span>
                    <span className={styles.hLine}></span>
                </motion.h3>
            </div>

            <SplitText delay={1}> 
                {children}
            </SplitText>

            <CustomLink variants={fadeUp(1.5)} link={`/services/${slug}`}/>

        </motion.div>
    )
}

export default Service
