import React, {Component} from "react";
import {Collapse} from 'antd';
import styled from "styled-components";
import '../index.less'
import Footer from "../views/Footer";
import TopMessage from "../views/TopMessage";
import Sand from "./Sand";
import {NavLink} from "react-router-dom";


const Table = styled.div`
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

    .ant-collapse-header{
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
      .ant-radio-wrapper, .ant-checkbox-wrapper{
        color: white;
      }

    }
  }
`

const { Panel } = Collapse;

function Trim() {
    return (
        <Table>
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
                <h3 style={{color: "white"}}>景观漫游</h3>
                <Collapse accordion>
                    <Panel key={1} header="360°项目沙盘" className="site-collapse-custom-panel">
                        <Sand/>
                    </Panel>
                    <Panel key={2} header="VR项目沙盘" className="site-collapse-custom-panel">
                        <Sand/>
                    </Panel>
                </Collapse>
            </Showing>

            <Footer>
                <button className='back' ><NavLink to="/show">上一步</NavLink></button>
                <div className="line" />
                <button className='next'><NavLink to="/type">下一步</NavLink></button>
            </Footer>
        </Table>
    );
}

export default Trim;