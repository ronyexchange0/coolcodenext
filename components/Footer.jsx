import { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
import emailjs from 'emailjs-com';

import CustomInput from "./CustomInput";
import { textSlideUp, fadeUp} from "../animations";
import CustomButtonSec from "./CustomButtonSec";

import styles from "../styles/Footer.module.scss";
import FacebookSVG from "./FacebookSVG";
import LinkedinSVG from "./LinkedinSVG";
import InstagramSVG from "./InstagramSVG";

const Footer = () => {
    const [emailSent, setEmailSent] = useState(false)

    const animation = useAnimation()
    const [footerRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: "-150px"
    })

    useEffect(() => {
        if (inView) {
            animation.start("animate")
        }
    }, [animation, inView])


    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_lja42yp', 'template_n9prm1f', e.target, 'user_tRJFY7YP3ggbC3NTwkL20')
        .then((result) => {
            e.target.reset()
            setEmailSent(true)
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <motion.footer
        ref={footerRef}
        initial="initial"
        animate={animation}
        className={styles.footer}
        >
             
             
             <div className="container">


                <div className="row justify-content-center">

                    <div className="col-md-11">


                        <div className={styles.footerWrapper}>
                            
                            <div className={styles.stayInTouch}>


                                <div className={styles.textWrapper}>
                                    <motion.h2 variants={textSlideUp(.5)}>Stay in touch</motion.h2>
                                </div>

                                
                                <form onSubmit={sendEmail}>
                                
                                    <CustomInput margin="0" name="email" placeholder="your email" type="email" required/>

                                    <CustomButtonSec variants={fadeUp(1)} type="submit" style={{marginTop: "20px"}}>SEND</CustomButtonSec>
                                
                                </form>
                                
                                {
                                    emailSent && <p>Your Email was sent!</p>
                                }
                                    

                            </div>

                            <div className={styles.socials}>

                                <InstagramSVG />

                                <LinkedinSVG />

                                <FacebookSVG />

                            </div>

                        </div>


                    </div>
                    

                </div>


             </div>
        
        
        </motion.footer>
    )
}

export default Footer
