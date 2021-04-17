import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";

import { textSlideUp } from "../animations";

import styles from "../styles/ProcessStep.module.scss";
import SplitText from "./SplitText";

const ProcessStep = ({children, title, idx}) => {
    
    const animation = useAnimation()
    const [postRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: "-150px"
    })

    useEffect(() => {
        if (inView) {
            animation.start("animate")
        }
    }, [animation, inView])

    return (
        <motion.div className={`col-lg-6 ${styles.processStep}`} initial="initial" animate={animation} ref={postRef}>
            <div className={styles.inner}>
                
                <div className={styles.heading}>
                    <div className={styles.textWrapper}>
                        <motion.span variants={textSlideUp(1)}>{`0${idx + 1}`}</motion.span>
                    </div>
                    
                    <div className={styles.textWrapper}>
                        <motion.h3 variants={textSlideUp(1)}>{title}</motion.h3>
                    </div>
                </div>

                <SplitText delay={1}> 
                    {children}
                </SplitText>
            </div>
        </motion.div>
    )
}

export default ProcessStep
