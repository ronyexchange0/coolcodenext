import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

import { fadeLeft, textSlideUp } from "../animations";
import SplitText from "./SplitText";

import styles from "../styles/BlogChunk.module.scss";

const BlogChunk = ({
    
        h, 
        hContent = "", 
        pContent,
        img,
        links,
        linksTitle 

    }) => {

    const CustomHeading = h
    const animation = useAnimation()
    const [blogChunkRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: "-50px"
    })

    useEffect(() => {
        if (inView) {
            animation.start("animate")
        }
    }, [animation, inView])
    

    return (
        <motion.div 
        className={styles.blogChunk}
        ref={blogChunkRef} 
        initial="initial" 
        animate={animation}
        >
            
            {
                h && (
                    
                    <div className={styles.textWrapper}>
                        <CustomHeading variants={textSlideUp(.3)}>
                        {hContent}
                        </CustomHeading>
                    </div>

                )
            }
            

            {
                pContent && pContent.length > 1 && (
                    <SplitText links={links} linksTitle={linksTitle} delay={.6}>
                        {pContent}
                    </SplitText>
                )
            }
        

            {
                img && img.length > 1 && (
                    <motion.div variants={fadeLeft("-50px", 1)} className={styles.imgWrapper}>
                        <Image
                            src={img}
                            alt={hContent}
                            width={395}
                            height={250}
                            className={styles.img}
                            layout="responsive"
                        />
                    </motion.div>
                )
            }

        </motion.div>
    )
}

export default BlogChunk
