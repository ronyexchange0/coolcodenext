import {motion} from "framer-motion";

import Meta from "../components/Meta";
import Services from "../components/Services";
import CallToAction from "../components/CallToAction";
import Loader from "../components/Loader";

const ServicesPage = () => {
    return (
        <main>
            <Meta 
            title="Cool Cafe services"
            description="get more custoemrs for your coffee shop with our services such as web design, seo, data and insights and much more services that guarantee your coffee shop success."
            keywords="seo, social media marketing, digital marketing, coffee shop marketing, coffee shop app, coffee shop content"
            />

            <Loader/>

            <motion.div exit={{opacity: 0}}>
                <Services isH1/>

                <CallToAction/>
            </motion.div>

        </main>
    )
}

export default ServicesPage
