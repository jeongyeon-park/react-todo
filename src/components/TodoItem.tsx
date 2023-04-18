import {Button} from 'antd';
import styled from "styled-components";
import {useRecoilState} from 'recoil';
import { todoListState } from '../atom';
import { ToDoButtonStyle, PendingButtonStyle, DoneButtonStyle} from '../components/style';

const Item = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`;

const TodoItem = ({id, name , status} : {
    id:number,
    name:string,
    status: string
})=>{

    const [todoList, setTodoList] = useRecoilState(todoListState);
    const handleOnToDoClick = () =>{
        setTodoList(todoList.map((item)=> item.id === id ? {...item, status:"TO_DO"} : item ))
    }
    const handleOnPendingClick = () =>{
        setTodoList(todoList.map((item)=> item.id === id ? {...item, status:"PENDING"} : item ))
    }
    const handleOnDoneClick = () =>{
        setTodoList(todoList.map((item)=> item.id === id ? {...item, status:"DONE"} : item ))
    }
    
    return (
        <Item>
            <div style={{width:"40%", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"}}>{name}</div>
            {status === "TO_DO" ? 
                <>
                    <Button style={PendingButtonStyle} onClick={handleOnPendingClick}>Pending</Button>
                    <Button style={DoneButtonStyle} onClick={handleOnDoneClick}>Done</Button>
                </> 
            :
            (status === "PENDING" ?  
                <>
                    <Button style={ToDoButtonStyle} onClick={handleOnToDoClick}>Todo</Button>
                    <Button style={DoneButtonStyle} onClick={handleOnDoneClick}>Done</Button> 
                </> 
            :
                <>
                    <Button style={ToDoButtonStyle} onClick={handleOnToDoClick}>Todo</Button>
                    <Button style={PendingButtonStyle} onClick={handleOnPendingClick}>Pending</Button>
                </>
            )
        }
        </Item>
    );
}

export default TodoItem;