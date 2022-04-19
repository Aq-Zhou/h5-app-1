import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {Button, Collapse, InputNumber, Modal} from 'antd';
import styled from "styled-components";
import '../index.less'
import Footer from "../views/Footer";
import TopMessage from "../views/TopMessage";
import {useSelector} from "react-redux";
import ShowCss from "../components/Showing";
import PriceCss from "./Price";
import FontCss from "./FontCss";
import Showing from "../components/Showing";


const Body = styled.div`
  color: white;
  position: absolute;
  width: 100%;
  height: 100%;
  background: #2b2f38;
`


function HouseType() {

    // const projectName = useSelector((state) => {
    //     console.log("state", state)
    //     return state.projectName
    // })


    const [state,setState] = useState()

    const projectName = useSelector(state => state.projectName)

    const totalPrices = useSelector(state => state.totalPrices)

    const [isModalVisible, setIsModalVisible] = useState(false);


    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        // dispatch();

    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    function onChange(value) {
        console.log('changed', value);
    }


    return (
        <Body>
            <TopMessage>
                <div className='textCss'>
                    <FontCss>{projectName}</FontCss>

                    <PriceCss>
                        <h3 style={{color:"white"}}>含税总价(13%)</h3>
                        <h2 style={{color:"#ffb520"}}>￥{totalPrices * 1.3}</h2>
                        <h4 style={{color:"white"}}>不含税总价：￥{totalPrices}</h4>
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
                <>
                    <Button type="primary" onClick={() => { showModal(); setState(1) }}>
                        720°三维全景户型漫游
                    </Button>
                    <Button type="prmary" onClick={()=> {showModal(); setState(2)}}>
                        720°全景实拍户型漫游
                    </Button>
                    <Button type="primary" onClick={() => { showModal(); setState(2) }}>
                        VR户型套装
                    </Button>
                    <Button type="primary" >
                        不需要户型展示
                    </Button>
                    {
                        state === 1 ? (
                                <Modal title="输入720°三维漫游点数" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                    <InputNumber
                                        min={0}
                                        defaultValue={0}
                                        onChange={onChange}/> 点
                                </Modal>)
                            : null
                    }
                    {
                        state === 2 ? (
                                <Modal title="输入720°全景实拍漫游点数" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                    <InputNumber
                                        min={0}
                                        defaultValue={0}
                                        onChange={onChange} /> 点
                                </Modal>)
                            : null
                    }
                    {
                        state === 3 ? (
                                <Modal title="输入VR户型平米数" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                    <InputNumber
                                        min={0}
                                        defaultValue={0}
                                        onChange={onChange} /> ㎡
                                </Modal>)
                            : null
                    }
                </>
                
            </Showing>



            <Footer>
                <button className='back'>
                    <NavLink to='sandtable'>
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

        </Body>
    );
}

export default HouseType;
