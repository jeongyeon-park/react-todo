import { useRef } from "react";
import { Form, Button, Input, Row, Col } from "antd";
import * as S from "../components/style";
import styled from "styled-components";
import TodoItem from "../components/TodoItem";
import { useRecoilState, useRecoilValue } from "recoil";
import { pendingListState, todoListState, userNameState } from "../atom";

const ListWrap = styled.div`
  width: 100%;
  height: 60%;
`;

const ListItemWrap = styled.div`
  overflow-y: auto;
  height: 360px;
`;

const Title = styled.div`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #5f4ca5;
`;

enum todoStatus {
  todo = "TO_DO",
  done = "DONE",
  pending = "PENDING",
}

const TodoList = () => {
  const userName = useRecoilValue(userNameState);

  interface ITodoItem {
    id: number;
    name: string;
    status: "TO_DO" | "DONE" | "PENDING";
  }

  const todoStatus = ["TO_DO", "DONE", "PENDING"];
  const [todoList, setTodoList] = useRecoilState<ITodoItem[]>(todoListState);

  const keyNumber = useRef(0);

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    setTodoList((prev) => [
      { id: keyNumber.current, name: values.todo, status: "TO_DO" },
      ...prev,
    ]);
    form.resetFields(["todo"]);

    keyNumber.current += 1;

    console.log(todoList);
  };

  return (
    <S.Container>
      <S.ComponentWrap>
        <Title>{userName}님의 TodoList</Title>
        <Form form={form} onFinish={onFinish}>
          <Form.Item
            label="todo"
            name="todo"
            rules={[{ required: true, message: "할 일을 입력 해 주세요." }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">( •̀ .̫ •́ )✧ 할 수 있다 !</Button>
          </Form.Item>
        </Form>

        <ListWrap>
          <Row gutter={16}>
            {todoStatus.map((todoStatusValue) => {
              return (
                <Col className="gutter-row" xs={24} sm={24} md={8}>
                  <Title>{todoStatusValue}</Title>
                  <ListItemWrap>
                    {todoList
                      .filter((item) => item.status === todoStatusValue)
                      .map((item) => (
                        <TodoItem key={item.id} {...item}></TodoItem>
                      ))}
                  </ListItemWrap>
                </Col>
              );
            })}
          </Row>
        </ListWrap>
      </S.ComponentWrap>
    </S.Container>
  );
};

export default TodoList;
