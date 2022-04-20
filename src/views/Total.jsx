import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {Checkbox, Button} from 'antd';
import styled from "styled-components";
import '../index.less'
import Footer from "../components/Footer";
import TopMessage from "../components/TopMessage";
import {useDispatch, useSelector} from "react-redux";
// import {changeQuWeiPrices} from "../store/actionCreators";
import PriceCss from "../components/PriceCss";
import FontCss from "../components/FontCss";

// import * as prices from '../store/prices'

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

  display: flex;
  flex-direction: column;
  align-items: center;


  .ant-btn {
    border: none;
    width: 200px;
    height: 46px;
    background: rgb(67, 71, 82);
    margin: 10px 0 10px 0;
    border-radius: 12px;
  }

  //.change-btn {
  //  border: 1px solid;
  //}
`

const Total = () => {


    const projectName = useSelector(state => state.projectName)

    const totalPrices = useSelector(state => state.totalPrices)

    // const dispatch = useDispatch()

    //0：视频  1：VR  2：不需要
    const [state, setState] = useState(1)

    // const changePrices = (param) => {
    //     dispatch(changeQuWeiPrices(param))
    // }


    return (
        <Table>
            <TopMessage>
                <div className='textCss'>
                    <FontCss>{projectName}</FontCss>

                    <PriceCss>
                        <h3 style={{color: "white"}}>含税总价(13%)</h3>
                        <h2 style={{color: "#ffb520"}}>￥{totalPrices * 1.3}</h2>
                        <h4 style={{color: "white"}}>不含税总价：￥{totalPrices}</h4>
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
                <h3 style={{color: "white"}}>选择需要进行展示的硬件载体</h3>

                <Checkbox defaultChecked={true}>
                    <Button
                        className={(state === 1) ? ("change-btn") : null}
                        type="primary"
                        onClick={() => {
                            // changePrices(prices.videoPrice)
                            setState(1)
                        }}
                    >
                        大屏端(PC端)
                    </Button>
                </Checkbox>

                <Checkbox>
                    <Button
                        className={(state === 2) ? ("change-btn") : null}
                        type="primary"
                        onClick={() => {
                            // changePrices(prices.vrPrice)
                            setState(2)
                        }}
                    >
                        iPad端
                    </Button>
                </Checkbox>

                <Checkbox>
                    <Button
                        className={(state === 3) ? ("change-btn") : null}
                        type="primary"
                        onClick={() => {
                            // changePrices(0)
                            setState(3)
                        }}
                    >
                        手机端（H5端）
                    </Button>
                </Checkbox>

            </Showing>

            <Footer>
                <button className='back'>
                    <NavLink to='gallery'>
                        上一步
                    </NavLink>
                </button>
                <div className="line"/>
                <button className='next'>
                    <NavLink to='final'>
                        下一步
                    </NavLink>
                </button>
            </Footer>

        </Table>
    );
}

export default Total;