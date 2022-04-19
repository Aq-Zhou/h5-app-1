import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";


const Wrapper = styled.div`
  background: #2b2f38;
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const H1 = styled.h1`
  margin-left: 20px;
  display: flex;
  align-items: flex-end;
  height: 130px;
  color: white;
`;

const H2 = styled.h2`
  margin-left: 20px;
  display: flex;
  top: 40px;
  left: 20px;
  width: 100%;
  height: 40%;
  color: white;
`
const Button = styled.button`
  width: 180px;
  height: 42px;
  background: #2b2f38;
  border-radius: 30px;
  border: 2px solid white;
  margin-left: auto;
  margin-right: auto;
  > a {
    text-decoration: none;
    color: white;
  }
  
`

function Home (){
    return (
        <Wrapper>
            <H1>你好！</H1>
            <H2>欢迎使用<br/>售楼宝报价工具</H2>
            <Button>
                <NavLink to='/write'>
                    创建新项目报价
                </NavLink>
            </Button>
        </Wrapper>
    );
}

export default Home;