import classes from './Posts.module.sass'
import {Post} from "./post/Post";

export const Posts = () => {
    return (
        <div className={classes.posts}>
            <h2 className={classes.posts__header}>My Posts</h2>
            <Post title={"My first post"}/>
            <Post title={"My first post"}/>
            <Post title={"My first post"}/>
            <Post title={"My first post"}/>
            <Post title={"My first post"}/>
        </div>
    );
}