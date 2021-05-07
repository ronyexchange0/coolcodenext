import { useEffect} from "react";
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";

import Meta from "../components/Meta";
import { textSlideUp } from "../animations";
import CallToAction from "../components/CallToAction";
import AbouItemstList from "../components/AbouItemstList";
import Loader from "../components/Loader";

import styles from "../styles/AboutUs.module.scss";

const AboutUs = () => {

    const animation = useAnimation()
    const [aboutRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: "-150px"
    })

    useEffect(() => {
        if (inView) {
            animation.start("animate")
        }
    }, [animation, inView])

    return (
        <main>
            <Meta
            title="About us" 
            keywords="our mission, about us, CoolCode, digital marketing agency, seo, web design"
            description="get to know more about CoolCode and its mission and how we help your business to grow and get more customers."
            link="/about-us"
            />

            <Loader/>

            <motion.div 
            className={styles.aboutUs} 
            ref={aboutRef}
            initial="initial"
            animate={animation}
            exit={{opacity: 0}}
            >

                <div className="container">

                    <div className={styles.textWrapper}>
                        <motion.h1 variants={textSlideUp(.5)}>About us</motion.h1>
                    </div>

                    <AbouItemstList/>

                </div>


            </motion.div>


            <CallToAction/>


        </main>
    )
}

export default AboutUs
