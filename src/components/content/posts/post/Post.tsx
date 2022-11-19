import classes from './Post.module.sass'
import Author from "./Author/Author";
import {ButtonDefault} from "../../../utils/buttons/ButtonDefault";

export type PostType = {
    id: number
    // title: string
    likes: number
    desc: string
    isPublished: boolean
}

export const Post = (props: PostType) => {
    const addLike = () => {
        return alert(props.id);
    }

    const unpublishPost = () => {
        return alert('unpublished');
    }

    const publishPost = () => {
        return alert('published');
    }

    const editPost = () => {
        return alert('edited');
    }

    const deletePost = () => {
        return alert('deleted');
    }


    return (
        <div className={classes.post}>
            <Author />
            <div className={classes.post__content}>
                {/*<h4 className={classes.post__header}>{props.title}</h4>*/}
                <p className={classes.post__desc}>{props.desc}...</p>
                <div className={classes.post__buttons}>
                    Likes: {props.likes}
                    <ButtonDefault callback={publishPost} name={"Publish"} />
                    <ButtonDefault callback={unpublishPost} name={"Unpublish"} />
                    <ButtonDefault callback={editPost} name={"Edit"} />
                    <ButtonDefault callback={deletePost} name={"Delete"} />
                </div>
            </div>
        </div>
    );
}