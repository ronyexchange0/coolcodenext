import {motion} from "framer-motion";

import { coverSlide } from "../animations";

import styles from '../styles/CustomSelect.module.scss';

const CustomSelect = ({...props}) => {
    return (
        <div className={`${styles.customSelect} overflow-hidden`} {...props}>
            <motion.span variants={coverSlide(1.5)} className={styles.cover}></motion.span>
            <select name="day" defaultValue={'DEFAULT'}>
                <option value="DEFAULT" disabled>Select A Day</option>
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thursday">Thursday</option>
                <option value="friday">Friday</option>
                <option value="saturday">Saturday</option>
                <option value="sunday">Sunday</option>
            </select>
        </div>
    )
}
export default CustomSelect
