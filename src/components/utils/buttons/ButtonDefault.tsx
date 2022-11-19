import classes from './ButtonDefault.module.sass'

type ButtonDefaultType = {
    name: string
    callback: () => void
}

export const ButtonDefault = (props: ButtonDefaultType) => {
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