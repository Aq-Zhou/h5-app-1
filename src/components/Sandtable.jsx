import React, {useState} from "react";
import {Button } from 'antd';
import styled from "styled-components";
import '../index.less'
import Footer from "../views/Footer";
import TopMessage from "../views/TopMessage";
import {NavLink} from "react-router-dom";
import PriceCss from "../views/Price";
import FontCss from "../views/FontCss";
import {useDispatch, useSelector} from "react-redux";
import {changeSandPrices} from "../store/actionCreators";


const Table = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #2b2f38;
`

const Showing = styled.div`
  position: absolute;
  width: 100%;
  height: 40%;
  bottom: 70px;
  overflow: auto;

  .ant-collapse {
    border: none;
    background: #282c34;

    .ant-collapse-header {
      border: none;
      color: white;
    }

    .ant-collapse-item {
      background: #434752;
      border-radius: 32px;
      border: 22px solid #2b2f38;
    }

    .ant-collapse-content {
      border: none;
      background: #2b2f38;

      .ant-radio-wrapper, .ant-checkbox-wrapper {
        color: white;
      }
    }
  }
`


const Trim = () => {

    const projectName = useSelector(state => state.projectName)

    const totalPrices = useSelector(state => state.totalPrices)

    const dispatch = useDispatch()

    //1点击了
    // 0就是未点击
    const [state, setState] =useState({but1:0,but2:0})


    const changePrices = (param) => {
        // 360报价8000
        // VR报价 16000
        dispatch(changeSandPrices(param))


    }


    return (
        <Table>
            <TopMessage>
                <div className='textCss'>
                    <FontCss>{projectName}</FontCss>

                    <PriceCss>
                        <h3 style={{color:"white"}}>含税总价(13%)</h3>
                        <h2 style={{color:"#ffb520"}}>￥{totalPrices * 1.3}</h2>
                        <h4 style={{color:"white"}}>不含税总价：￥{totalPrices}</h4>
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

            <Showing>
                <h3 style={{color: "white"}}>项目沙盘</h3>

                    <Button
                        className={(state.but1 === 1)?(''):null}
                        type="primary" shape="round"
                        onClick={() => {changePrices(8000); setState({...state, but1: 1}) }}
                        size={"large"}>
                            360°项目沙盘
                    </Button>
                    <Button className={(state.but2 === 1)?(''):('')} type="primary" shape="round" onClick={() => {changePrices(16000)}}  size={"large"}>VR项目沙盘</Button>


            </Showing>

            <Footer>
                <button className='back'><NavLink to="/show">上一步</NavLink></button>
                <div className="line"/>
                <button className='next'><NavLink to="/Landscape">下一步</NavLink></button>
            </Footer>
        </Table>
    );
}

export default Trim;