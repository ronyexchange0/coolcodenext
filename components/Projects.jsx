import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";

import { textSlideUp } from "../animations";
import ProjectsList from "./ProjectsList";

import styles from "../styles/Projects.module.scss";

const Projects = () => {

    const animation = useAnimation()
    const [projectsRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: "-150px"
    })

    useEffect(() => {
        if (inView) {
            animation.start("animate")
        }
    }, [animation, inView])

    return (
        <motion.section ref={projectsRef} initial="initial" animate={animation} className={styles.projects}>
        
            <div className="container">

        
                <div className={styles.heading}>

                    <div className={styles.textWrapper} style={{marginBottom: 0}}>
                        <motion.span variants={textSlideUp(1)}>Projects</motion.span>
                    </div>

                    <div className={styles.textWrapper}>
                        <motion.h2 variants={textSlideUp(1.3)}>Success Stories</motion.h2>
                    </div>

                </div>


                <ProjectsList/>


            </div>
        
        </motion.section>
    )
}

export default Projects
