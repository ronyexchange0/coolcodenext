import Image from "next/image"
import {motion, useAnimation} from "framer-motion";
import { useState, useEffect } from "react";
import { wrap } from "@popmotion/popcorn";
import { useInView } from 'react-intersection-observer';
import Link from "next/link"

import { textSlideUpSlider, coverSlideSlider, arrowFadeUp } from "../animations";
import CustomButtonSec from "./CustomButtonSec";

import styles from "../styles/ProjectsList.module.scss";

const ProjectsList = () => {

    const content = [
        {
            name: "Fashion du jour",
            slug: "fashion-du-jour",
            alt: "fashion du jour project pricture",
            photos: ["/assets/projects/fashion-du-jour/00.png", "/assets/projects/fashion-du-jour/01.png", "/assets/projects/fashion-du-jour/05.png", "/assets/projects/fashion-du-jour/02.png"],
            height: "300px"
        },
        {
            name: "Marek pluhar",
            slug: "marek-pluhar",
            alt: "Marek Pluhar project pricture",
            photos: ["/assets/projects/marek-pluhar/00.png", "/assets/projects/marek-pluhar/01.png", "/assets/projects/marek-pluhar/02.png", "/assets/projects/marek-pluhar/03.png"],
            height: "500px"

        },
        {
            name: "martin podlesak",
            slug: "martin-podlesak",
            alt: "Martin Podlesak project pricture",
            photos: ["/assets/projects/martin-podlesak/00.png", "/assets/projects/martin-podlesak/01.png", "/assets/projects/martin-podlesak/03.jpg", "/assets/projects/martin-podlesak/02.png"],
            height: "500px"
        },
        {
            name: "Auto no limit",
            slug: "auto-no-limit",
            alt: "Auto No Limit project pricture",
            photos: ["/assets/projects/auto-no-limit/00.png", "/assets/projects/auto-no-limit/01.png", "/assets/projects/auto-no-limit/03.png", "/assets/projects/auto-no-limit/02.png"],
            height: "300px"
        },
    ]
    
    //slider setup
    const [[page, direction], setPage] = useState([0, 0]);
    const i = wrap(0, content.length, page);
    const paginate = async (newDirection) => {
       
        await animation.start("initial")
        
        if (page + newDirection < content.length && page + newDirection >= 0) {
            setPage([page + newDirection, 0]);
        } else if (page + newDirection === content.length) {
            setPage([0, 0]);
        } else if (page + newDirection === -1) {
            setPage([content.length - 1, 0]);
        }
        
    };

    const animation = useAnimation()
    const [projectsRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: "-150px"
    })

    useEffect(() => {
        if (inView) {
            animation.start("animate")
        }
    }, [ animation, inView, page])

   

    return (
        <div className={styles.projectsList}>

                <motion.div 
                ref={projectsRef} 
                initial="initial"
                animate={animation}
                className={`row align-items-center justify-content-between position-relative ${styles.project}`}>

                    <div className={styles.textWrapper} style={{marginBottom: 0}}>
                        <Link href={`/projects/${content[i].slug}`}>
                            <a>

                                <motion.h3 variants={textSlideUpSlider(1, 1)}>{content[i].name}</motion.h3>

                            </a>
                        </Link>
                    </div>

                    <div className={`col-md-12 d-md-none ${styles.image} ${styles.imageM}`} >
                        
                        <Link href={`/projects/${content[i].slug}`}>
                            <a>

                                <div className="position-relative overflow-hidden" style={{width:"100%"}}>
                                    <motion.div className={styles.cover} variants={coverSlideSlider(.2, 2)}></motion.div>
                                    <div className={styles.overlay}></div>
                                    <div>
                                        <Image 
                                            src={content[i].photos[0]}
                                            alt={content[i].alt}
                                            width={500}
                                            height={300}
                                            layout="responsive"
                                            objectFit="contain"
                                        />
                                    </div>
                                </div>


                            </a>
                        </Link>

                    </div>


                    <div 
                    className={`col-md-3 d-none d-md-block ${styles.image} ${styles.image0}`} 
                    onClick={() => paginate(-1)}>
                        
                        <div className="position-relative overflow-hidden" style={{width:"100%", height: content[i].height}}>
                            <motion.div className={styles.cover} variants={coverSlideSlider(.2, 2)}></motion.div>
                            <div className={styles.overlay}></div>
                            <div>
                                <Image 
                                    src={content[i].photos[1]}
                                    alt={content[i].alt}
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="top"
                                />
                            </div>
                        </div>

                    </div>
                    


                    <div className={`col-md-4 d-none d-md-block ${styles.image} ${styles.image1}`} >
                        
                        <Link href={`/projects/${content[i].slug}`}>
                            <a>


                                <div className="position-relative overflow-hidden" style={{width:"100%", height: "700px"}}>
                                    <motion.div className={styles.cover} variants={coverSlideSlider(.4, 2)}></motion.div>
                                    <div className={styles.overlay}></div>
                                    <div>
                                        <Image 
                                            src={content[i].photos[2]}
                                            alt={content[i].alt}
                                            layout="fill"
                                            objectFit="cover"
                                            objectPosition="top"
                                        />
                                    </div>
                                </div>


                            </a>
                        </Link>

                    </div>
                    


                    <div 
                    className={`col-md-3 d-none d-md-block ${styles.image} ${styles.image2}`} 
                    onClick={ () =>  paginate(1)}>

                        <div className="position-relative overflow-hidden" style={{width:"100%", height: content[i].height}}>
                            <motion.div className={styles.cover} variants={coverSlideSlider(.6, 2)}></motion.div>
                            <div className={styles.overlay}></div>
                            <div>
                                <Image 
                                    src={content[i].photos[3]}
                                    alt={content[i].alt}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        </div>

                    </div>


                    <div className={`d-md-none ${styles.pagination}`}>
                        <motion.div  
                        initial="start"
                        animate={animation}
                        onClick={ () =>  paginate(1)}
                        variants={arrowFadeUp(1.5)}
                        className={styles.svgWrapper}
                        >
                            <Image
                            src="/assets/left.svg"
                            width={127}
                            height={96}
                            layout="responsive"
                            />
                        </motion.div>
                        
                        <CustomButtonSec 
                        initial="start"
                        animate={animation}
                        variants={arrowFadeUp(1.7)}
                        link={`/projects/${content[i].slug}`}
                        style={{marginLeft: "32px", marginRight: "32px"}}
                        >
                            See More
                        </CustomButtonSec>

                        <motion.div
                        initial="start"
                        animate={animation}
                        onClick={ () =>  paginate(1)}
                        variants={arrowFadeUp(2)} 
                        className={styles.svgWrapper}
                        >
                            <Image
                            src="/assets/right.svg"
                            width={127}
                            height={96}
                            layout="responsive"
                            />
                        </motion.div>
                    </div>
                
                
                </motion.div>


            
        </div>
    )
}

export default ProjectsList
