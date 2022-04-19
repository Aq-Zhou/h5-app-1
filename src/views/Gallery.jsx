import React, {memo, useState} from 'react'
import styled from "styled-components";
import '../index.less'
import Footer from "../components/Footer";
import TopMessage from "../components/TopMessage";
import {NavLink} from "react-router-dom";
import PriceCss from "../components/PriceCss";
import FontCss from "../components/FontCss";
import {useDispatch, useSelector} from "react-redux";
import {changeYangPrices} from "../store/actionCreators";
import {InputNumber} from 'antd';
import {Collapse} from 'antd';
import * as prices from '../store/prices'
import 'antd/dist/antd.css';
import Showing from "../components/Showing";


const Table = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #2b2f38;
`

const {Panel} = Collapse;

const Gallery = memo(() => {
    const projectName = useSelector(state => state.projectName)

    const totalPrices = useSelector(state => state.totalPrices)

    const dispatch = useDispatch()

    // 点击的按钮
    const [state, setState] = useState(false)

    //
    const [panel, setPanel] = useState(4)

    function onInputNumberSdChange(value) {
        console.log('changed', value);
        let temp = value * prices.sanWeiPrice
        dispatch(changeYangPrices(temp))

    }

    function onInputNumberXsChange(value) {
        console.log('changed', value);
        let temp = value * prices.xuShiJingPrice
        dispatch(changeYangPrices(temp))
    }

    function changeCollapse(evt) {
        console.log('changed', evt);
        if (evt === '3') {
            setState(true)
        } else {
            setTimeout(() => setState(false), 0)
        }

        switch (evt) {
            case '1':
                setPanel(1);
                break;
            case '2':
                setPanel(2);
                break;
            case '3':
                setPanel(3);
                break;
            default:
                break;
        }

        dispatch(changeYangPrices(0))

    }

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
                <h3 style={{color: "white"}}>阳台景观</h3>

                <Collapse accordion onChange={changeCollapse} className='collapseClass'>
                    <Panel
                        className={panel === 1 ? 'antPanel' : null}
                        header={`三维渲染景观(￥${prices.sanWeiPrice}/点)`}
                        key="1"
                        showArrow={false}
                    >
                        <p>请填写景观点数</p>
                        {panel === 1 ?
                            <InputNumber min={1} max={20} defaultValue={0} onChange={onInputNumberSdChange}/> : null}
                    </Panel>

                    <Panel
                        className={panel === 2 ? 'antPanel' : null}
                        header={`虚实结合景观(￥${prices.xuShiJingPrice}/点)`}
                        key="2"
                        showArrow={false}
                    >
                        <p>请填写景观点数</p>
                        {panel === 2 ?
                            <InputNumber min={1} max={20} defaultValue={0} onChange={onInputNumberXsChange}/> : null}
                    </Panel>
                    <Panel
                        className={state ? 'antCo' : null}
                        header="不需要展示窗外景观"
                        key="3"
                        showArrow={false}
                    >
                    </Panel>
                </Collapse>

            </Showing>

            <Footer>
                <button className='back'><NavLink to="/landscape">上一步</NavLink></button>
                <div className="line"/>
                <button className='next'><NavLink to="/total">下一步</NavLink></button>
            </Footer>
        </Table>
    )
})

export default Gallery;



