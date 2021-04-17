import Loader from "../components/Loader";
import styles from "../styles/Success.module.scss";

const Success = () => {
    return (
        <div className="container">
            <Loader/>
            <div className={styles.success}>
                <h1>Your message was sent successfully!</h1>
                <p>We will contact you as soon as possible</p>
            </div>
        </div>
    )
}

export default Success
