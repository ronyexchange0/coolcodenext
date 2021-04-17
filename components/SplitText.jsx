import Link from "next/link"
import { motion } from "framer-motion"

import {staggerTextSlideUp} from "../animations";

import styles from "../styles/TopStory.module.scss";



const SplitText = ({
    children,
    delay, 
    duration, 
    ease, 
    type,
    links = [] ,
    linksTitle = [],
    ...props}) => {


    let words = children.split(" ")
    let linkCounter = -1

    return (


        <p {...props}>


            {

                words.map((word, idx) => {


                        if (word == "<Link>") {

                            linkCounter++

                            return (
                                <span key={word + idx} className="d-inline-block overflow-hidden">
                                    
                                    <motion.span
                                    className={`d-inline-block ${styles.noBold}`}
                                    variants={staggerTextSlideUp(idx, delay, duration, ease, type)}
                                    >
                                
                                        <Link 
                                        key={word + idx} 
                                        href={links[linkCounter]}
                                        >
                                            <a>
                                                {linksTitle[linkCounter]} 
                                            </a>
                                        </Link> 
                                        &nbsp;
                                    </motion.span>
                                </span>
                            )
                                
                        }

                        if (word == "<LinkWithSpace>") {

                            linkCounter++

                            return (
                                <span key={word + idx} className="d-block overflow-hidden">
                                

                                    <motion.span
                                    className={`d-inline-block ${styles.noBold}`}
                                    variants={staggerTextSlideUp(idx, delay, duration, ease, type)}
                                    >
                                
                                        <Link 
                                        key={word + idx} 
                                        href={links[linkCounter]}
                                        >
                                            <a 
                                            dangerouslySetInnerHTML={{__html: linksTitle[linkCounter]}}
                                            className="d-inline-block"
                                            >
                                            </a>
                                        </Link> 
                                    </motion.span>
                                        

                                </span>
                            )
                                
                        }


                        if (word == "<br/>") {
    
                            return <br key={word + idx} />
    
                        }

                        return (
    
                            <span key={word + idx} className="d-inline-block overflow-hidden">
    
                                <motion.span
                                    className={`d-inline-block ${styles.noBold}`}
                                    variants={staggerTextSlideUp(idx, delay, duration, ease, type)}
                                >
                                
                                    {`${word}${idx !== words.lengts - 1 ? "\xa0" : ""}`}
                                
                                </motion.span>
    
                            </span>

                        )


                })

            }


        </p>


    )
}

export default SplitText
