import {useState} from 'react'

import Service from "./Service";

import styles from "../styles/ServicesList.module.scss";

const ServicesList = ({services}) => {

    const [servicess, setServices] = useState(
        [
            {
                title: "Website Design & Development",
                text: "Do you want to rank on google and attract new customers? Or you want to have an elegant website to look professional? Or maybe you want to have an E-commerce website to sell your coffee online. <br/> If you own a coffee shop, then a website is a priority for you. <br/> With us, you can have an elegant SEO-friendly website that positions you to succeed.",
                link: "/services/website-design-development"
            },
            {
                title: "SEO",
                text: " These days everything starts with a google search. If you want to book a table in a restaurant or you want to buy something online you search on google for it. <br/> more that 70% of people who search on google don't go past the first page on google.  <br/> What does this tell you? If you're not on the first page, you're losing many clients. <br/> Luckily our SEO team can help you to get on the first page on google fast without you having to do anything.",
                link: "/services/seo"
            },
            {
                title: "Social Media Marketing",
                text: "while coffee lovers navigate different social media platforms, your coffee shop must stand out with high-quality content to leave an impact. <br/> Our social media team can guarantee to leave a huge impact on your customers by managing your content and messages on Instagram and Facebook, and also running ads that convert.",
                link: "/services/social-media-marketing"
            },
            {
                title: "Data analysis & insights",
                text: "Get a report of all your competitors and all their online strategies so you can know their secrets and enhance them. <br/> Our team will be glad to talk to you and tell you more about your competitors and how to beat them. All for FREE.",
                link: "/services/data-analysis-insights"
            },
            {
                title: "App Design & Development",
                text: "So you have a website and you want to have an app for your coffee shop to increase the awareness of your coffee shop? <br/> With us, you can have a customized app with an elegant design that increases trust in your coffee shop.",
                link: "/services/app-design-development"
            },
            {
                title: "Content Marketing",
                text: "Let's create engaging content that attracts and interests your audience. <br/> We can create a blog and add new articles to your coffee shop website and create posts and manage your social media accounts.",
                link: "/services/content-marketing"
            },
            {
                title: "Photography",
                text: "After 2 years of specializing in photography, our team's able to take your website and social media to the next level by taking professional pictures of your business.",
                link: "/services/photography"
            },
        ]
    )

    return (
        <div className={styles.servicesList}>

            {
                services.map(({description, ...props}, idx) => {
    
                    const isOdd = idx % 2
    
                    return (
    
                        <div key={props.title + idx} className="row">
    
                            {isOdd ? <div className="col-xl-4 col-md-2"></div> : ""}
    
                            <Service isOdd={isOdd} {...props}>{description}</Service>
    
                        </div>
                    )
                })
            }

        </div>
    )
}

export default ServicesList
