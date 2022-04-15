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
import ShowCss from "./ShowCss";
import PriceCss from "../views/Price";


const Body = styled.div`
  color: white;
  position: absolute;
  width: 100%;
  height: 100%;
  background: #2b2f38;
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

      // 视频包装
      if(evt === '1') {
        dispacth(changePrices(42000))
      }else if (evt === '2') {
        dispacth(changePrices(48000))
      }else if (evt === '3') {
        dispacth(changePrices(0))
      }
      
  
    }




    return (
        <Body>
            <TopMessage>
                <div className='textCss'>
                    <div>{projectName}</div>

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

            <ShowCss>
                <h3 style={{color: "white"}}>区位模块</h3>
                <Collapse accordion onChange={(evt) => {addPrices(evt)}} >
                    <Panel key={1} header="视频包装式区位" onClick={() => {console.log('111111');}} >
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
            </ShowCss>

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
