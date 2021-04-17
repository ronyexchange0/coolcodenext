import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import styles from "../styles/CustomLink.module.scss";

const CustomLink = ({text = "read more", link = "#", ...props}) => {
    return (
        <Link href={link} >

            <a>
                
                <motion.div className={styles.CustomLink} {...props}>

                    <span className={styles.text}>{text}</span>

                    <Image
                        src="/assets/arrow.svg"
                        alt="read more arrow link"
                        width={234}
                        height={11}
                        className={styles.arrow}
                    />

                    <svg className={styles.circle} width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.18164 27.5803C3.58164 45.9803 18.1816 50.247 25.1816 50.0803C44.3816 49.2805 49.8483 34.7471 50.1816 27.5803C50.1816 5.98052 33.6816 1.08008 24.6816 1.08008C20.6816 0.580078 14.5799 2.43629 9.68164 6.08496C5.63873 10.085 -0.0963402 17.7825 1.18164 27.5803Z" stroke="white"/>
                    </svg>

                </motion.div>

            </a>
            
        </Link>
    )
}

export default CustomLink
