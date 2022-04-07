import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  width: 100vh;
  height: 100vh;
  background: #2b2f38;

  > .h1 {
    position: absolute;

  }
`;

const Button = styled.button`
  width: 180px;
  height: 40px;
  background: #2d313c;
  border-radius: 30px;
  border: 2px solid white;
  justify-content: center;
  align-items: center;
`


const Home = () => {
    return (
        <Wrapper>
            <h1>你好！</h1>
            <h2>欢迎使用售楼宝报价工具</h2>
            <Button>创建新项目报价</Button>
        </Wrapper>
    );
}

export default Home;