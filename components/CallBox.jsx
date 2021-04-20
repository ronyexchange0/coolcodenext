import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";

import CustomButton from "./CustomButton";

import styles from "../styles/CallBox.module.scss";
import { fadeLeft, textSlideUp, lineScale, fadeUp } from "../animations";
import SplitText from "./SplitText";

const CallBox = () => {

    const animation = useAnimation()
    const [callBox, inView] = useInView({
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
        initial="initial" 
        animate={animation} 
        ref={callBox} 
        variants={fadeLeft("100px")}
        className={styles.callBox}>

            <div className={styles.textWrapper}>
                <motion.p variants={textSlideUp(.2)} className={styles.title}>Do you want </motion.p> 
            </div>

            <div className={styles.textWrapper}>
                <motion.p variants={textSlideUp(.5)} className={styles.titleP2}  >MORE CLIENTS?</motion.p>
            </div>

            <motion.div variants={lineScale(.7)} className={styles.line}></motion.div>

            <SplitText delay={1} className={styles.par}>Our job is to grow a business. The question is, are you going to be the next one?</SplitText>

            <CustomButton variants={fadeUp(1)} link="/contact">Yes, grow my business</CustomButton>

        </motion.div>
    )
}

export default CallBox
