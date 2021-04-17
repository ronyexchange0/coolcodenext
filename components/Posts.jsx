import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";

import { textSlideUp } from "../animations";
import PostsList from "./PostsList";

import styles from "../styles/Posts.module.scss";

const Posts = ({posts}) => {

    const animation = useAnimation()
    const [postsRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: "-150px"
    })

    useEffect(() => {
        if (inView) {
            animation.start("animate")
        }
    }, [animation, inView])

    return (
        <motion.section ref={postsRef} initial="initial" animate={animation} className={styles.posts}>

            <div className="container">


                <div className={styles.heading}>

                    <div className={styles.textWrapper} style={{marginBottom: 0}}>
                        <motion.span variants={textSlideUp(1)}>Blog</motion.span>
                    </div>

                    <div className={styles.textWrapper}>
                        <motion.h2 variants={textSlideUp(1.3)}>Learn &amp; Grow</motion.h2>
                    </div>

                </div>

                <PostsList posts={posts} />
            </div>

        </motion.section>
    )
}

export default Posts
