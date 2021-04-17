import {useState} from "react";
import {motion} from "framer-motion";

import Meta from "../../components/Meta";
import HeadingLayout from "../../components/HeadingLayout";
import CallToAction from "../../components/CallToAction";
import WhiteSpace from "../../components/WhiteSpace";
import BlogChunk from "../../components/BlogChunk";
import Loader from "../../components/Loader";

import styles from "../../styles/ServicePage.module.scss";

const WebDev = () => {

    const [serviceElements, setEerviceElements] = useState(
        {
            
            intro: {
                    title: "Website Design &amp; Development",
                    text: "Do you want to rank on google and attract new customers? Or you want to have an elegant website to look professional? Or maybe you want to have an E-commerce website to sell your coffee online. <br/> If you own a business, then a website is a priority for you. <br/> With us, you can have an elegant SEO-friendly website that positions you to succeed.",
                    image: "/assets/services/website.png"
            },

            otherServices: {
                title: "other services",
                text: "<LinkWithSpace> <LinkWithSpace> <LinkWithSpace> <LinkWithSpace> <LinkWithSpace>",
                image: "/assets/services/otherServices.jpg",
                linksTitle: [
                    "- Social Media Marekting<br/>",
                    "- Data &amp; Analytics<br/>",
                    "- CONTENT MARKETING <br/>",
                    "- SEO<br/>",
                    "- APP DESIGN &amp; DEVELOPMENT"
                ],
                links: [
                    "/services/social-media-marketing", 
                    "/services/data-analysis-insights",
                    "/services/content-marketing",
                    "/services/seo",
                    "/services/app-design-development"
                ]
                            
            },

            chunks: [
                {
                    h: motion.h2,
                    hContent: "Add your favourite features",
                },
                {
                    pContent: "Add your menu to the website.",
                    img: "/assets/services/menu.jpg",
                },
                {
                    pContent: "Tell your clients about your location.",
                    img: "/assets/services/location.jpg",
                },
                {
                    pContent: "Get in touch with your clients.",
                    img: "/assets/services/contact.jpg",
                },
                {
                    pContent: "Rank higher on google with an optimized website for seach engins and our help in <Link> and content creation.",
                    img: "/assets/services/google.jpg",
                    links: ["/services/seo"],
                    linksTitle: ["SEO"]
                },
                {
                    pContent: "Sell your products online.",
                    img: "/assets/services/ecommerce.jpg",
                },

                {
                    pContent: "Connect your <Link> to your website.",
                    img: "/assets/services/socials.jpg",
                    links: ["/services/social-media-marketing"],
                    linksTitle: ["social media"]      
                },

            ]
        }
    )

    return (
        <main className={styles.contentMarketing}>

            <Meta
            title={serviceElements.intro.title}
            description="Do you want to rank on google and attract new customers? Or you want to have an elegant website to look professional? Or maybe you want to have an E-commerce website to sell your coffee online. If you own a coffee shop, then a website is a priority for you. With us, you can have an elegant SEO-friendly website that positions you to succeed."
            keywords="coffee shop website, coffee shop website rank, coffee shop website content"
            />

            <Loader/>

            <motion.div className="container" exit={{opacity: 0}}>


                <HeadingLayout image={serviceElements.intro.image} title={serviceElements.intro.title}  style={{marginBottom: "60px"}}>
                    {serviceElements.intro.text}
                </HeadingLayout>


                <div className="row justify-content-center">

                    <div className={`${styles.content} col-md-6 text-center`}>

                        {   
                            serviceElements.chunks.map(({...props}, idx) => {
                                return <BlogChunk key={`BlogChunk${props.hContent}${idx}`} {...props}></BlogChunk>
                            })
                        }

                    </div>

                </div>

                <CallToAction/>

                <WhiteSpace/>


                <HeadingLayout 
                    image={serviceElements.otherServices.image} 
                    title={serviceElements.otherServices.title}  
                    links={serviceElements.otherServices.links}  
                    linksTitle={serviceElements.otherServices.linksTitle}  
                    style={{marginBottom: "60px"}}
                >
                    {serviceElements.otherServices.text}
                </HeadingLayout>


            </motion.div>

        </main>
    )
}

export default WebDev
