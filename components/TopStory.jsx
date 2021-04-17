import { motion } from "framer-motion"

import CustomButton from "./CustomButton";
import {slideLeft, textSlideUp, fadeUp} from "../animations";
import SplitText from "./SplitText";

import styles from "../styles/TopStory.module.scss";

const TopStory = () => {
    return (

        <motion.section 
            className={`${styles.topStory} overflow-hidden`}
            initial="initial"
            animate="animate"
        >

            
            <div className={styles.bg}>

                <div className={styles.overlay}></div>
                <motion.div initial={{x: 0}} animate={{x: "120%", transition: {delay: 0, duration: 2, type: "tween", ease: [.85,0,.04,.64]}}} className={styles.cover}></motion.div>


                <div className="container h-100">

                    
                    <div className={styles.content}>

                        <div style={{overflow: "hidden"}}>
                            <motion.h1 variants={textSlideUp(2.5)}>COOLCODE</motion.h1>
                        </div>
                        
                        <SplitText delay={2.5}>
                            We help your business to be visible online, so you can attract new customers FAST without you having to lift a finger
                        </SplitText>

                        
                        <CustomButton 
                            variants={fadeUp(3, .5, "easeInOut")} 
                            link="/contact"
                        >
                            Book a FREE Strategy Session
                        </CustomButton>

                    </div>


                </div>  
       
       
            </div >

       
        </motion.section>
    )
}

export default TopStory
