import {useState} from "react";

import ProcessStep from "./ProcessStep";

import styles from "../styles/ProcessStepsList.module.scss";

const ProcessStepsList = () => {
    
    const [processStepsList] = useState(
        [
            {
                title: "First contact",
                description: "You can book a free strategy session with us by filling the form on our website, or you can send us a message on Instagram or Facebook. <br/> Then, one of our experts will call you on the day that you chose and discuss your problems, your goals, and what're the things you want to accomplish.",
                image: "/assets/process/01.jpg"
            },
            {
                title: "Analysis and solution",
                description: "After the call, we will discuss all the information with our team of specialists. <br/> They will then analyze all the aspects of your business as well as your competitors and they'll find the solution to your problems. <br/> When they're finished, you will get a basic report of the data that we gathered as well as the solution steps.",
                image: "/assets/process/02.jpg"
            },
            {
                title: "The execution phase",
                description: "Here's where the fun begins. If you choose to hire us, we will do our best to complete the solution steps, so you can see good results as fast as possible. <br/> you will also receive regular information from us on the work process.",
                image: "/assets/process/03.jpg"
            },
            {
                title: "Happy client",
                description: "After we successfully achieved your goals and solved your problems. We will discuss the next steps with you and ask for your feedback :)",
                image: "/assets/process/04.jpg"
            },
        ]
    )

    return (
        <div className={styles.processStepsList}>
            <div className="row">
                {
                    processStepsList.map(({description, ...props}, idx) => {

                        return (
                            <ProcessStep key={props.title + idx} idx={idx} {...props}>{description}</ProcessStep>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProcessStepsList
