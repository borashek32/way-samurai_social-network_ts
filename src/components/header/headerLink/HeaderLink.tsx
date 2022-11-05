import React from "react";

type HeaderLinkPropsType = {
    title: string
}

function HeaderLink(props: HeaderLinkPropsType) {
    return (
        <>
            <a href="#">{ props.title }</a>
        </>
    )
}

export default HeaderLink