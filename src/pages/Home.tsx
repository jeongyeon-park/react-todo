import InputName from "../components/InputName";
import styled from "styled-components";
import { UserOutlined } from "@ant-design/icons";
import * as S from "../components/style";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const HomeComponent = styled.div`
    width: 00px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 1px solid lightgrey;
    padding: 20px;
`;

const Home =()=>{
    return (
        <S.Container>
            <S.ComponentWrap>
                <UserOutlined style={{fontSize: "50px", backgroundColor:"lightgrey", padding: "20px", borderRadius: "100px", marginBottom:"30px"}}/>
                <InputName/>
            </S.ComponentWrap>
        </S.Container>
    );    
}

export default Home;