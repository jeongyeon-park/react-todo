import { useRef, useState } from "react";
import { Form, Button, Input, Row, Col } from "antd";
import * as S from "../components/style";
import styled from "styled-components";
import TodoItem from "../components/TodoItem";
import { useRecoilState } from "recoil";
import { todoListState } from "../atom";

const ListWrap = styled.div`
  width: 100%;
`;
const ListItemWrap = styled.div`
  width: 33%;
`;

const TodoList = () => {
  interface ITodoItem {
    id: number;
    name: string;
    status: "TO_DO" | "DONE" | "PENDING";
  }
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
  };

  return (
    <S.Container>
      <S.ComponentWrap>
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
            <Col className="gutter-row" span={8}>
              <div>Todo</div>
              <div>
                {todoList
                  .filter((item) => item.status === "TO_DO")
                  .map((item) => (
                    <TodoItem {...item}></TodoItem>
                  ))}
              </div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div>Pending</div>
              <div>
                {todoList
                  .filter((item) => item.status === "PENDING")
                  .map((item) => (
                    <TodoItem {...item}></TodoItem>
                  ))}
              </div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div>Done</div>
              <div>
                {todoList
                  .filter((item) => item.status === "DONE")
                  .map((item) => (
                    <TodoItem {...item}></TodoItem>
                  ))}
              </div>
            </Col>
          </Row>
        </ListWrap>
      </S.ComponentWrap>
    </S.Container>
  );
};

export default TodoList;
