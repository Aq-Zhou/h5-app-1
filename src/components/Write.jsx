import {NavLink, withRouter} from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import {Input} from 'antd';
import styled from "styled-components";
import right from '../icons/right.svg'

import {changeName} from '../store/actionCreators.js'

import { useDispatch } from "react-redux";

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
  > a {
    top: 0;
    bottom: 24px;
    left: 243px;
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


function Write(props) {


    const inputRef = useRef()

    const dispatch = useDispatch()

    const inputValue = () => {
      // console.log(inputRef.current.input.value);
      
      dispatch(changeName(inputRef.current.input.value))

      if(inputRef.current.input.value !== '') {
        props.history.push('/show')
        console.log('props', props)
      }
    }


    return (
        <Demo>
            <span>
                请输入项目名称
            </span>
            <p>
                <Input placeholder="请输入项目名称" ref={inputRef} />
            </p>
            <div onClick={()=> inputValue()}>
                <div>
                    <img src={right}  alt="" />
                </div>
            </div>

        </Demo>
    );
}

export default withRouter(Write);