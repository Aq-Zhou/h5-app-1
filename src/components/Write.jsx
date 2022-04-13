import {NavLink, useParams} from "react-router-dom";
import React from "react";
import {Input} from 'antd';
import styled from "styled-components";
import right from '../icons/right.svg'

const Demo = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #2b2f38;

  > span {
    display:block;
    position:absolute;
    width:50%;
    height:160px;
    margin:auto;
    top: 0;
    left:0;
    right:0;
    bottom:0;
    text-align: center;
    color: white;
    font-size: 22px;
  }
  > p {
    position: absolute;
    width: 280px;
    height: 80px;
    margin: auto;
    top: 20px;
    left:0;
    right:0;
    bottom:0;
    > .ant-input {
      margin: auto;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border: none;
      color: white;
      width: 280px;
      height: 36px;
      background: #424852;
      border-radius: 10px;
    }
    > a {
      top: 0;
      bottom: 42px;
      left: 248px;
      right: 0;
      position: absolute;
      margin: auto;
      background: #4faf89;
      border-radius: 10px;
      width: 36px;
      height: 36px;
      img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
      }
    }
  }
`
// const onChange = (values) => {
//     if(values && values.target) {
//         let value =  values.target.value;
//         if(value == '') {
//             alert('项目名称不能为空')
//         } else {
//             console.log(value);
//         }
//     }
// }


function Write() {
    // let {inputId} = useParams();
    return (
        <Demo>
            <span>
                请输入项目名称
            </span>
            <p>
                <Input placeholder="请输入项目名称"/>
                <NavLink to='show'>
                    <div>
                        <img src={right}  alt="" />
                    </div>
                </NavLink>
            </p>
            {/*<h3>{inputId}</h3>*/}
        </Demo>
    );
}

export default Write;