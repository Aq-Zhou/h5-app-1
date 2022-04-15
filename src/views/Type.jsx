import React from "react";
import {Input} from 'antd';
import styled from "styled-components";
import Footer from "./Footer";
import TopMessage from "./TopMessage";
import {NavLink} from "react-router-dom";
import PriceCss from "./Price";


const Demo = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #2b2f38;
  text-align: center;
  .half {
    display: inline-block;
    position: absolute;
    bottom: 0;
    transform: translate(-50%,-50%);
  }
  
  
   .types, .numbers {
    width: 280px;
    height: 80px;
     
     .ant-input {
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


function Type() {
    return (
        <Demo>
            <TopMessage>
                <div className='textCss' >
                    <div>模块名称-形式名称</div>

                    <PriceCss>
                        <h3 style={{color:"white"}}>含税总价(13%)</h3>
                        <h2 style={{color:"#ffb520"}}>￥23132332</h2>
                        <h4 style={{color:"white"}}>不含税总价：￥222222</h4>
                    </PriceCss>

                </div>

                <video
                    className='videoCss'
                    muted={true}
                    controls
                    webkit-playsinline="true"   //禁止全螢幕播放
                    playsInline={true}   //禁止全螢幕播放
                    autoPlay={true}
                    x5-video-player-type='h5'
                    x5-video-player-fullscreen='true'
                    loop={true}>
                    <source type='video/mp4' src={require('../video/rzf.mp4')} />
                </video>
            </TopMessage>

            <div className="half">
                <div className="title1">
                    <h2 style={{color:"white"}}>标题1</h2>
                    <p className="types">
                        <Input type="number" placeholder="个"/>
                    </p>
                </div>

                <div className="title2">
                    <h2 style={{color:"white"}}>标题2</h2>
                    <p className="numbers">
                        <Input type="number" placeholder="㎡" />
                    </p>
                </div>
            </div>


            {/*<NavLink to='show'>*/}
            {/*    <div>*/}
            {/*        <img src={right}  alt="" />*/}
            {/*    </div>*/}
            {/*</NavLink>*/}
            <Footer>
                <button className='back' ><NavLink to="/sandtable">上一步</NavLink></button>
                <div className="line" />
                <button className='next'>下一步</button>
            </Footer>
        </Demo>
    );
}

export default Type;