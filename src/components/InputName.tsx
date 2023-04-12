import {Input, Button, Form} from 'antd';
import {useNavigate} from 'react-router-dom';

function InputName(){
    const navigate = useNavigate();

    const [form] = Form.useForm();

    const onFinish= (values:any)=>{
        console.log(values);
        localStorage.setItem('name',values.username);
        navigate('/whether');
    }

    return (
        <div>
            <Form 
                onFinish={onFinish}>
                <Form.Item
                    label="username"
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
        </div>
    );
}

export default InputName;