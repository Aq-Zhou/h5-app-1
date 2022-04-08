import React from "react";
import styled from "styled-components";
import Button from "../components/Button";

const Wrapper = styled.div`
  position: absolute;
  width: 100vh;
  min-height: 100%;
  background: #2b2f38;
`;


function Home (){
    return (
        <Wrapper>
            <h1>你好！</h1>
            <h2>欢迎使用售楼宝报价工具</h2>
            <Button>创建新项目报价</Button>
        </Wrapper>
    );
}


export default Home;