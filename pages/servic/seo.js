import {useState} from "react";
import {motion} from "framer-motion";

import Meta from "../../components/Meta";
import HeadingLayout from "../../components/HeadingLayout";
import CallToAction from "../../components/CallToAction";
import WhiteSpace from "../../components/WhiteSpace";
import BlogChunk from "../../components/BlogChunk";
import Loader from "../../components/Loader";

import styles from "../../styles/ServicePage.module.scss";

const SEO = () => {

    const [serviceElements, setEerviceElements] = useState(
        {
            
            intro: {
                    title: "seo",
                    text: "These days everything starts with a google search. If you want to book a table in a restaurant or you want to buy something online you search on google for it. <br/> more that 70% of people who search on google don't go past the first page on google. <br/> What does this tell you? If you're not on the first page, you're losing many clients. <br/> Luckily our SEO team can help you to get on the first page on google fast without you having to do anything.",
                    image: "/assets/services/seo.jpg"
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
                    hContent: "SEO competitors analysis and Keyword research",
                    pContent: "Choose the right keywords for your coffee shop and get an <Link> on your competitors to know how to surpass them fast.",
                    img: "/assets/services/analysis.jpg",
                    links: ["/services/data-analysis-insights"],
                    linksTitle: ["analytics report"]
                },
                {
                    h: motion.h2,
                    hContent: "SEO Audit",
                    pContent: "If you have an existing website but it's not ranking on google, we will fix that for you by looking at your site's performance and auditing every aspect of your website.",
                    img: "/assets/services/audit.jpg",
                },
                {
                    h: motion.h2,
                    hContent: "Add and rank google my business ",
                    pContent: "Google my business plays an important role in ranking your website. We will add your website to google my business and get you positive reviews and descriptions, and maybe you added your business to google my business but still not ranking and you don't have enough reviews. Let's fix that for you.",
                    img: "/assets/services/googleMyBusiness.jpg",
                },
                {
                    h: motion.h2,
                    hContent: "Content creation",
                    pContent: "Our <Link> team will add new articles to your website daily, not only it's a very important factor to rank on google but it will also keep your customers informed about your business.",
                    img: "/assets/services/content.jpg",
                    links: ["/services/content-marketing"],
                    linksTitle: ["content marketing"]
                },

            ]
        }
    )

    return (
        <main className={styles.contentMarketing}>

            <Meta
            title={serviceElements.intro.title}
            description="These days everything starts with a google search. If you want to book a table in a restaurant or you want to buy something online you search on google for it. more that 70% of people who search on google don't go past the first page on google. What does this tell you? If you're not on the first page, you're losing many clients. Luckily our SEO team can help you to get on the first page on google fast without you having to do anything."
            keywords="rank coffee shop website, rank on google, coffee shop website"
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

export default SEO
