import ReactMarkdown from "react-markdown";
import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";

import Meta from "../../components/Meta";
import HeadingLayout from "../../components/HeadingLayout";
import Loader from "../../components/Loader";
import { getService, getServices } from "../../utils";
import { fadeUp } from "../../animations";
import CallToAction from "../../components/CallToAction";

import styles from "../../styles/ServicePage.module.scss";

const ServicePage = ({service}) => {

    const contentAnimation = useAnimation()
    const [contentRef, contentInView] = useInView({
        triggerOnce: true,
        rootMargin: "-150px"
    })

    useEffect(() => {
        if (contentInView) {
            contentAnimation.start("animate")
        }
    }, [contentAnimation, contentInView])


    const {title, image: {url}, content, description} = service

    return (
        <main className={styles.servicePage}>
            <Meta
            title={title}
            description={description}
            />
            
            <Loader/>

            <motion.div className="container" exit={{opacity: 0}} initial="initial" animate="animate">

                <HeadingLayout image={url} title={title}  style={{marginBottom: "60px"}}>
                    {description}
                </HeadingLayout>


                <motion.div 
                initial="initial" 
                animate={contentAnimation} 
                ref={contentRef} 
                className="row justify-content-center"
                >

                    <motion.div variants={fadeUp(1)} className={`${styles.content} col-md-10 col-lg-8 text-center`}>
                        <ReactMarkdown source={content} escapeHtml={false} />
                    </motion.div>

                </motion.div>

                <CallToAction/>

            </motion.div>

        </main>
    )
}

export default ServicePage

export const getStaticPaths = async () => {
    const services = await getServices()
    
    return {
        paths: services.map(service => ({
            params: {
                slug: service.slug,
            }
        })),
        fallback: false
    }
}

export const getStaticProps = async ({params}) => {
    const service = await getService(params.slug) 
    return {
        props: {service},
        revalidate: 10,
    }
}