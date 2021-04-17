import Image from "next/image";
import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
import Link from "next/link"

import { textSlideUp, fadeLeft, coverSlideUp, fadeUp } from "../animations";
import HeadingLayout from "./HeadingLayout";
import SplitText from "./SplitText";
import CustomLink from "./CustomLink";

import styles from "../styles/Post.module.scss";
import headingStyles from "../styles/HeadingLayout.module.scss";

const Post = ({children, title, image, slug, isOdd, idx}) => {
    
    const thumb = image.url

    const animation = useAnimation()
    const [postRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: "-150px"
    })

    useEffect(() => {
        if (inView) {
            animation.start("animate")
        }
    }, [animation, inView])

    return (
        <>

            <HeadingLayout 
            isLeft={isOdd && true} 
            num={`0${idx + 1}`} 
            image={thumb} 
            className={`d-lg-none ${headingStyles.headingLayout}`} 
            title={title} 
            link={`/post/${slug}`}
            style={{marginBottom: "60px"}} 
            heading={3}
            >
                {children}
            </HeadingLayout>


            <motion.div className="d-none d-lg-block" initial="initial" animate={animation} ref={postRef}>

                <div className={`${styles.post} align-items-center row `} >


                    <div className={` col-md-6 ${isOdd ? "order-2" : ""}`}>


                        {/* <div className={styles.textWrapper}>
                            <motion.span className={styles.num} variants={textSlideUp(.5)}>0{idx + 1}</motion.span>
                        </div> */}


                        <div className={styles.textWrapper}>
                            <motion.h3 variants={textSlideUp(1.2)}>{title}</motion.h3>
                        </div>


                        <SplitText delay={1.2}>
                            {children}
                        </SplitText>

                        <CustomLink variants={fadeUp(1.5)} link={`/post/${slug}`} style={{marginTop: "60px"}}/>

                    </div>

                    
                    <div className={`${styles.imgWrapper} col-md-6 d-flex justify-content-center position-relative ${isOdd ? "order-1" : ""}`}>

                        <Link href={`/post/${slug}`}>
                            <a>


                                <div className={styles.imgInner}>

                                    <motion.div 
                                    variants={isOdd ? fadeLeft("-50px", .5) : fadeLeft("50px", .5)} 
                                    className={isOdd ? styles.svgWrapperRight : styles.svgWrapperLeft}
                                    >

                                        <svg viewBox="0 0 500 572" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M499.5 1H1V571H499.5V1Z" stroke="url(#paint0_linear)"/>
                                            <defs>
                                            <linearGradient id="paint0_linear" x1="1" y1="289.276" x2="511.015" y2="294.839" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#B38728"/>
                                                <stop offset="0.229167" stopColor="#FBF5B7"/>
                                                <stop offset="0.473958" stopColor="#BF953F"/>
                                                <stop offset="0.675126" stopColor="#FCF6BA"/>
                                                <stop offset="1" stopColor="#BF953F"/>
                                            </linearGradient>
                                            </defs>
                                        </svg>
                                        
                                    </motion.div>

                                    <div className="position-relative overflow-hidden">
                                        <motion.div className={styles.cover} variants={coverSlideUp(0, 2.5)}></motion.div>
                                        <motion.div>
                                            <Image 
                                                src={thumb}
                                                alt={title}
                                                width={395}
                                                height={482}
                                                objectFit="cover"
                                                objectPosition="center"
                                            />
                                        </motion.div>
                                    </div>
                                </div>


                            </a>
                        </Link>

                    </div>


                </div>
            </motion.div>
        </>
    )
}

export default Post
