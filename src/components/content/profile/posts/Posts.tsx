import classes from './Posts.module.sass'
import {AddPost} from "./addPost/AddPost"
import {ButtonDefault} from "../../../utils/buttons/ButtonDefault";
import React, {useState} from "react";
import {Post} from "./post/Post";

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

export const Posts: React.FC<PostsType> = (props) => {
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
            {currentPosts.map((post, index) => {
                return (
                    <Post
                        key={index}
                        id={post.id}
                        // title={post.title}
                        likes={post.likes}
                        desc={post.desc}
                        isPublished={post.isPublished}
                    />
                )
            })}
        </div>
    );
}