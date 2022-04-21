import React, {useState} from "react";
import styled from "styled-components";
import '../index.less'
import Footer from "../components/Footer";
import TopMessage from "../components/TopMessage";
import {NavLink} from "react-router-dom";
import PriceCss from "../components/PriceCss";
import FontCss from "../components/FontCss";
import {useDispatch, useSelector} from "react-redux";
import {changeSandPrices} from "../store/actionCreators";
import {Button} from "antd";

import * as prices from '../store/prices'
import PriceSelect from "../components/Price";


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
    color: white;
    width: 316px;
    height: 46px;
    background: rgb(67, 71, 82);
    margin: 10px 0 10px 0;
    border-radius: 12px;
  }

  .changeButton {
    border: 1px solid;
  }
`


const Trim = () => {

    const projectName = useSelector(state => state.projectName)


    const dispatch = useDispatch()


    // 0: 360项目沙盘   1：VR项目沙盘  2：不需要项目沙盘
    const [state, setState] = useState(2)


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
                        <PriceSelect />
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
                    className={(state === 0) ? ('changeButton') : null}
                    onClick={() => {
                        changePrices(prices.shaPanPrice);
                        setState(0)
                    }}
                >
                    360°项目沙盘 + ￥{prices.shaPanPrice}
                </Button>
                <Button
                    className={(state === 1) ? ('changeButton') : null}
                    onClick={() => {
                        changePrices(prices.vrShaPanPrice);
                        setState(1);
                    }}
                >
                    VR项目沙盘 + ￥{prices.vrShaPanPrice}
                </Button>
                <Button
                    className={(state === 2) ? ('changeButton') : null}
                    onClick={() => {
                        changePrices(0);
                        setState(2);
                    }}
                >
                    不需要项目沙盘
                </Button>


            </Showing>

            <Footer>
                <button className='back'><NavLink to="/viewbird">上一步</NavLink></button>
                <div className="line"/>
                <button className='next'><NavLink to="/Landscape">下一步</NavLink></button>
            </Footer>
        </Table>
    );
}

export default Trim;