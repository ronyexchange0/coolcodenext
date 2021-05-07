import Loader from "../components/Loader"

import Meta from "../components/Meta"
import Posts from "../components/Posts"
import { motion } from "framer-motion"
import { getArticles } from "../utils"

export const getStaticProps = async () => {

    const posts = await getArticles(6)

    return {
        props: {posts},
        revalidate: 10,
    }
}

const blogPage = ({posts}) => {
    return (
        <main>
            <Meta
            title="Blog - CoolCode digital marketing agency" 
            keywords="blog, marketing blog, seo blog, digital marketing agency, seo, web design"
            description="learn how to grow your business and get more customers with the help of seo, social media marketing and web design."
            link="/blog"
            />
            <Loader/>
            <motion.div exit={{opacity: 0}}>
                <Posts posts={posts} />
            </motion.div>
        </main>
    )
}

export default blogPage

// const Blog = () => {
//     return (
//         <div>
//             TRY LATER
//         </div>
//     )
// }

// export default Blog
