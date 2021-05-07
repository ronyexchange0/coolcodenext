import {motion} from "framer-motion";

import HeadingLayout from "../components/HeadingLayout";
import ContactForm from "../components/ContactForm";
import Process from "../components/Process";
import Loader from "../components/Loader";
import Meta from "../components/Meta";

import styles from "../styles/Contact.module.scss";

const Contact = () => {
    return (
        <main className={styles.contact}>
            <Meta
            title="Book a free strategy session"
            description="Book a free strategy session with us to analyze your current situation and help you to create a business plan for your business"
            keywords="free strategy session, free marketing, business plan"
            link="/contact"
            />

            <Loader/>

            <motion.div 
            className="container"
            exit={{opacity: 0}}
            >

                <HeadingLayout title="FREE STRATEGYY SESSION">
                    {`Fill in the form then select a day and one of our team will call you on the day you chose. <br/> He will discuss your problems and what're the things you want to accomplish. <br/> Then we will analyze your current situation and provide you with the solution.`}
                </HeadingLayout>
            
                <ContactForm />

                <Process/>


            </motion.div>
            
        </main>
    )
}

export default Contact
