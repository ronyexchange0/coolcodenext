import { motion } from "framer-motion";

import { coverSlide } from "../animations";

import styles from "../styles/CustomInput.module.scss";

const CustomInput = ({margin = "40px", ...props}) => {
    return (
        <div style={{marginBottom: margin}} className={`${styles.customInput} position-relative overflow-hidden`}>
            <input {...props}/>
            <motion.span variants={coverSlide(props.delay)} className={styles.cover}></motion.span>
            <span className={styles.w100}></span>
        </div>
    )
}

export default CustomInput
