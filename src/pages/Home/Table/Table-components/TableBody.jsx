import React from "react";
import TableCell from "./TableCell";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { setData } from "../../../../redux/reducers/mainReducer";

const TableBody = ({data, tableStatus, pageFrom})=>{
    const dispatch = useDispatch();

    // Элементы ячейки:
    const isPercent = true;
    const isBillion = true;
    const isChange = true;

    // Функция перетягивания:
    const handleDragEnd = (result)=>{
        if(result.destination){
            const items = Array.from(data);
            const [reorderData] = items.splice(result.source.index, 1);
            items.splice(result.destination.index, 0, reorderData);
            dispatch(setData(items));
        }
    }

    return(
        <>
            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="table-elemets">
                    {(provided)=>(
                        <tbody className="table__column"
                            {...provided.droppableProps} 
                            ref={provided.innerRef} 
                        >
                            {data.map((item, id)=>(
                                <Draggable key={id+1} draggableId={id.toString()} index={id}>
                                    {(provided)=>(
                                        <tr className="table__body cl"
                                            {...provided.draggableProps} 
                                            {...provided.dragHandleProps} 
                                            ref={provided.innerRef}
                                        >
                                            {/* Ячейка заголовка таблицы '№': */}
                                            <td className="table__cell cl-number">
                                                {tableStatus === 'all' ? id+1 : pageFrom+id+1}
                                            </td>

                                            {/* Ячейка заголовка таблицы 'ТИКЕР': */}
                                            <td className="table__cell cl-title">
                                                <div className="cell__title">
                                                    <h6 className="cell__title-shname">{item.symbol}</h6>
                                                    <span className="cell__title-fullname">{item.companyName}</span>
                                                </div>
                                            </td>

                                            {/* Остальные ячейки заголовка таблицы: */}
                                            <TableCell isBillion={isBillion} title={item.marketCap} currency='USD'/>
                                            <TableCell isChange={isChange} title={item.change} currency='USD'/>
                                            <TableCell isChange={isChange} isPercent={isPercent} title={item.changePercent} currency='%'/>
                                            <TableCell title={item.open} currency='USD'/>
                                            <TableCell title={item.close} currency='USD'/>
                                        </tr>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </tbody>
                    )}
                </Droppable>
            </DragDropContext>
        </>
    )
}

export default TableBody;