import {useState} from "react";
import {motion} from "framer-motion";

import Meta from "../../components/Meta";
import HeadingLayout from "../../components/HeadingLayout";
import CallToAction from "../../components/CallToAction";
import WhiteSpace from "../../components/WhiteSpace";
import BlogChunk from "../../components/BlogChunk";
import Loader from "../../components/Loader";

import styles from "../../styles/ServicePage.module.scss";

const SocialMediaMarketing = () => {

    const [serviceElements, setEerviceElements] = useState(
        {
            
            intro: {
                    title: "Social Media Marekting",
                    text: "while your potential customers navigate different social media platforms, your business must stand out with high-quality content to leave an impact. <br/> Our social media team can guarantee to leave a huge impact on your customers by managing your content and messages on Instagram and Facebook, and also running ads that convert.",
                    image: undefined
            },

            otherServices: {
                title: "other services",
                text: "<LinkWithSpace> <LinkWithSpace> <LinkWithSpace> <LinkWithSpace> <LinkWithSpace>",
                image: "/assets/services/otherServices.jpg",
                linksTitle: [
                    "- Website Design &amp; Development <br/>", 
                    "- Data &amp; Analytics<br/>",
                    "- CONTENT MARKETING <br/>",
                    "- SEO<br/>",
                    "- APP DESIGN &amp; DEVELOPMENT"
                ],
                links: [
                    "/services/website-design-development", 
                    "/services/data-analysis-insights",
                    "/services/content-marketing",
                    "/services/seo",
                    "/services/app-design-development"
                ]
                            
            },

            chunks: [
                {
                    h: motion.h2,
                    hContent: "Increase your followers and likes",
                    img: "/assets/services/followers.jpg",
                },
                {
                    h: motion.h2,
                    hContent: "Get more customers",
                    img: "/assets/services/getCustomers.jpg",
                },
                {
                    h: motion.h2,
                    hContent: "Not enough time to post on social media? Let's take care of that for you",
                    img: "/assets/services/managment.jpg",
                },
                {
                    h: motion.h2,
                    hContent: "Connect your social media to your website",
                    img: "/assets/services/socials.jpg",
                }

            ]
        }
    )

    return (
        <main className={styles.contentMarketing}>

            <Meta
            title={serviceElements.intro.title}
            description="while coffee lovers navigate different social media platforms, your coffee shop must stand out with high-quality content to leave an impact. Our social media team can guarantee to leave a huge impact on your customers by managing your content and messages on Instagram and Facebook, and also running ads that convert."
            keywords="coffee shop social media marketing, coffee shop marketing, digital marketing"
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

export default SocialMediaMarketing
