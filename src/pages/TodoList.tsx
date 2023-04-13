import {useState} from 'react';
import {Form, Button, Input} from 'antd';

const TodoList = ()=>{
    interface ITodoItem{
        name:string,
        status: "TO_DO"|"DONE"|"PENDING"
    }

    const [todoList, setTodoList] = useState<ITodoItem[]>([]);

    const onFinish = (values:any)=>{
        setTodoList((prev)=>[...prev,{name:values.todo, status:"TO_DO"}])
    }

    return (
        <div>
            <Form onFinish={onFinish}>
                <Form.Item
                    label="todo"
                    name="todo"
                    rules={[{required: true, message:"할 일을 입력 해 주세요."}]}
                >
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button htmlType='submit'/>
                </Form.Item>
            </Form>
            {todoList.map((item)=>item.name)}
        </div>
    );
}

export default TodoList;