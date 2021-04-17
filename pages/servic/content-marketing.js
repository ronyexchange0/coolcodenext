import {useState} from "react";
import {motion} from "framer-motion";

import Meta from "../../components/Meta";
import HeadingLayout from "../../components/HeadingLayout";
import CallToAction from "../../components/CallToAction";
import WhiteSpace from "../../components/WhiteSpace";
import BlogChunk from "../../components/BlogChunk";
import Loader from "../../components/Loader";

import styles from "../../styles/ServicePage.module.scss";

const ContentMarketing = () => {

    const [serviceElements, setEerviceElements] = useState(
        {
            
            intro: {
                    title: "Content Marketing",
                    text: "Let's create engaging content that attracts and interests your audience. <br/> We can create a blog and add new articles to your coffee shop website and create posts and manage your social media accounts. ",
                    image: undefined
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
                    "- APP DESIGN &amp; DEVELOPMENT"
                ],
                links: [
                    "/services/website-design-development", 
                    "/services/social-media-marketing",
                    "/services/data-analysis-insights",
                    "/services/seo",
                    "/services/app-design-development"
                ]
                            
            },

            chunks: [
                {
                    h: motion.h2,
                    hContent: "Content creation ",
                    pContent: "Our content marketing team will add new articles to your website daily, not only it's a very important factor to <Link> but it will also keep your customers informed about your business.",
                    img: "/assets/services/content.jpg",
                    links: ["/services/seo"],
                    linksTitle: ["rank on google"]
                },
                {
                    h: motion.h2,
                    hContent: "Not enough time to post on social media? Let's take care of that for you",
                    pContent: "We can fully manage your accounts from posting attractive to running ads that convert.",
                    img: "/assets/services/managment.jpg",
                }

            ]
        }
    )

    return (
        <main className={styles.contentMarketing}>

            <Meta
            title={serviceElements.intro.title}
            description="Let's create engaging content that attracts and interests your audience. We can create a blog and add new articles to your coffee shop website and create posts and manage your social media accounts."
            keywords="content marketing, coffee shop content creation, coffee shop article"
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

export default ContentMarketing
