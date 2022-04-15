import React from "react";
import {Collapse, Button} from 'antd';
import styled from "styled-components";
import '../index.less'
import Footer from "../views/Footer";
import TopMessage from "../views/TopMessage";
import Sand from "./Sand";
import {NavLink} from "react-router-dom";
import PriceCss from "../views/Price";
import FontCss from "../views/FontCss";


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

const {Panel} = Collapse;

function Trim() {

  const changePrice =(e) => {
    console.log(e);
  }
    return (
        <Table>
            <TopMessage>
                <div className='textCss'>
                    <FontCss>文字框</FontCss>


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

            <Showing>
                <h3 style={{color: "white"}}>景观漫游</h3>

                <Button type="primary" shape="round" onClick={(e) => {changePrice(e)}} size={'large'}>360°项目沙盘</Button>
                <Button type="primary" shape="round"  size={'large'}>VR项目沙盘</Button>
                {/* <Collapse accordion>
                    <Panel key={1} header="360°项目沙盘" className="site-collapse-custom-panel">
                        <Sand/>
                    </Panel>
                    <Panel key={2} header="VR项目沙盘" className="site-collapse-custom-panel">
                        <Sand/>
                    </Panel>
                </Collapse> */}
            </Showing>

            <Footer>
                <button className='back'><NavLink to="/show">上一步</NavLink></button>
                <div className="line"/>
                <button className='next'><NavLink to="/type">下一步</NavLink></button>
            </Footer>
        </Table>
    );
}

export default Trim;