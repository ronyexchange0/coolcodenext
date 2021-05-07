import {useEffect, useState} from "react"
import { useInView } from 'react-intersection-observer';
import { motion, useViewportScroll, useAnimation, useTransform } from "framer-motion";
import Image from "next/image";

import Meta from "../../components/Meta";
import HeadingLayout from "../../components/HeadingLayout";
import Loader from "../../components/Loader";
import { getProject, getProjects } from "../../utils";
import { fadeUp, textSlideUp, fadeLeft } from "../../animations";

import styles from "../../styles/Project.module.scss";

const Post = ({project}) => {

    //data
    const {title, image: {url}, content, projectSection, work, meta: {metaDescription, tags}, slug} = project
    const {title: titleM, content: contentM, image: {url: urlM}} = projectSection[0]
    const {title: titlePC, content: contentPC, image: {url: urlPC}} = projectSection[1]

    //parallax effect
    const { scrollYProgress } = useViewportScroll();
    const ypc = useTransform(scrollYProgress, [.45, .7], [0, 100]);
    const ym = useTransform(scrollYProgress, [.8, 1], [0, 100]);
    const [hookedYPositionPC, setHookedYPositionPC] = useState(0);
    const [hookedYPositionM, setHookedYPositionM] = useState(0);
    useEffect(()=>{
        ypc.onChange(y => setHookedYPositionPC(y));
        ym.onChange(y => setHookedYPositionM(y));
    },[scrollYProgress]);

    //work section animation
    const workAnimation = useAnimation()
    const [workRef, workInView] = useInView({
        triggerOnce: true,
        rootMargin: "-150px"
    })
    useEffect(() => {
        if (workInView) {
            workAnimation.start("animate")
        }
    }, [workAnimation, workInView])

    //PC section animation
    const pcAnimation = useAnimation()
    const [pcRef, pcInView] = useInView({
        triggerOnce: true,
        rootMargin: "-150px"
    })
    useEffect(() => {
        if (pcInView) {
            pcAnimation.start("animate")
        }
    }, [pcAnimation, pcInView])

     //PC section animation
     const mAnimation = useAnimation()
     const [mRef, mInView] = useInView({
         triggerOnce: true,
         rootMargin: "-150px"
     })
     useEffect(() => {
         if (mInView) {
             mAnimation.start("animate")
         }
     }, [mAnimation, mInView])

    return (
        <main className={styles.projectPage}>
            <Meta
            title={title}
            description={metaDescription}
            keywords={tags}
            link={`/projects/${slug}`}
            image={url}
            />
            <Loader/>

            <motion.div className="container" exit={{opacity: 0}}>

                <HeadingLayout square image={url} title={title}  style={{marginBottom: "60px"}}>
                    {content}
                </HeadingLayout>


                <motion.section 
                initial="initial"
                animate={workAnimation} 
                ref={workRef}
                className={styles.work} 
                >

                    
                    <div className={styles.heading}>

                        <div className={styles.textWrapper} style={{marginBottom: 0}}>
                            <motion.span variants={textSlideUp()}>Work process</motion.span>
                        </div>

                        <div className={styles.textWrapper}>
                            <motion.h2 variants={textSlideUp(.3)}>What We Did</motion.h2>
                        </div>

                    </div>

                    <div className={`row ${styles.workItemsList}`}>
                        {
                            work.map(({id, title, icon}, idx) => (
                                <div className={`col-sm-3 col-6 ${styles.workItem} text-center`} key={id}>
                                    <div className={styles.textWrapper}>
                                        <motion.h3 variants={textSlideUp(idx * 0.2)}>{title}</motion.h3>
                                    </div>

                                    <motion.div  variants={fadeUp(idx * 0.2)} className={styles.imgWrapper}  >
                                        <Image
                                        alt={title}
                                        src={icon.url}
                                        width={100}
                                        height={100}
                                        />
                                    </motion.div>
                                </div>
                            ))
                        }
                    </div>
                    
                    
                </motion.section>
                

                


                <motion.section 
                initial="initial"
                animate={pcAnimation} 
                ref={pcRef}
                className={`row align-items-center ${styles.pcSection} ${styles.view}`}
                >
                    
                    <motion.div variants={fadeLeft("-100px", 1)}   className={`${styles.image} col-md-6 order-2 order-md-1`} >
                        <div className={styles.imgWrapper}>
                          
                                <div className={styles.webWrapper}>
                                    <Image
                                    alt={`${title} on desktop`}
                                    src={urlM}
                                    width={600}
                                    height={400}
                                    layout="responsive"
                                    objectFit="cover"
                                    objectPosition={`0 ${hookedYPositionPC}%`}
                                    />
                                </div>

                        </div>

                        <div className={styles.base}></div>
                        <div className={styles.notch}></div>
                        
                    </motion.div>


                    <div className={`${styles.content} col-md-6 order-1 order-md-2`}>
                        <div className={styles.textWrapper}>
                            <motion.h2 variants={textSlideUp(1)}>{titlePC}</motion.h2>
                        </div>
                        
                        {/* <SplitText delay={1}>{contentPC}</SplitText> */}
                    </div>

                </motion.section>


                <motion.section 
                initial="initial"
                animate={mAnimation} 
                ref={mRef}
                className={`row align-items-center ${styles.mSection} ${styles.view}`}>


                    <div className={`${styles.content} col-md-6`}>
                        <div className={styles.textWrapper}>
                            <motion.h2 variants={textSlideUp(1)}>{titleM}</motion.h2>
                        </div>
                        
                        {/* <SplitText delay={1}>{contentM}</SplitText> */}
                    </div>


                    <div className={`${styles.image} col-md-6`} >
                        <motion.div variants={fadeLeft("100px",1)}  className={styles.imgWrapper}>

                                <div className={styles.webWrapper}>
                                    <Image
                                    alt={`${title} on mobile phones`}
                                    src={urlPC}
                                    width={600}
                                    height={780}
                                    layout="responsive"
                                    objectFit="cover"
                                    objectPosition={`0 ${hookedYPositionM}%`}
                                    />

                                    
                                </div>

                                <div className={styles.sensor}></div>
                                <div className={styles.button}></div>
                        </motion.div>
                    </div>

                    
                </motion.section>


            </motion.div>

        </main>
    )
}

export default Post

export const getStaticPaths = async () => {
    const projects = await getProjects()
    
    return {
        paths: projects.map(project => ({
            params: {
                slug: project.slug,
            }
        })),
        fallback: false
    }
}

export const getStaticProps = async ({params}) => {
    const project = await getProject(params.slug) 
    return {
        props: {project},
        revalidate: 10,
    }
}