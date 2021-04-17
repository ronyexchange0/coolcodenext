import ReactMarkdown from "react-markdown";
import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";

import Meta from "../../components/Meta";
import HeadingLayout from "../../components/HeadingLayout";
import Loader from "../../components/Loader";
import { getArticle, getArticles } from "../../utils";
import PostsList from "../../components/PostsList";
import { fadeUp, textSlideUp } from "../../animations";

import styles from "../../styles/ServicePage.module.scss";

const Post = ({post, morePosts}) => {

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


    const animation = useAnimation()
    const [morePostsRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: "-150px"
    })

    useEffect(() => {
        if (inView) {
            animation.start("animate")
        }
    }, [animation, inView])

    const {title, image: {url}, content, description} = post

    return (
        <main className={styles.servicePage}>
            <Meta
            title={title}
            description={description}
            />
            
            <Loader/>

            <motion.div className="container" exit={{opacity: 0}} initial="initial" animate={animation}>

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

                {
                    morePosts.length > 0 ? (
                        <div className={styles.morePosts} ref={morePostsRef} >

                            <div className={styles.heading}>

                                <div className={styles.textWrapper} style={{marginBottom: 0}}>
                                    <motion.span variants={textSlideUp(.2)}>Recommended For You</motion.span>
                                </div>

                                <div className={styles.textWrapper}>
                                    <motion.h2 variants={textSlideUp(.5)}>Featured Articles</motion.h2>
                                </div>

                            </div>

                            <PostsList posts={morePosts} />

                        </div>
                    ) : ""
                }


            </motion.div>

        </main>
    )
}

export default Post

export const getStaticPaths = async () => {
    const posts = await getArticles()
    
    return {
        paths: posts.map(post => ({
            params: {
                slug: post.slug,
            }
        })),
        fallback: false
    }
}
export const getStaticProps = async ({params}) => {
    
   

    const post = await getArticle(params.slug) 
    const morePosts = await getArticles(2, post.category.slug, params.slug)
    return {
        props: {post, morePosts},
        revalidate: 10,
    }
}