import React, { memo, useState } from 'react'
import styled from "styled-components";
import '../index.less'
import Footer from "../views/Footer";
import TopMessage from "../views/TopMessage";
import { NavLink } from "react-router-dom";
import PriceCss from "../views/Price";
import FontCss from "../views/FontCss";
import { useDispatch, useSelector } from "react-redux";
import { changeSandPrices } from "../store/actionCreators";
import { Modal, Button, InputNumber } from 'antd';

import 'antd/dist/antd.css';


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
    width: 316px;
    height: 46px;
    background: rgb(67,71,82);
    margin: 10px 0 10px 0;
    border-radius: 12px;
    border: 1px solid white;
  }
  
    
    .ant-modal {
      margin: 8px auto;
      max-width: calc(100vw - 16px);
      border: 1px solid red;
      margin-top: 150px;
    }

    .modalClass {
      position: absolute;
    }
  

`

const Landscape = memo(() => {
  const projectName = useSelector(state => state.projectName)

  const totalPrices = useSelector(state => state.totalPrices)

  const dispatch = useDispatch()

  // 点击的按钮
  const [state, setState] = useState(0)


  const changePrices = (param) => {
    // 360报价8000
    // VR报价 16000
    dispatch(changeSandPrices(param))


  }

  const [isModalVisible, setIsModalVisible] = useState(false);


  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    dispatch()
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function onChange(value) {
    console.log('changed', value);
  }

  return (
    <Table>
      <TopMessage>
        <div className='textCss'>
          <FontCss>{projectName}</FontCss>

          <PriceCss>
            <h3 style={{ color: "white" }}>含税总价(13%)</h3>
            <h2 style={{ color: "#ffb520" }}>￥{totalPrices * 1.3}</h2>
            <h4 style={{ color: "white" }}>不含税总价：￥{totalPrices}</h4>
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
          <source type='video/mp4' src={require('../video/rzf.mp4')} />
        </video>
      </TopMessage>

      <Showing>
        <h3 style={{ color: "white" }}>景观漫游</h3>

        <>
          <Button type="primary" onClick={() => { showModal(); setState(1) }}>
            720°全景漫游
          </Button>
          <Button type="primary" onClick={() => { showModal(); setState(2) }}>
            全景路径漫游
          </Button>
          <Button type="primary" >
            不需要景观漫游
          </Button>

          <div className='modalClass'>
            {
              state === 1 ? (
                <Modal title="输入720°全景漫游条数" className='modalClass' visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                  <InputNumber min={0} defaultValue={0} onChange={onChange} />
                </Modal>)
                : null
            }
            {
              state === 2 ? (
                <Modal title="输入全景路径漫游条数" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                  <InputNumber min={0} defaultValue={0} onChange={onChange} />
                </Modal>)
                : null
            }
          </div>

        </>

      </Showing>

      <Footer>
        <button className='back'><NavLink to="/Sandtable">上一步</NavLink></button>
        <div className="line" />
        <button className='next'><NavLink to="/Landscape">下一步</NavLink></button>
      </Footer>
    </Table>
  )
})

export default Landscape



