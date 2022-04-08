import {useParams} from "react-router-dom";
import React from "react";
import {Input} from 'antd';
import styled from "styled-components";
import {ArrowRightOutlined} from '@ant-design/icons';

const Demo = styled.div`

  * {
    margin: 0;
    padding: 0;
  }

  position: absolute;
  width: 100%;
  min-height: 100%;
  background: #2b2f38;

  > span {
    color: white;
    font-size: 26px;
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
                <Input
                    placeholder="请输入项目名称"
                    suffix={<ArrowRightOutlined />}
                />
            </p>
            <h3>{inputId}</h3>
        </Demo>
    );
}

export default Write;