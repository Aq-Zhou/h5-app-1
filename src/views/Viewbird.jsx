import React, {useState} from "react";
import FontCss from "./FontCss";
import PriceCss from "./Price";
import TopMessage from "./TopMessage";
import {useDispatch, useSelector} from "react-redux";
import Footer from "./Footer";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import Day from "../components/Day";
import ShowTime from "../components/Showtime";
import {Collapse} from "antd";
import ShowCss from "../components/ShowCss";
import {changeNiaoPrices} from "../store/actionCreators";

import * as prices from '../store/prices'

const Table = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #2b2f38;

  .change {
    border: 1px solid;
  }

`

const Viewbird = () => {

    const {Panel} = Collapse;

    const projectName = useSelector(state => state.projectName);

    const totalPrices = useSelector(state => state.totalPrices);

    const dispatch = useDispatch()

    const [state, setState] = useState(3)

    const changeCollapse = (evt) => {
        console.log(evt)

        // 项目鸟瞰
        if (evt === '0') {
        } else if (evt === '1') {
        } else if (evt === '2') {
        } else if (evt === '3') {
        }
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

            <ShowCss>
                <h3 style={{color: "white", textAlign: "center"}}>项目鸟瞰</h3>

                <Collapse accordion onChange={changeCollapse}>

                    <Panel
                        className={(state === 0 ? ("change") : null)}
                        key={1}
                        header={`三维渲染全景鸟瞰(￥${prices.noXuShiPrice}~${prices.xuShiPrice})`}
                        showArrow={false}
                    >
                        <p style={{color: "white"}}>是否需要日夜景切换</p>
                        <Day/>
                    </Panel>

                    <Panel
                        className={(state === 1 ? ("change") : null)}
                        key={2}
                        header={`虚实结合全景鸟瞰(￥${prices.niaoKanPrice1}~${prices.niaoKanPrice3})`}
                        showArrow={false}
                    >
                        <p style={{color: "white"}}>请选择展示时段</p>
                        <ShowTime/>
                    </Panel>


                    <Panel
                        className={(state === 2 ? ("change") : null)}
                        key={3}
                        header={`CIM孪生城市(￥${prices.cimPrice})`}
                        showArrow={false}
                        collapsible='disabled'
                    >

                    </Panel>

                    <Panel
                        className={(state === 3 ? ("change") : null)}
                        key={4}
                        header="不需要项目鸟瞰"
                        showArrow={false}
                        collapsible='disabled'
                    >

                    </Panel>

                </Collapse>

            </ShowCss>

            <Footer>
                <button className='back'><NavLink to="/show">上一步</NavLink></button>
                <div className="line"/>
                <button className='next'><NavLink to="/sandtable">下一步</NavLink></button>
            </Footer>
        </Table>

    )
}


export default Viewbird;