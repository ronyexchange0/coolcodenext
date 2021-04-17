import {motion} from "framer-motion";
import Link from "next/link";

import styles from "../styles/CustomButtonSec.module.scss";

const CustomButtonSec = ({children, link = false, ...props}) => {
    return (
        link ? (
            <motion.div className={styles.customButtonSec} {...props}>
                <Link href={link}>
                    <a>
                        {children}
                    </a>
                </Link>
            </motion.div>
        ) : (
            <motion.button className={styles.customButtonSec} {...props}>{children}</motion.button>
        )
    )
}

export default CustomButtonSec
