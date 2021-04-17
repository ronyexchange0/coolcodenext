import {useState} from "react"

import HeadingLayout from "../components/HeadingLayout";

import styles from "../styles/AboutItemsList.module.scss"

const AbouItemstList = () => {

    const [aboutItems, setAboutItems] = useState(
        [
            {
                title: "who are we",
                text: "We are a professional digital marketing agency helping businesses to be visible online, so they get new customers fast with no effort. <br/> <br/> Through our creative web solutions plus our digital marketing strategies and content creation, we take your business to the next level.",
                image: "/assets/about/whoAreWe.jpg"
            },
            {
                title: "our mission",
                text: "Our mission is to help business owners to grow their businesses. <br/> <br/> What makes us special is the fact that we're looking to build a long term relationship with our clients, to guarantee their continuous growth. <br/> <br/> YOUR SUCCESS IS OUR SUCCESS.",
                image: "/assets/about/ourMission.jpg"
            },
            {
                title: "how we help",
                text: "We help our clients achieving their goals through a variety of services that makes you stand out. <br/> <br/> First, we start by analyzing your website (if you have one) and your social media accounts as well as your competitors' accounts and website. <br/> <br/> Then we provide you with the right strategy on how to beat all your competitors. <br/> Go to the <Link> to know more.",
                image: "/assets/about/howWeHelp.jpg",
                links: ["/services"],
                linksTitle: ["services page"]
            },
        ]
    )

    return (
        <div className={styles.aboutItemsList}>
            
            {
                aboutItems.map(({text, ...props}, idx) => {
    
                    const isOdd = idx % 2
                    

                    return (
    
                        <HeadingLayout key={props.title + idx}  {...props} isH1={false} isLeft={isOdd && true}> 
                            {text} 
                        </HeadingLayout>
                    )
                })
            }
        </div>
    )
}

export default AbouItemstList
