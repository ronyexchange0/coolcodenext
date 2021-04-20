import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

import styles from "../styles/LinksBox.module.scss";
import { fadeLeft, linksBoxStagger, linksBoxItems, textSlideUp } from "../animations";

const LinksBox = () => {

    const links = ["a", "b", "c", "d", "f"]
    
    const animation = useAnimation()
    const [linksBox, inView] = useInView({
        triggerOnce: true,
        rootMargin: "-150px"
    })

    useEffect(() => {
        if (inView) {
            animation.start("animate")
        }
    }, [animation, inView])

    return (
        <motion.div 
        initial="initial"
        animate={animation}
        variants={fadeLeft("100px", 1)} 
        className={styles.linksBox}
        ref={linksBox}
        >
            <div className={styles.head}>
                <div className="overflow-hidden">
                    <motion.span variants={textSlideUp(1.3)} >Guides</motion.span>
                </div>
            </div>
            <div className={styles.body}>
                <motion.ul variants={linksBoxStagger()}>
                    {
                        links.map((link, idx) => (
                            <motion.li key={idx} variants={linksBoxItems()}>
                                <Link href="#">
                                    <a>{link}</a>
                                </Link>
                            </motion.li>
                        ))
                    }
                </motion.ul>
            </div>
        </motion.div>
    )
}

export default LinksBox
