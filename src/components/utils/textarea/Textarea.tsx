import classesAdd from "./Textarea.module.sass";

type TextareaType = {
    rows: number
    placeholder: string
}

export const Textarea = (props: TextareaType) => {
    return (
        <textarea className={classesAdd.addPost__textarea} rows={props.rows} placeholder={props.placeholder}></textarea>
    )
}