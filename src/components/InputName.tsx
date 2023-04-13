import {Input, Button, Form} from 'antd';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

const InputWrap = styled.div`
    width: 300px;
`

const InputName = ()=>{
    const navigate = useNavigate();

    const [form] = Form.useForm();

    const onFinish= (values:any)=>{
        console.log(values);
        localStorage.setItem('name',values.username);
        navigate('/weather');
    }

    return (
        <InputWrap>
            <Form 
                onFinish={onFinish}>
                <Form.Item
                    label="이름"
                    name="username"
                    rules={[{required: true, message:"이름을 입력 해주세요."},
                            {min:1, message:"1글자 이상 이름을 입력 해주세요."}]}
                >
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit">
                        등록
                    </Button>
                </Form.Item>
            </Form>
        </InputWrap>
    );
}

export default InputName;