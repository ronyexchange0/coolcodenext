import {useState} from "react"
import Link from 'next/link'
import Image from 'next/image'
import { motion } from "framer-motion"

import {
    menuItemsAnime, 
    textSlideUp, 
    fadeUp, 
    menuAnime,
    menuStagger,
    menuIcon,
    menuIconStroke} from "../animations";
import CustomButton from './CustomButton';

import styles from "../styles/Navbar.module.scss";
import buttonStyles from "../styles/CustomButton.module.scss";


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (

        <motion.header 
        className={styles.header}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        >

            <div className="container">

                <div className={styles.navInner}>


                    <motion.div 
                    className={`${styles.menu} d-lg-none`} 
                    variants={menuAnime(0, 2, "easeInOut")}
                    >
                        <nav className={`${styles.navMobile} `}>
                            <motion.ul variants={menuStagger()}>
                                <motion.li 
                                    className="overflow-hidden"
                                    variants={menuItemsAnime()}
                                >
                                    <Link href="/" >
                                        <a className="d-inline-block" >
                                            Home
                                        </a>
                                    </Link>
                                </motion.li>

                                <motion.li
                                    className="overflow-hidden"
                                    variants={menuItemsAnime()}
                                >
                                    <Link href="/about-us" >
                                        <a className="d-inline-block" >
                                            About Us
                                        </a>
                                    </Link>
                                </motion.li>

                                <motion.li 
                                    className="overflow-hidden"
                                    variants={menuItemsAnime()}
                                >
                                    <Link href="/services" >
                                        <a className="d-inline-block" >
                                            Services
                                        </a>
                                    </Link>
                                </motion.li>

                                <motion.li 
                                    className="overflow-hidden"
                                    variants={menuItemsAnime()}
                                >
                                    <Link href="/projects" >
                                        <a className="d-inline-block" >
                                            Success Stories
                                        </a>
                                    </Link>
                                </motion.li>

                                {/* <motion.li 
                                    className="overflow-hidden"
                                    variants={menuItemsAnime()}
                                >
                                    <Link href="/blog" >
                                        <a className="d-inline-block" >
                                            Blog
                                        </a>
                                    </Link>
                                </motion.li> */}

                                <motion.li 
                                    className="overflow-hidden"
                                    variants={menuItemsAnime()}
                                >
                                    <Link href="/contact" >
                                        <a className="d-inline-block" >
                                            Free Session
                                        </a>
                                    </Link>
                                </motion.li>

                            </motion.ul>
                        </nav>

                    </motion.div>

                    <div className={styles.logoWrapper}>
                        <motion.div 
                        className={styles.logo} 
                        variants={fadeUp(1, .4, "easeInOut")} 
                        initial="initial"
                        animate="animate"
                        >
                            <Link href="/">
                                <a>
                                    <Image
                                        src="/assets/logo.svg"
                                        alt="Picture of the author"
                                        width={115}
                                        height={70}
                                        layout="responsive"
                                    />
                                </a>
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div
                    initial="initial"
                    animate="animate"
                    variants={fadeUp(1.5, .4, "easeInOut")} 
                    onClick={() => setIsOpen(!isOpen)} 
                    className={`${styles.svgWrapper} d-lg-none`}>
                        <svg className={styles.ham} viewBox="0 0 80 80">
                            <motion.line animate={isOpen ? "open" : "closed"} variants={menuIcon("100%")} className={styles.witeStroke} x1="40" y1="3" x2="80" y2="3" />
                            <motion.line animate={isOpen ? "open" : "closed"} variants={menuIconStroke()} x1="0" y1="40" x2="80" y2="40" /> 
                            <motion.line animate={isOpen ? "open" : "closed"} variants={menuIcon("-100%")} className={styles.witeStroke} x1="0" y1="77" x2="40" y2="77" />
                        </svg>
                    </motion.div>


                    <nav className={`${styles.nav} d-none d-lg-block`}>
                        <ul className="overflow-hidden">
                            <motion.li 
                            variants={textSlideUp(1.2, .5, "easeInOut")} 
                            initial="initial"
                            animate="animate"
                            >
                                <Link href="/" >
                                    <a className="d-inline-block" >Home</a>
                                </Link>
                            </motion.li>

                            <motion.li 
                            initial="initial"
                            animate="animate"
                            variants={textSlideUp(1.4, .5, "easeInOut")}
                            >
                                <Link href="/about-us">
                                    <a className="d-inline-block" >About Us</a>
                                </Link>
                            </motion.li>

                            <motion.li 
                            initial="initial"
                            animate="animate"
                            variants={textSlideUp(1.4, .5, "easeInOut")}
                            >
                                <Link href="/projects">
                                    <a className="d-inline-block" >Success Stories</a>
                                </Link>
                            </motion.li>

                            {/* <motion.li 
                            initial="initial"
                            animate="animate"
                            variants={textSlideUp(1.4, .5, "easeInOut")}
                            >
                                <Link href="/blog">
                                    <a className="d-inline-block" >Blog</a>
                                </Link>
                            </motion.li> */}

                            <motion.li 
                            variants={textSlideUp(1.6, .5, "easeInOut")} 
                            initial="initial"
                            animate="animate"
                            >
                                <Link href="/services">
                                    <a className="d-inline-block" >Services</a>
                                </Link>
                            </motion.li>
                        </ul>
                    </nav>


                    <CustomButton 
                    initial="initial"
                    animate="animate"
                    variants={fadeUp(1.8, .5, "easeInOut")}  
                    className={`${buttonStyles.buttonWrapper} ${styles.buttonWrapper} d-none d-lg-block`} 
                    link="/contact">
                        FREE Strategy Session
                    </CustomButton>


                </div>
                
            </div>

        </motion.header>
    )
}

export default Navbar
