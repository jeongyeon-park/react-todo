import { useEffect } from "react";
import InputName from "../components/InputName";
import { UserOutlined } from "@ant-design/icons";
import * as S from "../components/style";
import { useRecoilValue } from "recoil";
import { userNameState } from "../atom";
import { useNavigate } from "react-router-dom";
import { Col, Layout, Row } from "antd";

const { Content } = Layout;

const Home = () => {
  const userName = useRecoilValue(userNameState);
  const navigate = useNavigate();

  // 유저 이름 localStorage 에 있으면 다음 페이지
  useEffect(() => {
    if (userName) {
      navigate("/weather");
    }
  }, []);  

  return (
    <S.Container>
      <Layout style={{"backgroundColor":"transparent"}}>
        <Content>
          <Row>
            <Col xs={{ span: 22, offset: 1 }} lg={{ span: 12, offset: 6 }}>
              <S.ComponentWrap>
                <UserOutlined
                  style={{
                    fontSize: "50px",
                    backgroundColor: "lightgrey",
                    padding: "20px",
                    borderRadius: "100px",
                    marginBottom: "30px",
                  }}
                />
                <InputName />
              </S.ComponentWrap>
            </Col>
          </Row>
        </Content>
      </Layout>
    </S.Container>
  );
};

export default Home;
