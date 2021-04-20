import { useEffect, useRef } from "react";
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation, useViewportScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { fadeUp } from "../animations";

import styles from "../styles/SocialShare.module.scss";

const SocialShare = () => {
    const { scrollYProgress } = useViewportScroll();
    const ypc = useTransform(scrollYProgress, [.3, .9], [0, 100]);

    const animation = useAnimation()

    useEffect(() => {
        ypc.onChange(y => {
            if (y < 5 || y > 99) {
                animation.start({opacity: 0})
            } else {
                animation.start({opacity: 1})
            }
        });

    }, [animation, scrollYProgress])

    return (
        <motion.div
        initial={{opacity: 0}} 
        animate={animation}
        className={styles.socials}>

            <div className={styles.social} >
                <Link href="#">
                    <a>
                        <Image
                        src="/assets/fb.svg"
                        width={70}
                        height={70}
                        />
                    </a>
                </Link>
            </div>

            <div className={styles.social}>
                <Link href="#">
                    <a>
                        <Image
                        src="/assets/ig.svg"
                        width={70}
                        height={70}
                        />
                    </a>
                </Link>
            </div>

            <div>
                <Link href="#">
                    <a>
                        <Image
                        src="/assets/in.svg"
                        width={70}
                        height={70}
                        />
                    </a>
                </Link>
            </div>

        </motion.div>
    )
}

export default SocialShare
