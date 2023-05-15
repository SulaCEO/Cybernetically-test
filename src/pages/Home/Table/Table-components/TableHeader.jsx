import React from "react";
import {FiSearch} from "react-icons/fi";

const TableHeader = ({search, setSearch, tableStatus})=>{
    return(
        <thead>
            <tr className="table__header cl">
                <th className="table__hcell cl-number">№</th>
                <th className="table__hcell cl-title">
                    ТИКЕР
                    {tableStatus === 'all' &&   
                        <div className="hcell__search">
                            <span className="hcell__search-icon"><FiSearch/></span>
                            <input
                                value={search}
                                onChange={(e)=>setSearch(e.target.value)} 
                                type="text" className="hcell__search-inp" 
                            />
                        </div>
                    }
                </th>
                <th className="table__hcell">РЫН. КАП.</th>
                <th className="table__hcell">ОТКЛОНЕНИЕ</th>
                <th className="table__hcell">ОТКЛОНЕНИЕ %</th>
                <th className="table__hcell">ЦЕНА ОТКРЫТИЕ</th>
                <th className="table__hcell">ЦЕНА ЗАКРЫТИЕ</th>
            </tr>
        </thead>
    )
}

export default TableHeader;