import React from "react";

const TableCell = ({title, currency, isPercent, isBillion, isChange})=>{
    return(
        <td className="table__cell">
            <span 
                style={{color: isChange && (title > 0 ? 'green' : (title < 0 ? 'red' : 'black'))}} 
                className="table__cell-title"
            >
                {(title === null || title === 0) ? 'N/A' : 
                    (isPercent ?
                        // Форматирование ячейки заголовка таблицы 'ОТКЛОНЕНИЕ %': 
                        (title.toFixed(3)*1000/10)
                        :
                        (isBillion ?
                            // Форматирование ячейки заголовка таблицы 'РЫН. КАП.': 
                            `${title.toString().slice(0,-9) ? title.toString().slice(0,-9) : 0}.${title.toString().slice(1,3)}B` 
                            : 
                            title
                        )
                    )
                }
            </span>
            <span className="table__cell-price">{(title > 0 || title < 0) && currency}</span>
        </td>
    )
}

export default TableCell;