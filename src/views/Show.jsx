import React, {useState} from "react";
import {NavLink, withRouter} from "react-router-dom";
import {Button} from 'antd';
import styled from "styled-components";
import '../index.less'
import Footer from "../components/Footer";
import TopMessage from "../components/TopMessage";
import {useDispatch, useSelector} from "react-redux";
import {changeQuWeiPrices} from "../store/actionCreators";
import PriceCss from "../components/PriceCss";
import FontCss from "../components/FontCss";
import PriceSelect from "../components/Price";

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

    const dispatch = useDispatch()

    // 默认不需要
    const [state, setState] = useState(3)

    const changePrices = (param) => {
        dispatch(changeQuWeiPrices(param))
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
                <h3 style={{color: "white"}}>区位模块</h3>

                <Button
                    className={(state === 1) ? ("change-btn") : null}
                    type="primary"
                    onClick={() => {
                        changePrices(prices.videoPrice)
                        setState(1)
                    }}
                >
                    视频包装式区位 + ￥{prices.videoPrice}
                </Button>
                <Button
                    className={(state === 2) ? ("change-btn") : null}
                    type="primary"
                    onClick={() => {
                        changePrices(prices.vrPrice)
                        setState(2)
                    }}
                >
                    VR无缝穿梭式区位 + ￥{prices.vrPrice}
                </Button>
                <Button
                    className={(state === 3) ? ("change-btn") : null}
                    type="primary"
                    onClick={() => {
                        changePrices(0)
                        setState(3)
                    }}
                >
                    不需要区位展示
                </Button>
            </Showing>

            <Footer>
                <button className='back'>
                    <NavLink to='write'>
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

export default withRouter(Show);
