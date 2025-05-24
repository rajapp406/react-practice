import News from "../lazy-loading/components/News";
import StockSticker from "../lazy-loading/components/StockSticker";
import Todo from "../lazy-loading/components/Todo";
import Weather from "../lazy-loading/components/Weather";
import { DragDropContext } from 'react-beautiful-dnd'
export function Dashboard(){
    const onDragEnd = (r) =>{
        console.log(r)
    }
    return(
        <>
        <DragDropContext 
        onDragStart={onDragEnd}
        >
        <Weather/>
        <News footer="Hello"/>
        <StockSticker />
        <Todo/>
        </DragDropContext>
   
        </>
    )
}