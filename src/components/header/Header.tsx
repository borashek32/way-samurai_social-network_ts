import React from "react";
import HeaderLink from "./headerLink/HeaderLink"

function Header() {
    return (
        <div>
            <h1>Social Network</h1>
            <HeaderLink title={"Home"} />
            <HeaderLink title={"About"}/>
            <HeaderLink title={"Articles"}/>
        </div>
    )
}

export default Header;