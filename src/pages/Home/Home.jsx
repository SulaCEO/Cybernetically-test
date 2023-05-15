import React, { useState } from "react";
import Table from "./Table/Table";
import PaginationPage from "../../components/PaginationPage/PaginationPage";
import { useSelector } from "react-redux";
import Preload from "../../components/Preload/Preload";

const Home = ()=>{
    const {isPreload, tableStatus} = useSelector((state)=>state.mainReducer);

    return(
        <div className="home">
            {isPreload ?
                <Preload/>
                :
                <>
                    <Table/>
                    {tableStatus === 'all' ? '' : <PaginationPage/>}
                </>
            }
        </div>
    )
}

export default Home;