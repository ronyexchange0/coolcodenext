import { motion } from 'framer-motion'

import CallToAction from '../../components/CallToAction'
import Loader from '../../components/Loader'
import Meta from '../../components/Meta'
import Projects from '../../components/Projects'
import WhiteSpace from '../../components/WhiteSpace'

const ProjectsPage = () => {
    return (
        <main>
            <Meta
            title="Success Stories - CoolCode digital marketing agency" 
            keywords="marketing projects, marketing success stories, seo projects, digital marketing agency, seo, web design"
            description="See success stories of people with whom we worked and were able to grow their business and get them more customers with the help of seo, social media marketing and web design."
            link="/projects"
            />
            <Loader/>
            <motion.div exit={{opacity: 0}}>
                <Projects/>  
                <WhiteSpace/>  
                <CallToAction/>
            </motion.div>
        </main>
    )
}

export default ProjectsPage
