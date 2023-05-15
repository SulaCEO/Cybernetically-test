import React, { useEffect, useState } from "react";
import TableHeader from "./Table-components/TableHeader";
import TableBody from "./Table-components/TableBody";
import { useDispatch, useSelector } from "react-redux";
import { getAllData, getNeedfulData, setIsPreload } from "../../../redux/reducers/mainReducer";

const Table = ()=>{
    const dispatch = useDispatch();
    const {data, currentPage, tableStatus, pageFrom} = useSelector((state)=>state.mainReducer);
    const [search, setSearch] = useState('');
    
    // При изменении currentPage и tableStatus:
    useEffect(()=>{
        if(data.length < 1){
            dispatch(setIsPreload(true));
        }

        if(tableStatus === 'needful'){
            dispatch(getNeedfulData());
        }else{
            dispatch(getAllData());
        }
    }, [currentPage, tableStatus]);

    // Поиск:
    const searchData = data.filter((el)=>
        el.companyName.toLowerCase().includes(search.toLowerCase()) 
        || 
        el.symbol.toLowerCase().includes(search.toLowerCase())
    );

    return(
        <table className="table">
            <TableHeader search={search} setSearch={setSearch} tableStatus={tableStatus}/>
            <TableBody data={tableStatus === 'all' ? searchData : data} tableStatus={tableStatus} pageFrom={pageFrom}/>
        </table>
    )
}

export default Table;