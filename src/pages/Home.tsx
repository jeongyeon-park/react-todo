import {useEffect} from "react";
import InputName from "../components/InputName";
import { UserOutlined } from "@ant-design/icons";
import * as S from "../components/style";
import { useRecoilValue } from "recoil";
import { userNameState } from "../atom";
import { useNavigate } from "react-router-dom";


const Home =()=>{

    const userName = useRecoilValue(userNameState);
    const navigate = useNavigate();

    // 유저 이름 localStorage 에 있으면 다음 페이지 
    useEffect(()=>{
        if(userName){
            navigate("/weather");
        }
    })
   
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