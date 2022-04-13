import React from "react";
import {Collapse} from 'antd';
import styled from "styled-components";
import '../index.css'
import Every from "./Every";


import './Show.css'


const Body = styled.div`
  color: white;
  position: absolute;
  width: 100%;
  height: 100%;
  background: #2b2f38;
`

const Showing = styled.section`
  position: absolute;
  width: 100%;
  height: 50%;
  bottom: 0;
  overflow: auto;
`

const TopMessage = styled.div`
  width: 100%;
  
  .textCss {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  
  .videocss {
    border: 1px solid white;
    border-radius: 10px;
    display: flex;
    width: 200px;
    height: 50%;
    margin: 0px auto;
  }
  
`

const {Panel} = Collapse;

// const text = `
//   A dog is a type of domesticated animal.
//   Known for its loyalty and faithfulness,
//   it can be found as a welcome guest in many households across the world.
// `;


function Show() {
    return (
        <Body>
            <TopMessage>

                <div className='textCss' >
                    <div>文字框</div>
                    <div>价钱</div>
                </div>
                <video
                    className='videocss'
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
        </Body>
    );
}

export default Show;
