import React from "react";
import { Link } from "react-router-dom";

const NotFound = ()=>{
    return(
        <div className="not-found">
            <h2 className="not-found__title">404</h2>
            <h4 className="not-found__text">Упс! Страница не найдена</h4>
            <Link to="/" className="not-found__back">Вернуться на главную</Link>
        </div>
    )
}

export default NotFound;