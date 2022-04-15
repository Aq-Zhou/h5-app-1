import React from "react";
import {NavLink} from "react-router-dom";
import {Collapse} from 'antd';
import styled from "styled-components";
import '../index.less'
import Footer from "../views/Footer";
import TopMessage from "../views/TopMessage";
import {useSelector} from "react-redux";
import ShowCss from "../components/ShowCss";
import PriceCss from "./Price";
import FontCss from "./FontCss";

const Body = styled.div`
  color: white;
  position: absolute;
  width: 100%;
  height: 100%;
  background: #2b2f38;
`

const {Panel} = Collapse;


function HouseType() {

    // const projectName = useSelector((state) => {
    //     console.log("state", state)
    //     return state.projectName
    // })

    const projectName = useSelector(state => state.projectName)



    return (
        <Body>
            <TopMessage>
                <div className='textCss'>
                    <FontCss>{projectName}</FontCss>

                    <PriceCss>
                        <h3 style={{color:"white"}}>含税总价(13%)</h3>
                        <h2 style={{color:"#ffb520"}}>￥23132</h2>
                        <h4 style={{color:"white"}}>不含税总价：￥2222</h4>
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
                <h3 style={{color: "white"}}>户型鉴赏</h3>
                <Collapse accordion>
                    <Panel key={1} header="720°三维全景户型漫游" />

                    <Panel key={2} header="720°全景实拍户型漫游" />

                    <Panel key={3} header="VR户型套餐" />

                    <Panel key={4} header="不需要户型展示" />

                </Collapse>
            </ShowCss>

            <Footer>
                <button className='back'>
                    <NavLink to='type'>
                        上一步
                    </NavLink>
                </button>
                <div className="line"/>
                <button className='next'>
                    <NavLink to='type-1'>
                        下一步
                    </NavLink>
                </button>
            </Footer>

        </Body>
    );
}

export default HouseType;
