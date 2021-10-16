import {useState, useEffect} from "react";
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
import emailjs from 'emailjs-com';
import { useRouter } from 'next/router'

import CustomInput from "./CustomInput";
import CustomButtonSec from "./CustomButtonSec";
import CustomSelect from "./CustomSelect";
import { fadeUp } from "../animations";

import styles from "../styles/ContactForm.module.scss";

const ContactForm = () => {
    const router = useRouter()
    const [quearyMatches, setQuearyMatches] = useState(false)
    const animation = useAnimation()
    const [formRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: "-150px"
    })


    useEffect(() => {
        if (inView) {
            animation.start("animate")
        }
    }, [animation, inView])


    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 768px)')
        
        if (mediaQuery.matches) {
            setQuearyMatches(true)
        } 

    }, [quearyMatches])

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_lja42yp', 'template_jbchjf3', e.target, 'user_tRJFY7YP3ggbC3NTwkL20')
        .then((result) => {
            console.log(result.text);
            e.target.reset()
            router.push("/success")
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <motion.section 
        className={styles.contactForm}
        ref={formRef}
        initial="initial"
        animate={animation}
        >

            <div className="row justify-content-center">

                <div className="col-xl-8 col-lg-10">

                    <form onSubmit={sendEmail} className="row">


                        <div className="col-md-6">
                            <CustomInput name="name" type="text" delay={1} placeholder="Full name" required />
                        </div>

                        <div className="col-md-6">
                            <CustomInput name="coffee-shop" type="text" delay={1.1} placeholder="Business name" required/>
                        </div>

                        <div className="col-md-6">
                            <CustomInput name="phone" type="text" delay={1.2} placeholder="Phone number" required/>
                        </div>

                        <div className="col-md-6">
                            <CustomInput name="email" type="text" delay={1.3} placeholder="E-mail" required />
                        </div>

                        <div className="col-md-6">
                            <CustomInput name="subject" type="text" delay={1.4} placeholder="Subject" required/>
                        </div>

                        <div className="col-md-6">
                            <CustomSelect  />
                        </div>

                        <CustomButtonSec variants={fadeUp(1.7)} type="submit" style={{ width: "auto", padding: "4px 24px", margin: "20px auto 0"}}>Get Your FREE Session</CustomButtonSec>

                    </form>
                    
                </div>

            </div>


        </motion.section>
    )
}

export default ContactForm
