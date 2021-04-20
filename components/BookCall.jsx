import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

import CustomButton from "./CustomButton";
import SplitText from "./SplitText";

import styles from "../styles/BookCall.module.scss";
import { fadeLeft, fadeUp } from "../animations";

const BookCall = () => {

    const animation = useAnimation()
    const [bookCallRef, inView] = useInView({
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
        ref={bookCallRef}
        variants={fadeLeft("100px")}
        className={styles.bookCall}>
            <motion.div 
            variants={fadeUp(.3)}
            className={styles.logo}>
                <Image
                src="/assets/logo.svg"
                width={300}
                height={300}
                />
            </motion.div>
            <div className={styles.content}>
                <SplitText delay={.5}>See How CoolCode Can Get You More Customers</SplitText>
                <CustomButton variants={fadeUp(.5)}>Book A Call</CustomButton>
            </div>
        </motion.div>
    )
}

export default BookCall
