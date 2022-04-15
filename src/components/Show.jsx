import React, { forwardRef, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Collapse } from 'antd';
import styled from "styled-components";
import '../index.less'
import Every from "./Every";
import Footer from "../views/Footer";
import TopMessage from "../views/TopMessage";
import { useDispatch, useSelector, useStore } from "react-redux";
import { changePrices } from "../store/actionCreators";


// import './Show.css'


const Body = styled.div`
  color: white;
  position: absolute;
  width: 100%;
  height: 100%;
  background: #2b2f38;
`


const Showing = styled.div`
  position: absolute;
  width: 100%;
  height: 50%;
  bottom: 0;
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

const { Panel } = Collapse;


const Show = () => {

  const [videoPirces, setVideoPirces] = useState(0)
  const [vrPirces, setVrPirces] = useState(0)
  const [nonePirces, setNonePirces] = useState(0)

    // const projectName = useSelector((state) => {
    //     console.log("state", state)
    //     return state.projectName
    // })

    const projectName = useSelector(state => state.projectName)

    const totalPrices = useSelector(state => state.totalPrices)

    const dispacth = useDispatch()


    // const addPrices = (videoPircesParams, vrPircesParams, nonePircesParams) => {
    //   console.log('点击addPrices');
    //   setVideoPirces(videoPircesParams);
    //   setVrPirces(vrPircesParams);
    //   setNonePirces(nonePircesParams);

    //   dispacth(changePrices(videoPirces + vrPirces + nonePirces))
  
    // }
    
    const addPrices = (evt) => {
      console.log(evt);
      
  
    }




    return (
        <Body>
            <TopMessage>
                <div className='textCss'>
                    <div>{projectName}</div>

                    <div>{totalPrices}</div>
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
                <h3 style={{color: "white"}}>区位模块</h3>
                <Collapse accordion onChange={(evt) => {addPrices(evt)}}>
                    {/* 四万二 */}
                    <Panel key={1} header="视频包装式区位" collapsible={'header'} onChange={() => {console.log('1111');}} >
                        <Every/>
                    </Panel>
                    {/* 四万八 */}
                    <Panel key={2} header="VR无缝穿梭式区位" onClick={() => {addPrices(48000, 0, 0)}} >
                        <Every/>
                    </Panel>
                    {/* 0 */}
                    <Panel key={3} header="不需要区位展示" onClick={() => {addPrices(0, 0, 0)}} >
                        <Every/>
                    </Panel>
                </Collapse>
            </Showing>

            <Footer>
                <button className='back'>
                    <NavLink to='write'>
                        上一步
                    </NavLink>
                </button>
                <div className="line"/>
                <button className='next'>
                    <NavLink to='sandtable'>
                        下一步
                    </NavLink>
                </button>
            </Footer>

        </Body>
    );
}

export default Show;
