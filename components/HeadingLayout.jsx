import {useEffect, useRef, useState} from "react"
import Image from "next/image";
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

import { fadeLeft, coverSlideUp, textSlideUp } from "../animations";
import CustomButtonSec from "./CustomButtonSec";
import SplitText from "./SplitText";

import styles from "../styles/HeadingLayout.module.scss";

const HeadingLayout = ({
        square = false,
        image = "/assets/sample.jpg", 
        title, 
        children, 
        isLeft, 
        isH1 = true, 
        heading,
        link = false,
        links,
        linksTitle, 
        num = null,
        ...props
    }) => {

        
    const animation = useAnimation()
    const [layoutRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: "-150px"
    })

    const img = useRef(null);
    const [imgHeight, setImgHeight] = useState(0)


    useEffect(() => {
        if (inView) {
            animation.start("animate")
        }
    }, [animation, inView])


    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 992px)')
        const imgHeight = `${img.current.offsetHeight + 120}px`
        
        if (mediaQuery.matches) {
            setImgHeight(imgHeight)
        }

    }, [])

    
    return (
        <motion.section 
        className={`${styles.headingLayout} ${isLeft && styles.isLeft}`} 
        ref={layoutRef}
        initial="initial"
        animate={animation}
        {...props}>
            

                <div 
                className={`row flex-wrap flex-lg-nowrap position-relative ${isLeft && "justify-content-end"}`}
                >

                    
                    <div className="col-lg-9 order-2 order-lg-1" style={{minHeight: imgHeight}}>


                        <motion.div 
                        className={styles.content}
                        variants={isLeft ? fadeLeft("100px", .5) : fadeLeft("-100px", .5)}
                        >

                            {
                                heading === 3 ? ( 
                                
                                    <div className={styles.textWrapper}>
                                        <motion.h3 
                                        variants={textSlideUp(1)}
                                        dangerouslySetInnerHTML={{__html: title}}
                                        >
                                        </motion.h3> 
                                    </div>
                                
                                ) :  isH1 ? ( 

                                    <div className={styles.textWrapper}>
                                        <motion.h1 
                                        variants={textSlideUp(1)}
                                        dangerouslySetInnerHTML={{__html: title}}
                                        >
                                        </motion.h1> 
                                    </div>
                                
                                ) : (

                                    <div className={styles.textWrapper}>
                                        <motion.h2 
                                        variants={textSlideUp(1)}
                                        dangerouslySetInnerHTML={{__html: title}}
                                        >
                                        </motion.h2> 
                                    </div>

                                )  
                                     
                            }
                                
                            <SplitText links={links} linksTitle={linksTitle} delay={1}>
                                {children}
                            </SplitText>

                            {
                                link && (
                                    <div className={styles.buttonWrapper}>
                                        <CustomButtonSec link={link} style={{display: "inline-block"}}>Read More</CustomButtonSec> 
                                    </div>
                                )
                            }
                            
                        </motion.div>


                    </div>

                    {
                        link ? (
                            <div className={`${styles.image} col-lg-5 order-1 order-lg-2`} ref={img} >
                                <Link href={link}>
                                    <a>

                                        <div className="position-relative overflow-hidden">
                                            <motion.div className={styles.cover} variants={coverSlideUp(1, 2.5)}></motion.div>
                                            <Image
                                            src={image}
                                            alt={title}
                                            width={500}
                                            height={square ? 300 : 569}
                                            layout="responsive"
                                            objectFit="cover"
                                            objectPosition="center"
                                            />
                                          </div>

                                    </a>
                                </Link>
                            </div>
                        ) : (
                            <div className={`${styles.image} col-lg-5 order-1 order-lg-2`} ref={img} >

                                
                                <div className="position-relative overflow-hidden">
                                    <motion.div className={styles.cover} variants={coverSlideUp(1, 2.5)}></motion.div>
                                    <Image
                                    src={image}
                                    alt={title}
                                    width={500}
                                    height={square ? 300 : 569}
                                    layout="responsive"
                                    objectFit="cover"
                                    objectPosition="center"
                                    />
                                </div>
                                  
                            </div>
                        )
                    }


            </div>


        </motion.section>
    )
}

export default HeadingLayout
