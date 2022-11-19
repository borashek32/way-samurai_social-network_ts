import classes from './Dialogs.module.sass'
import {NavLink} from "react-router-dom"

export type DialogsType = {
    dialogs: Array<DialogType>
    dialogsTitle: string
    messages: Array<MessageType>
    messagesTitle: string
}

export type DialogType = {
    id: number
    userName: string
}

export type MessageType = {
    id: number
    text: string
}

export const Dialogs = (props: DialogsType) => {
    let dialogsArray = props.dialogs.map((dialog, index) => {
        let path = "/dialogs/" + dialog.id;

        return (
            <div className={classes.messages__user_wrapper}>
                <NavLink key={dialog.id} to={path} className={classes.messages__user} activeClassName={classes.active}>
                    <img className={classes.messages__user_img} src="https://gamerwall.pro/uploads/posts/2022-06/1655668285_2-gamerwall-pro-p-koti-na-more-priroda-krasivo-foto-3.jpg" alt="logo" width="30px" />
                    {dialog.userName}
                </NavLink>
            </div>
        )
    })

    let messagesArray = props.messages.map((message, index) => {
        return (
            <div key={message.id} className={classes.messages__message_wrapper}>
                {message.text}
            </div>
        )
    })

    return (
        <div className={classes.messages}>
            <div className={classes.messages__column_user}>
                <h3 className={classes.messages__header}>{props.dialogsTitle}</h3>
                {dialogsArray}
            </div>
            <div className={classes.messages__column_messages}>
                <h3 className={classes.messages__header}>{props.messagesTitle}</h3>
                {messagesArray}
            </div>
        </div>
    );
}