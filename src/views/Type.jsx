import React from "react";
import {Input} from 'antd';
import styled from "styled-components";
import Footer from "../components/Footer";
import TopMessage from "../components/TopMessage";
import {NavLink} from "react-router-dom";
import PriceCss from "../components/PriceCss";
import FontCss from "../components/FontCss";
import {useSelector} from "react-redux";
import PriceSelect from "../components/Price";


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
    transform: translate(-50%, -50%);
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
    const projectName = useSelector(state => state.projectName)



    return (
        <Demo>
            <TopMessage>
                <div className='textCss'>
                    <FontCss>{projectName}</FontCss>

                    <PriceCss>
                        <PriceSelect />
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
                    <source type='video/mp4' src={require('../video/rzf.mp4')}/>
                </video>
            </TopMessage>

            <div className="half">
                <div className="title1">
                    <h2 style={{color: "white"}}>标题1</h2>
                    <p className="types">
                        <Input type="number" placeholder="个"/>
                    </p>
                </div>

                <div className="title2">
                    <h2 style={{color: "white"}}>标题2</h2>
                    <p className="numbers">
                        <Input type="number" placeholder="㎡"/>
                    </p>
                </div>
            </div>

            <Footer>
                <button className='back'><NavLink to="/sandtable">上一步</NavLink></button>
                <div className="line"/>
                <button className='next'><NavLink to="/housetype">下一步</NavLink></button>
            </Footer>
        </Demo>
    );
}

export default Type;