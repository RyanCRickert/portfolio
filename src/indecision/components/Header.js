import React from "react";

const Header = (props) => (
    <div className="header-indecision">
    <div className="container-indecision">
    <h1 className="header__title-indecision">{props.title}</h1>
    {props.subtitle && <h2 className="header__subtitle-indecision">{props.subtitle}</h2>}
    </div>
    </div>
)

Header.defaultProps = {
title: "Indecision"
}

export default Header;