import { useRef } from "react";
import { Form, Button, Input, Row, Col, Layout, Grid , theme} from "antd";
import * as S from "../components/style";
import styled from "styled-components";
import TodoItem from "../components/TodoItem";
import { useRecoilState, useRecoilValue } from "recoil";
import { todoListState, userNameState } from "../atom";
import { Content } from "antd/es/layout/layout";

const {useBreakpoint} = Grid;

const Title = styled.div`
  @media ${(props)=>props.theme.mobile}{
    margin-bottom: 5px;
    font-size: 15px;
  }

  font-size: 17px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #5f4ca5;
`;


const ListItemWrap = styled.div`
  @media ${(props)=>props.theme.mobile} {
    height: 120px;
  }
  overflow-y: auto;
  height: 320px;
`;

const TodoList = () => {
  const breakpoint = useBreakpoint();

  const userName = useRecoilValue(userNameState);

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

    console.log(todoList);
  };

  return (
    <S.Container>
      <Layout style={{"backgroundColor":"transparent"}}>
        <Content>
          <Row>
            <Col xs={{ span: 22, offset: 1 }}  lg={{ span: 12, offset: 6 }}>
              <S.ComponentWrap>
                <Row >
                  <Col>
                    <Title>{userName}님의 TodoList</Title>
                    <Form form={form} onFinish={onFinish}>
                      <Form.Item
                        label="todo"
                        name="todo"
                        rules={[
                          {
                            required: true,
                            message: "할 일을 입력 해 주세요.",
                          },
                        ]}
                        style={breakpoint.xs ? {"margin":"0"}:{}}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item>
                        <Button 
                          size={breakpoint.xs ? "small" : "middle"}
                          htmlType="submit">
                          ( •̀ .̫ •́ )✧ 할 수 있다 !
                        </Button>
                      </Form.Item>
                    </Form>
                  </Col>
                </Row>

                <Row style={{ width: "100%" }}>
                  <Col className="gutter-row" xs={24} sm={24} md={8}>
                    <Title>To do</Title>
                    <ListItemWrap>
                      {todoList
                        .filter((item) => item.status === "TO_DO")
                        .map((item) => (
                          <TodoItem key={item.id} {...item}></TodoItem>
                        ))}
                    </ListItemWrap>
                  </Col>

                  <Col className="gutter-row" xs={24} sm={24} md={8}>
                    <Title>Pending</Title>
                    <ListItemWrap>
                      {todoList
                        .filter((item) => item.status === "PENDING")
                        .map((item) => (
                          <TodoItem key={item.id} {...item}></TodoItem>
                        ))}
                    </ListItemWrap>
                  </Col>

                  <Col className="gutter-row" xs={24} sm={24} md={8}>
                    <Title>Done</Title>
                    <ListItemWrap>
                      {todoList
                        .filter((item) => item.status === "DONE")
                        .map((item) => (
                          <TodoItem key={item.id} {...item}></TodoItem>
                        ))}
                    </ListItemWrap>
                  </Col>
                </Row>
              </S.ComponentWrap>
            </Col>
          </Row>
        </Content>
      </Layout>
    </S.Container>
  );
};

export default TodoList;
