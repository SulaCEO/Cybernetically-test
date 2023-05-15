import React from "react";
import { useDispatch } from "react-redux";
import { setTableStatus } from "../../redux/reducers/mainReducer";

const Header = ()=>{
    const dispatch = useDispatch();

    return(
        <header className="header">
            <div className="header__content">
                <span 
                    onClick={()=>dispatch(setTableStatus('needful'))} 
                    className="header__needful">
                    По страницам
                </span>
                <div className="header__logo">
                    <h1 className="header__logo-name">
                        <a href="">Cybernetically</a>
                    </h1>
                </div>
                <span 
                    onClick={()=>dispatch(setTableStatus('all'))} 
                    className="header__all">
                    Всё
                </span>
            </div>
        </header>
    )
}

export default Header;