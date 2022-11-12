import classes from './Post.module.sass'
import Author from "./Author/Author";
import {ButtonDefault} from "../../../utils/buttonDefault/ButtonDefault";

type PostType = {
    title: string
}

export const Post = (props: PostType) => {
    return (
        <div className={classes.post}>
            <Author />
            <div className={classes.post__content}>
                <h4 className={classes.post__header}>{props.title}</h4>
                <p className={classes.post__desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, non quaerat. Labore veritatis voluptatum, ratione dicta veniam modi error ducimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, deleniti...</p>
                <div className={classes.post__buttons}>
                    <ButtonDefault />
                </div>
            </div>
        </div>
    );
}