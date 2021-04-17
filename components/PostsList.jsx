import Post from "./Post";

import styles from "../styles/PostsList.module.scss";

const PostsList = (props) => {

    const {posts} = props     

    return (
        <div className={styles.postsList}>
            {
                posts.map(({description, ...props}, idx) => {
                    const isOdd = idx % 2
                    return (
                        <Post key={props.title + idx} isOdd={isOdd} idx={idx} {...props}>{description}</Post>
                    )
                })
            }
        </div>
    )
}

export default PostsList
