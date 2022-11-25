import classesAdd from './AddPost.module.sass'
import classes from '../post/Post.module.sass'
import {ButtonDefault} from "../../../../utils/buttons/ButtonDefault"
import {Textarea} from "../../../../utils/textarea/Textarea";

type AddPostType = {

}

export const AddPost = (props: AddPostType) => {
    return (
        <div className={classesAdd.addPost}>
            <div className={classes.post__content}>
                <Textarea rows={5} placeholder={"Type here to publish a new post"} />
                <div className={classes.post__buttons}>
                    {/*<ButtonDefault onClick={() => {}} name={"Add Post"} />*/}
                </div>
            </div>
        </div>
    );
}