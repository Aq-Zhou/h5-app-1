import React, {useState} from "react";
import FontCss from "../components/FontCss";
import PriceCss from "../components/PriceCss";
import TopMessage from "../components/TopMessage";
import {useDispatch, useSelector} from "react-redux";
import Footer from "../components/Footer";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import Day from "../components/Day";
import ShowTime from "../components/Showtime";
import {Collapse} from "antd";
// import ShowCss from "../components/ShowCss";

import * as prices from '../store/prices'
import {changeNiaoPrices} from "../store/actionCreators";

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

  .collapseClass {
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: rgb(43, 47, 56);
    border: none;

    .ant-collapse-item {
      border: none;
      background-color: rgb(67, 71, 82);
      border-radius: 12px;

      &.ant-collapse-item-active {

        &.antPanel {
          border-radius: 12px;
          border: 1px solid white;
        }

        &.ant-collapse-no-arrow {
          
          &.antCo {
            border: 1px solid white;

            .ant-collapse-content-box {
              display: none;
            }
          }
        }
      }

      .ant-collapse-header {
        color: white;
      }

      .ant-collapse-content {
        background-color: rgb(43, 47, 56);
        border: none;
        border-radius: 12px;

        .ant-collapse-content-box {
          background-color: rgb(67, 71, 82);
          border-radius: 0 0 12px 12px;
          color: white;
        }
      }
    }
  }

  .ant-btn {
    border: none;
    width: 316px;
    height: 46px;
    background: rgb(67, 71, 82);
    margin: 10px 0 10px 0;
    border-radius: 12px;

  }

`


const Viewbird = () => {

    const {Panel} = Collapse;

    const projectName = useSelector(state => state.projectName)

    const totalPrice = useSelector(state => state.totalPrices)
    const totalPrices = Math.ceil(totalPrice * 1.13)

    const dispatch = useDispatch()

    const [state, setState] = useState(false)

    const [panel, setPanel] = useState(4)

    // const changePrices = (param) => {
    //     dispatch(changeNiaoPrices(param))
    // }

    const changeCollapse = (evt) => {
        console.log('changed', evt)

        // if (evt === '1') {
        //     setPanel(1)
        //     dispatch(changeNiaoPrices(0))
        // } else if (evt === '2') {
        //
        //     setPanel(2)
        //     dispatch(changeNiaoPrices(0))
        // } else if (evt === '3') {
        //
        //     setPanel(3)
        //     dispatch(changeNiaoPrices(0))
        // } else if (evt === '4') {
        //     setPanel(4)
        //     dispatch(changeNiaoPrices(0))
        // }

        if (evt === '3' || '4') {
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

        if (evt === '3') {
            dispatch(changeNiaoPrices(16000))
        } else {
            dispatch(changeNiaoPrices(0))
        }
    }


    return (
        <Table>
            <TopMessage>
                <div className='textCss'>
                    <FontCss>{projectName}</FontCss>

                    <PriceCss>
                        <h3 style={{color: "white"}}>含税总价(13%)</h3>
                        <h2 style={{color: "#ffb520"}}>￥{totalPrices}</h2>
                        <h4 style={{color: "white"}}>不含税总价：￥{totalPrice}</h4>
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
                <h3 style={{color: "white", textAlign: "center"}}>项目鸟瞰</h3>

                <Collapse defaultActiveKey={4} accordion onChange={changeCollapse} className='collapseClass'>

                    <Panel
                        className={(panel === 1 ? ("antPanel") : null)}
                        key={1}
                        header={`三维渲染全景鸟瞰(￥${prices.noXuShiPrice}~${prices.xuShiPrice})`}
                        showArrow={false}
                    >
                        <p style={{color: "white"}}>是否需要日夜景切换</p>
                        <Day/>
                    </Panel>

                    <Panel
                        className={(panel === 2 ? ("antPanel") : null)}
                        key={2}
                        header={`虚实结合全景鸟瞰(￥${prices.niaoKanPrice1}~${prices.niaoKanPrice3})`}
                        showArrow={false}
                    >
                        <p style={{color: "white"}}>请选择展示时段</p>
                        <ShowTime/>
                    </Panel>

                    <Panel
                        className={(state ? ("antCo") : null)}
                        key={3}
                        header={`CIM孪生城市(￥${prices.cimPrice})`}
                        showArrow={false}
                    >
                    </Panel>

                    <Panel
                        className={(panel === 4 ? ("antCo") : null)}
                        key={4}
                        header="不需要项目鸟瞰"
                        showArrow={false}
                    >
                    </Panel>
                </Collapse>


            </Showing>

            <Footer>
                <button className='back'><NavLink to="/show">上一步</NavLink></button>
                <div className="line"/>
                <button className='next'><NavLink to="/sandtable">下一步</NavLink></button>
            </Footer>
        </Table>

    )
}


export default Viewbird;