import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {Button} from 'antd';
import styled from "styled-components";
import '../index.less'
import Footer from "../views/Footer";
import TopMessage from "../views/TopMessage";
import {useDispatch, useSelector} from "react-redux";
import {changeQuWeiPrices} from "../store/actionCreators";
import PriceCss from "../views/Price";
import FontCss from "../views/FontCss";

import * as prices from '../store/prices'

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
    width: 316px;
    height: 46px;
    background: rgb(67, 71, 82);
    margin: 10px 0 10px 0;
    border-radius: 12px;
  }

  .change-btn {
    border: 1px solid;
  }
`

const Show = () => {


    const projectName = useSelector(state => state.projectName)

    const totalPrices = useSelector(state => state.totalPrices)

    const dispatch = useDispatch()

    //0：视频  1：VR  2：不需要
    const [state, setState] = useState(2)

    const changePrices = (param) => {
        dispatch(changeQuWeiPrices(param))
    }

    // const addPrices = (evt) => {
    //   console.log(evt);
    //
    //   // 视频包装
    //   // if (evt === '1') {
    //   //   setState('1')
    //   //   dispatch(changeQuWeiPrices(42000))
    //   //   dispatch(changeNiaoPrices(0))
    //   // } else if (evt === '2') {
    //   //   setState('2')
    //   //   dispatch(changeQuWeiPrices(48000))
    //   //   dispatch(changeNiaoPrices(0))
    //   // } else if (evt === '3') {
    //   //   setState('3')
    //   //   dispatch(changeQuWeiPrices(0))
    //   //   dispatch(changeNiaoPrices(0))
    //   // }
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
                <h3 style={{color: "white"}}>区位模块</h3>

                <Button
                    className={(state ===  0) ? ("change-btn") : null}
                    type="primary"
                    onClick={() => {
                        changePrices(prices.videoPrice)
                        setState(0)
                    }}
                >
                    视频包装式区位(￥{prices.videoPrice})
                </Button>
                <Button
                    className={(state === 1) ? ("change-btn") : null}
                    type="primary"
                    onClick={() => {
                        changePrices(prices.vrPrice)
                        setState(1)
                    }}
                >
                    VR无缝穿梭式区位(￥{prices.vrPrice})
                </Button>
                <Button
                    className={(state === 2) ? ("change-btn") : null}
                    type="primary"
                    onClick={() => {
                        changePrices(0)
                        setState(2)
                    }}
                >
                    不需要区位展示
                </Button>
            </Showing>

            <Footer>
                <button className='back'>
                    <NavLink to='write' >
                        上一步
                    </NavLink>
                </button>
                <div className="line"/>
                <button className='next'>
                    <NavLink to='viewbird'>
                        下一步
                    </NavLink>
                </button>
            </Footer>

        </Table>
    );
}

export default Show;
