import classes from './Posts.module.sass'
// import {Post, PostType} from "./post/Post"
import {AddPost} from "./addPost/AddPost"
import {ButtonDefault} from "../../utils/buttons/ButtonDefault";
import {useState} from "react";
import Author from "./post/Author/Author";
import {ButtonDefaultForPost} from "../../utils/buttons/ButtonDefaultForPost";

export type PostsType = {
    title: string
    posts: Array<PostType>
}

export type PostType = {
    id: number
    // title: string
    likes: number
    desc: string
    isPublished: boolean
}

export type FilterType = "All Posts" | "Published Posts" | "Unpublished Posts"

export const Posts = (props: PostsType) => {
    // filter posts
    const [filter, setFilter] = useState<FilterType>("All Posts");

    const filterClickHandler = (buttonName: FilterType) => {
        setFilter(buttonName);
    }

    let currentPosts = props.posts;

    if (filter === "Published Posts") {
        currentPosts = currentPosts.filter((filteredPost) => filteredPost.isPublished);
    }
    if (filter === "Unpublished Posts") {
        currentPosts = currentPosts.filter((filteredPost) => !filteredPost.isPublished);
    }

    // post functions
    let [posts, setPosts] = useState(props.posts)

    const unpublishPost = () => {
        return alert('unpublished');
    }

    const publishPost = () => {
        return alert('published');
    }

    const editPost = () => {
        return alert('edited');
    }

    const deletePostHandler = (postId: number) => {
        // return alert('deleted');
        setPosts(currentPosts.filter(post => post.id !== postId));
        console.log(alert(currentPosts))
    }

    return (
        <div className={classes.posts}>
            <h2 className={classes.posts__header}>{props.title}</h2>
            <AddPost />
            <div className={classes.posts__buttons}>
                <ButtonDefault callback={() => filterClickHandler('All Posts')} name={"All Posts"} />
                <ButtonDefault callback={() => filterClickHandler('Published Posts')} name={"Published Posts"} />
                <ButtonDefault callback={() => filterClickHandler('Unpublished Posts')} name={"Unpublished Posts"} />
                <ButtonDefault callback={() => {}} name={"New Posts"} />
            </div>
            {currentPosts.map(post => {
                return (
                    <div className={classes.post} key={post.id}>
                        <Author />
                        <div className={classes.post__content}>
                            {/*<h4 className={classes.post__header}>{props.title}</h4>*/}
                            <p className={classes.post__desc}>{post.desc}...</p>
                            <div className={classes.post__buttons}>
                                Likes: {post.likes}
                                <ButtonDefaultForPost callback={publishPost} name={"Publish"} />
                                <ButtonDefaultForPost callback={unpublishPost} name={"Unpublish"} />
                                <ButtonDefaultForPost callback={editPost} name={"Edit"} />
                                <ButtonDefaultForPost callback={() => deletePostHandler(post.id)} name={"Delete"} />
                            </div>
                        </div>
                    </div>
                    // <Post
                    // key={index}
                    // id={post.id}
                    // // title={post.title}
                    // likes={post.likes}
                    // desc={post.desc}
                    // isPublished={post.isPublished}
                    // />
                )
            })}
        </div>
    );
}