import Link from 'next/link'
import {motion} from "framer-motion";

import styles from "../styles/CustomButton.module.scss";

const CustomButton = ({children, link = "#", ...props}) => {
    return (
        <motion.div className={styles.buttonWrapper} {...props}>
            <Link href={link}>
                <a><span>{children}</span></a>
            </Link>
        </motion.div>
    )
}

export default CustomButton