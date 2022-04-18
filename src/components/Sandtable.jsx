import React, {useState} from "react";
import styled from "styled-components";
import '../index.less'
import Footer from "../views/Footer";
import TopMessage from "../views/TopMessage";
import {NavLink} from "react-router-dom";
import PriceCss from "../views/Price";
import FontCss from "../views/FontCss";
import {useDispatch, useSelector} from "react-redux";
import {changeSandPrices} from "../store/actionCreators";


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

  //.ant-btn-round.ant-btn-lg {
  //  background: #434752;
  //  border: none;
  //}
  //display: flex;
  //flex-direction: column;
  //align-items: center;
  
  
  .-button, .changeButton {
    color: white;
    width: 316px;
    height: 46px;
    border: none;
    border-radius: 12px;
    background: #434752;
    margin: 30px 0 60px 0;

  }
  .changeButton {
    border: 1px solid;
  }
  .-button {
  }
  
`


const Trim = () => {

    const projectName = useSelector(state => state.projectName)

    const totalPrices = useSelector(state => state.totalPrices)

    const dispatch = useDispatch()

    // 1点击了
    // 0就是未点击
    const [state, setState] = useState({btn1: true, btn2: false})


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
                <h3 style={{color: "white"}}>项目沙盘</h3>

                <button
                    className={(state.btn1 === true) ? ('changeButton') : ('-button')}
                    onClick={() => {
                        changePrices(8000);
                        if (state.btn1) {

                        }
                        setState({...state, btn1: !(state.btn1), btn2: state.btn1})
                    }}
                >
                    360°项目沙盘
                </button>

                <button
                    className={(state.btn2 === true) ? ('changeButton') : ('-button')}
                    onClick={() => {
                        changePrices(16000);
                        setState({...state, btn2: !(state.btn2), btn1: state.btn2});
                    }}
                >
                    VR项目沙盘
                </button>


            </Showing>

            <Footer>
                <button className='back'><NavLink to="/show">上一步</NavLink></button>
                <div className="line"/>
                <button className='next'><NavLink to="/Landscape">下一步</NavLink></button>
            </Footer>
        </Table>
    );
}

export default Trim;