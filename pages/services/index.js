import {motion} from "framer-motion";

import Meta from "../../components/Meta";
import Services from "../../components/Services";
import CallToAction from "../../components/CallToAction";
import Loader from "../../components/Loader";
import { getServices } from "../../utils";

export const getStaticProps = async () => {

    const services = await getServices()
    return {
        props: {services},
        revalidate: 10,
    }
}

const ServicesPage = ({services}) => {
    return (
        <main>
            <Meta 
            title="CoolCode services"
            description="get more custoemrs for your business with our services such as web design, seo, data and insights and much more services that guarantee your business success."
            keywords="seo, social media marketing, digital marketing, coffee shop marketing, coffee shop app, coffee shop content"
            link="/services"
            />

            <Loader/>

            <motion.div exit={{opacity: 0}}>
                <Services isH1 services={services}/>

                <CallToAction/>
            </motion.div>

        </main>
    )
}

export default ServicesPage
