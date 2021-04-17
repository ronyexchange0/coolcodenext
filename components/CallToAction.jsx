import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";

import CustomButton from "./CustomButton";
import { textSlideUp, fadeUp } from "../animations";
import SplitText from "./SplitText";

import styles from "../styles/CallToAction.module.scss";

const CallToAction = ({children = ""}) => {

    const animation = useAnimation()
    const [callToActionRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: "-150px"
    })

    useEffect(() => {
        if (inView) {
            animation.start("animate")
        }
    }, [animation, inView])

    return (

        <motion.section 
        ref={callToActionRef}
        initial="initial"
        animate={animation}
        className={styles.callToAction}
        >


            <div className="container">

                <div className={styles.textWrapper}>
                    <motion.h2 variants={textSlideUp(.5)}>Sounds good?</motion.h2>
                </div>

                <SplitText delay={1}>{children}</SplitText>

                <CustomButton 
                    variants={fadeUp(1.5)} 
                    link="/contact"
                >
                    Book a FREE Strategy Session
                </CustomButton>
        
            </div>
        
        
        </motion.section>

    )
}

CallToAction.defaultProps = {
    children: "To book a free strategy session with us click on the button below and fill in the form then select a day and one of our team will call you on the day you chose."
};

export default CallToAction
