import React, {memo, useState} from "react";
import {NavLink} from "react-router-dom";
import {Collapse, InputNumber, Modal} from 'antd';
import styled from "styled-components";
import '../index.less'
import Footer from "../components/Footer";
import TopMessage from "../components/TopMessage";
import {useDispatch, useSelector} from "react-redux";
import PriceCss from "../components/Price";
import FontCss from "../components/FontCss";
import Showing from "../components/Showing";
import * as prices from "../store/prices";
import {changeJianPrices} from "../store/actionCreators";

const Table = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #2b2f38;
`
const {Panel} = Collapse;

const HouseType = memo(() => {

    const projectName = useSelector(state => state.projectName)

    const totalPrices = useSelector(state => state.totalPrices)

    const dispatch = useDispatch()

    const [state, setState] = useState(false)

    const [panel, setPanel] = useState(4);

    function onInputNumberQuanChange(value) {
        let temp = value * prices.quanJingHousePrice
        dispatch(changeJianPrices(temp))
    }

    function onInputNumberPaiChange(value) {
        let temp = value * prices.shiPaiHousePrice
        dispatch(changeJianPrices(temp))
    }

    function onInputNumberVrmChange(value) {
        let temp = value * prices.vrHpousePrice  // 平米数单价
        dispatch(changeJianPrices(temp))
    }

    function onInputNumberVrChange(value) {
        let temp = value * prices.xuShiJingPrice // 窗外景观点数单价
        dispatch(changeJianPrices(temp))
    }

    function changeCollapse(evt) {
        if (evt === '4') {
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
            case '4':
                setPanel(4);
                break;
            default:
                break;
        }
        dispatch(changeJianPrices(0))
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
                <h3 style={{color: "white"}}>户型鉴赏</h3>

                <Collapse accordion onChange={changeCollapse} className='collapseClass'>
                    <Panel
                        className={panel === 1 ? 'antPanel' : null}
                        header={`720°三维全景户型漫游(￥${prices.quanJingHousePrice}/条)`}
                        key="1"
                        showArrow={false}
                    >
                        <p>请填写点数</p>
                        {panel === 1 ?
                            <InputNumber min={1} max={20} defaultValue={0} onChange={onInputNumberQuanChange}/> : null}
                    </Panel>
                    <Panel
                        className={panel === 2 ? 'antPanel' : null}
                        header={`720°全景实拍户型漫游(￥${prices.shiPaiHousePrice}/条)`}
                        key="2"
                        showArrow={false}
                    >
                        <p>请填写点数</p>
                        {panel === 2 ?
                            <InputNumber min={1} max={20} defaultValue={0} onChange={onInputNumberPaiChange}/> : null}
                    </Panel>
                    <Panel className={panel === 3 ? 'antPanel' : null}
                           header={`VR户型套装(￥${prices.vrHpousePrice}/㎡) / (￥${prices.xuShiJingPrice}/张)`}
                           key="3"
                           showArrow={false}
                    >
                        <p>请填写平米数</p>
                        {panel === 3 ? <InputNumber min={1} defaultValue={0} onChange={onInputNumberVrmChange}/> : null}
                        <p>请填写窗外景观点数</p>
                        {panel === 3 ?
                            <InputNumber min={1} max={20} defaultValue={0} onChange={onInputNumberVrChange}/> : null}
                    </Panel>
                    <Panel
                        className={state ? 'antCo' : null}
                        header="不需要户型展示"
                        key="4"
                        showArrow={false}
                    >

                    </Panel>
                </Collapse>
            </Showing>

            <Footer>
                <button className='back'>
                    <NavLink to='landscape'>
                        上一步
                    </NavLink>
                </button>
                <div className="line"/>
                <button className='next'>
                    <NavLink to='gallery'>
                        下一步
                    </NavLink>
                </button>
            </Footer>

        </Table>
    );
})

export default HouseType;
