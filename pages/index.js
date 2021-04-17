import { motion } from 'framer-motion'

import Meta from "../components/Meta";
import TopStory from '../components/TopStory'
import Services from '../components/Services'
import Posts from '../components/Posts'
import CallToAction from '../components/CallToAction'
import Loader from '../components/Loader'
import Projects from '../components/Projects';
import Process from '../components/Process';
import { getArticles, getServices } from '../utils';

import styles from '../styles/Home.module.scss'

export const getStaticProps = async () => {

    const [posts, services] = await Promise.all([
      getArticles(4),
      getServices(),
    ]);

    return {
        props: {posts, services},
        revalidate: 10,
    }
}

export default function Home({posts, services}) {

  return (
    <main className={styles.main}>
      <Meta/>

      <Loader/>

      <motion.div exit={{opacity: 0}}>
        <TopStory/>   

        <Projects/>

        <Services services={services}/>

        {/* <Posts posts={posts} /> */}

        <Process/>

        <CallToAction/>
      </motion.div>
    </main>

      
  )
}
