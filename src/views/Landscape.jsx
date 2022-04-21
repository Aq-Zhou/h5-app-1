import React, {memo, useState} from 'react'
import styled from "styled-components";
import '../index.less'
import Footer from "../components/Footer";
import TopMessage from "../components/TopMessage";
import {NavLink} from "react-router-dom";
import PriceCss from "../components/PriceCss";
import FontCss from "../components/FontCss";
import {useDispatch, useSelector} from "react-redux";
import {changeQuanPrices} from "../store/actionCreators";
import {InputNumber} from 'antd';
import {Collapse} from 'antd';

import * as prices from '../store/prices'

import 'antd/dist/antd.css';
import Showing from "../components/Showing";
import PriceSelect from "../components/Price";

const Table = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #2b2f38;
`

const {Panel} = Collapse;

const Landscape = memo(() => {
    const projectName = useSelector(state => state.projectName)


    const dispatch = useDispatch()

    // 点击的按钮
    const [state, setState] = useState(false)

    //
    const [panel, setPanel] = useState(3)

    function onInputNumberManChange(value) {
        console.log('changed', value);
        let temp = value * prices.quanJingManYouPrice
        dispatch(changeQuanPrices(temp))
    }

    function onInputNumberLuChange(value) {
        console.log('changed', value);
        let temp = value * prices.quanJingLuJingPrice
        dispatch(changeQuanPrices(temp))
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

        dispatch(changeQuanPrices(0))

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
                <h3 style={{color: "white"}}>景观漫游</h3>

                <Collapse accordion defaultActiveKey={3} onChange={changeCollapse} className='collapseClass'>
                    <Panel
                        className={panel === 1 ? 'antPanel' : null}
                        header={`720°全景漫游(￥${prices.quanJingManYouPrice}/点)`}
                        key={1}
                        showArrow={false}
                    >
                        <p>请填写漫游点数</p>
                        {panel === 1 ?
                            <InputNumber min={1} max={20} defaultValue={0} onChange={onInputNumberManChange}/> : null}
                    </Panel>

                    <Panel
                        className={panel === 2 ? 'antPanel' : null}
                        header={`全景路径漫游(￥${prices.quanJingLuJingPrice}/条)`}
                        key={2}
                        showArrow={false}
                    >
                        <p>请填写漫游条数(一条100米)</p>
                        {panel === 2 ?
                            <InputNumber min={1} max={20} defaultValue={0} onChange={onInputNumberLuChange}/> : null}
                    </Panel>
                    <Panel
                        className={panel === 3 ? 'antCo' : null}
                        header="不需要景观漫游"
                        key={3}
                        showArrow={false}
                    >
                    </Panel>
                </Collapse>

            </Showing>

            <Footer>
                <button className='back'><NavLink to="/Sandtable">上一步</NavLink></button>
                <div className="line"/>
                <button className='next'><NavLink to="/Housetype">下一步</NavLink></button>
            </Footer>
        </Table>
    )
})

export default Landscape;



