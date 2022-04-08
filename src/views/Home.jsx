import React from "react";
import styled from "styled-components";
import Button from "./Button";
import H1 from "./H1";
import H2 from "./H2"
import {NavLink} from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  background: #2b2f38;
`;


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