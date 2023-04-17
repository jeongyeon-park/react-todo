import { Input, Button, Form } from "antd";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { userNameState } from "../atom";

const InputWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Infomation = styled.div`
    text-align: left;
    font-weight: bold;
    font-size: 25px;
`

const InputName = () => {
  const setUserName = useSetRecoilState(userNameState);
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log(values);
    setUserName(values.username)
    localStorage.setItem("name", values.username);
    navigate("/weather");
  };

  return (
    <InputWrap>

      <Form onFinish={onFinish}>
        <Form.Item
          label="이름"
          name="username"
          rules={[
            { required: true, message: "이름을 입력 해주세요." },
            { min: 1, message: "1글자 이상 이름을 입력 해주세요." },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">등록</Button>
        </Form.Item>
      </Form>
    </InputWrap>
  );
};

export default InputName;
