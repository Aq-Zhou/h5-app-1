import {NavLink, useParams} from "react-router-dom";
import React from "react";
import {Input} from 'antd';
import styled from "styled-components";
import {ArrowRightOutlined} from '@ant-design/icons';

const Demo = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #2b2f38;

  > span {
    color: white;
    font-size: 26px;
  }
  
  > p {
    margin: auto;
  }
`

function Write() {
    let {inputId} = useParams();
    return (
        <Demo>
            <span>
                请输入项目名称
            </span>
            <p>
                <Input placeholder="请输入项目名称"/>
                <NavLink to='show'>
                    <ArrowRightOutlined style={{fontSize: 30, color: 'white'}} />
                </NavLink>
            </p>
            <h3>{inputId}</h3>
        </Demo>
    );
}

export default Write;