import React from "react";
import {Collapse} from 'antd';
import styled from "styled-components";
import '../index.css'
import Every from "./Every";
import Footer from "../views/Footer";

import './Show.css'


const Body = styled.div`
  color: white;
  position: absolute;
  width: 100%;
  height: 100%;
  background: #2b2f38;
`
const TopMessage = styled.div`
  width: 100%;
  
  .textCss {
    display: flex;
    height: 110px;
    width: 100%;
    justify-content: space-between;
  }
  
  .videoCss {
    border: 1px solid white;
    border-radius: 10px;
    display: flex;
    width: 230px;
    height: 50%;
    margin: 0 auto;
  }
`

const Showing = styled.div`
  position: absolute;
  width: 100%;
  height: 50%;
  bottom: 0;
  overflow: auto;
`

const {Panel} = Collapse;


function Show() {
    return (
        <Body>
            <TopMessage>
                <div className='textCss' >
                    <div>文字框</div>
                    <div>价钱</div>
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

            <Showing>
                <h3 style={{color: "white"}}>项目鸟瞰</h3>
                <Collapse accordion>
                    <Panel key={1} header="视频包装式区位" className="site-collapse-custom-panel">
                        <Every/>
                    </Panel>
                    <Panel key={2} header="VR无缝穿梭式区位" className="site-collapse-custom-panel">
                        <Every/>
                    </Panel>
                    <Panel key={3} header="不需要区位展示" className="site-collapse-custom-panel">
                        <Every/>
                    </Panel>
                </Collapse>
            </Showing>

            <Footer>
                <button className='back'>上一步</button>
                <div className="line" />
                <button className='next'>下一步</button>
            </Footer>

        </Body>
    );
}

export default Show;
