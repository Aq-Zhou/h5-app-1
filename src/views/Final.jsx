import React from "react";
import styled from "styled-components";
import '../index.less'
import TopMessage from "../components/TopMessage";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";



const Table = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #2b2f38;
  
`

const Showing = styled.div`
  background: #414852;
  border-radius: 12px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 300px;
  height: 50%;
  overflow: auto;
`
const Back = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  justify-content: space-between;
  display: flex;
  height: 38px;
  font-size: 18px;
  
  .back {
    width: 100%;
    background: #70747f;
    border: none;
    a{
      color: white;
    }
  }
  
  //position: absolute;
  //bottom: 0;
  //width: 100%;
  //display: flex;
  //height: 38px;
  //font-size: 18px;
  //.-button {
  //  color: white;
  //  border: none ;
  //  background: #70747f;
  //  //background: #ffb522;
  //  width: 100%;
  //  font-weight: bold;
  //}
`


const Pricecss = styled.div`
  width: 200px;
  p {
    position: absolute;
    top: 18px;
    left: 32px;
  }
  h3 {
    position: absolute;
    top: 88px;
    left: 24px;
    font-size: 13px;
    width: 100px;
    height: 22px;
    border-radius: 6px;
    text-align: center;
  }

  h2 {
    position: absolute;
    top: 100px;
    left: 23px;
    font-size: 32px;
    text-align: left;
  }

  h4 {
    color: white;
    text-align: left;
    height: 30px;
    position: absolute;
    top: 67px;
    left: 29px;
  }
  
  h5 {
    font-size: 13px;
    -webkit-transform: scale(0.7);
    top: 50px;
    left: 23px;
    position: absolute;
  }
`

function Final() {

    const totalPrices = useSelector(state => state.totalPrices)

    return (
        <Table>
            <TopMessage>
                <div className='textCss'>
                    <Pricecss>
                        <p style={{color:"#edeef0"}}>产品总价及明细</p>
                        <h5 style={{color:"#b0b4bc"}}>不含税总价</h5>
                        <h4 style={{color:"#feffff"}}>￥{totalPrices}</h4>
                        <h3 style={{color:"#b0b4bc"}}>含税总价(13%)</h3>
                        <h2 style={{color:"#ffb520"}}>￥{totalPrices * 1.3}</h2>
                    </Pricecss>
                </div>
            </TopMessage>

            <Showing>
                <h3 style={{color: "white", textAlign:"center", borderRadius:"12px"}}>产品明细</h3>
                <hr/>
                <h5>区位优势</h5>
                <span>VR无缝穿梭式区位</span>
                <h5>项目鸟瞰</h5>
                <span>虚实结合全景鸟瞰</span>
                <h5>户型鉴赏</h5>
                <span>VR户型套装</span>
            </Showing>

            <Back>
                <button className='back'><NavLink to="/total">返回上一步</NavLink></button>
            </Back>

            {/*<Export>*/}
            {/*    <button className="-button">导出图片</button>*/}
            {/*</Export>*/}
        </Table>
    );
}

export default Final;