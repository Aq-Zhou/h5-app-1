import React from "react";
import {NavLink} from "react-router-dom";
import {Collapse} from 'antd';
import styled from "styled-components";
import '../index.less'
import Every from "./Every";
import Footer from "../views/Footer";
import TopMessage from "../views/TopMessage";
import {useSelector} from "react-redux";
import ShowCss from "./ShowCss";
import PriceCss from "../views/Price";


const Body = styled.div`
  color: white;
  position: absolute;
  width: 100%;
  height: 100%;
  background: #2b2f38;
`




const {Panel} = Collapse;


function Show() {

    // const projectName = useSelector((state) => {
    //     console.log("state", state)
    //     return state.projectName
    // })

    const projectName = useSelector(state => state.projectName)



    return (
        <Body>
            <TopMessage>
                <div className='textCss'>
                    <div>{projectName}</div>

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
                    <source type='video/mp4' src={require('../video/rzf.mp4')}/>
                </video>
            </TopMessage>

            <ShowCss>
                <h3 style={{color: "white"}}>项目鸟瞰</h3>
                <Collapse accordion>
                    <Panel key={1} header="视频包装式区位" >
                        <Every/>
                    </Panel>
                    <Panel key={2} header="VR无缝穿梭式区位">
                        <Every/>
                    </Panel>
                    <Panel key={3} header="不需要区位展示">
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
