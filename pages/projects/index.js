import { motion } from 'framer-motion'
import CallToAction from '../../components/CallToAction'
import Loader from '../../components/Loader'
import Projects from '../../components/Projects'
import WhiteSpace from '../../components/WhiteSpace'

const ProjectsPage = () => {
    return (
        <main>
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
