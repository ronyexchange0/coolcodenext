import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";

import ServicesList from "./ServicesList";
import { textSlideUp, pathAni, pathAniV2 } from "../animations";

import styles from "../styles/Services.module.scss";

const Services = ({services, isH1 = false}) => {

    const animation = useAnimation()
    const [servicesRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: "-150px"
    })

    const [lineRef, inViewLine] = useInView({
        triggerOnce: true,
        rootMargin: "-150px"
    })


    useEffect(() => {
        if (inView) {
            animation.start("animate")
        }

        if (inViewLine) {
            animation.start("animateLine")
        }
    }, [animation, inView, inViewLine])
    
    return (
        <motion.section 
        animate={animation} 
        initial="initial" 
        ref={servicesRef} 
        className={styles.services}
        style={{boxShadow: "0px -10px 10px #000000", position: "relative"}}
        >

            <div className="container">


                <div className={styles.heading}>

                    <div className={styles.textWrapper}>
                        <motion.span variants={textSlideUp(.5 , .2)}>
                            Services
                        </motion.span>
                    </div>

                    <div className={styles.textWrapper} styles={{marginBottom: "32px"}}>
                        {
                            isH1 ? (
                            
                                <motion.h1 variants={textSlideUp(.5 , .2)}>
                                    How we help your coffee shop
                                </motion.h1> 
                            
                            ) : (
                                
                                <motion.h2 variants={textSlideUp(.5 , .2)}>
                                    How we help your coffee shop
                                </motion.h2>
                            )
                        }
                    </div>

                    <div className={styles.lineWrapper}>
                        <motion.div 
                            variants={pathAni(.5, 1)} 
                            className={styles.vLine}
                        ></motion.div>
                    </div>

                </div>


                <div className="row justify-content-center">

                    <div className="col-lg-10">

                        <ServicesList services={services} />

                    </div>

                </div>


                <div className={styles.lineWrapper}>
                    <motion.div 
                        ref={lineRef} 
                        variants={pathAniV2(1.5, 1)} 
                        className={styles.vLine}
                    ></motion.div>
                </div>
            
            </div>

        </motion.section>
    )
}

export default Services
