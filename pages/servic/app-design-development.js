import {motion} from "framer-motion";
import {useState} from "react"

import Meta from "../../components/Meta";
import HeadingLayout from "../../components/HeadingLayout";
import CallToAction from "../../components/CallToAction";
import WhiteSpace from "../../components/WhiteSpace";
import BlogChunk from "../../components/BlogChunk";
import Loader from "../../components/Loader";

import styles from "../../styles/ServicePage.module.scss";

const AppDev = () => {

    const [serviceElements, setEerviceElements] = useState(
        {
            
            intro: {
                    title: "App Design &amp; Development",
                    text: "So you have a website and you want to have an app to increase the awareness of your business? With us, you can have a customized app with an elegant design that increases trust in your business",
                    image: "/assets/services/appDev.jpg"
            },

            otherServices: {
                title: "other services",
                text: "<LinkWithSpace> <LinkWithSpace> <LinkWithSpace> <LinkWithSpace> <LinkWithSpace>",
                image: "/assets/services/otherServices.jpg",
                linksTitle: [
                    "- Website Design &amp; Development <br/>", 
                    "- Social Media Marekting<br/>",
                    "- Data &amp; Analytics<br/>",
                    "- SEO<br/>",
                    "- Content Marketing"
                ],
                links: [
                    "/services/website-design-development", 
                    "/services/social-media-marketing",
                    "/services/data-analysis-insights",
                    "/services/seo",
                    "/services/content-marketing"
                ]
                            
            },

            chunks: [
                {
                    h: motion.h2,
                    hContent: "Mobile app for your coffee shop with an elegant design",
                    pContent: "A mobile app will increase trust in your business, especially with an elegant design.",
                    img: "/assets/services/app.jpg",
                },
                {
                    h: motion.h2,
                    hContent: "Upload your app to google play and the app store",
                    pContent: "After you get your app, our team will be glad to upload it on google play and the app store for you.",
                    img: "/assets/services/appStore.jpg",
                }

            ]
        }
    )

    return (
        <main className={styles.contentMarketing}>
            <Meta
            title={serviceElements.intro.title}
            description="So you have a website and you want to have an app for your coffee shop to increase the awareness of your coffee shop? With us, you can have a customized app with an elegant design that increases trust in your coffee shop."
            keywords="app design, app development, coffee shop mobile app"
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
                    image="/assets/services/otherServices.jpg"
                    title="other services"
                    links={ [
                        "/services/website-design-development", 
                        "/services/social-media-marketing",
                        "/services/data-analysis-insights",
                        "/services/seo",
                        "/services/content-marketing",
                        "/services/app-design-development", 
                    ]}  
                    linksTitle={[
                        "- Website Design &amp; Development <br/>", 
                        "- Social Media Marekting<br/>",
                        "- Data &amp; Analytics<br/>",
                        "- SEO<br/>",
                        "- Content Marketing<br/>",
                        "- App Design &amp; Development<br/>"
                    ]}  
                    style={{marginBottom: "60px"}}
                >
                    {"<LinkWithSpace> <LinkWithSpace> <LinkWithSpace> <LinkWithSpace> <LinkWithSpace> <LinkWithSpace>"}
                </HeadingLayout>


            </motion.div>

        </main>
    )
}

export default AppDev
