import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
import { textSlideUp } from "../animations";

import ProcessStepsList from "./ProcessStepsList";

import styles from "../styles/Process.module.scss";

const Process = () => {

    const animation = useAnimation()
    const [processRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: "-150px"
    })

    useEffect(() => {
        if (inView) {
            animation.start("animate")
        }
    }, [animation, inView])

    return (
        <motion.section ref={processRef} initial="initial" animate={animation} className={styles.process}>

            <div className="container">


                <div className={styles.heading}>

                    <div className={styles.textWrapper} style={{marginBottom: 0}}>
                        <motion.span variants={textSlideUp(1)}>Work process</motion.span>
                    </div>

                    <div className={styles.textWrapper}>
                        <motion.h2 variants={textSlideUp(1.3)}>How we work</motion.h2>
                    </div>

                </div>

                <ProcessStepsList/>
            </div>

        </motion.section>
    )
}

export default Process
