import {useState} from "react";
import {motion} from "framer-motion";

import Meta from "../../components/Meta";
import HeadingLayout from "../../components/HeadingLayout";
import CallToAction from "../../components/CallToAction";
import WhiteSpace from "../../components/WhiteSpace";
import BlogChunk from "../../components/BlogChunk";
import Loader from "../../components/Loader";

import styles from "../../styles/ServicePage.module.scss";

const DataAnalysis = () => {

    const [serviceElements, setEerviceElements] = useState(
        {
            
            intro: {
                    title: "Data analysis &amp; insights",
                    text: "Get a report of all your competitors and all their online strategies so you can know their secrets and enhance them. <br/> Our team will be glad to talk to you and tell you more about your competitors and how to beat them. All for FREE.",
                    image: "/assets/services/insights.jpg"
            },

            otherServices: {
                title: "other services",
                text: "<LinkWithSpace> <LinkWithSpace> <LinkWithSpace> <LinkWithSpace> <LinkWithSpace>",
                image: "/assets/services/otherServices.jpg",
                linksTitle: [
                    "- Website Design &amp; Development <br/>", 
                    "- Social Media Marekting<br/>",
                    "- CONTENT MARKETING <br/>",
                    "- SEO<br/>",
                    "- APP DESIGN &amp; DEVELOPMENT"
                ],
                links: [
                    "/services/website-design-development", 
                    "/services/social-media-marketing",
                    "/services/content-marketing",
                    "/services/seo",
                    "/services/app-design-development"
                ]
                            
            },

            chunks: [
                {
                    h: motion.h2,
                    hContent: "Get a report of your competitors strategies",
                    pContent: "Who wouldn't want to know how are his competitors getting all their customers? What keywords do they use? What's their <Link> and content strategy? All that and more will be in the report.",
                    img: "/assets/services/report.jpg",
                    links: ["/services/seo"],
                    linksTitle: ["SEO"]
                },
                {
                    h: motion.h2,
                    hContent: "Get the solution to beat your competitors",
                    pContent: "After you talk to our team and they give you the report of your competitors, you can discuss with them how to overcome your competitors with the right strategy.",
                    img: "/assets/services/solution.jpg",
                }

            ]
        }
    )

    return (
        <main className={styles.contentMarketing}>

            <Meta
            title={serviceElements.intro.title}
            description="Get a report of all your competitors and all their online strategies so you can know their secrets and enhance them. Our team will be glad to talk to you and tell you more about your competitors and how to beat them. All for FREE."
            keywords="coffee shop data, data analysis and insights"
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

export default DataAnalysis
