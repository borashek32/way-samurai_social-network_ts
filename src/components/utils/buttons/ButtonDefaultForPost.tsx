import classes from './ButtonDefault.module.sass'

type ButtonDefaultForPostType = {
    name: string
    callback: () => void
}

export const ButtonDefaultForPost = (props: ButtonDefaultForPostType) => {
    const onClickButtonHandler = () => {
        props.callback();
    }
    return (
        <button
            onClick={onClickButtonHandler}
            className={classes.button}
        >
            {props.name}
        </button>
    )
}