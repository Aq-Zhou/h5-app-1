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
  color: white;
  background: #414852;
  border-radius: 12px;
  position: absolute;
  left: 0;
  right: 0;
  //top: 0;
  bottom: 130px;
  margin: auto;
  width: 280px;
  height: 50%;
  overflow: auto;
  h5 {
    color: #9fa3ac;
  }
  
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

    a {
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
    top: 37px;
    left: 42px;
  }

  h3 {
    position: absolute;
    top: 149px;
    left: 26px;
    font-size: 13px;
    -webkit-transform: scale(0.8);
    width: 100px;
    height: 22px;
    border-radius: 6px;
    text-align: center;
  }

  h2 {
    position: absolute;
    top: 160px;
    left: 34px;
    font-size: 36px;
    text-align: left;
  }

  h4 {
    font-size: 20px;
    color: white;
    text-align: left;
    height: 30px;
    position: absolute;
    top: 110px;
    left: 38px;
  }

  h5 {
    font-size: 13px;
    -webkit-transform: scale(0.8);
    top: 90px;
    left: 36px;
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
                        <p style={{color: "#edeef0"}}>产品总价及明细</p>
                        <h5 style={{color: "#b0b4bc"}}>不含税总价</h5>
                        <h4 style={{color: "#feffff"}}>￥{totalPrices}</h4>
                        <h3 style={{color: "#b0b4bc"}}>含税总价(13%)</h3>
                        <h2 style={{color: "#ffb520"}}>￥{totalPrices * 1.13}</h2>
                    </Pricecss>
                </div>
            </TopMessage>

            <Showing>
                <h3 style={{color: "white", textAlign: "center", borderRadius: "12px",}}>产品明细</h3>
                <hr/>
                <h5 style={{color: "#9fa3ac"}}>区位优势</h5>
                <span>VR无缝穿梭式区位</span>

                <h5>项目鸟瞰</h5>
                <span>虚实结合全景鸟瞰</span>
                <h6 style={{color: "#f3f2f3"}}>时段订制: <br/>1.白天 <br/>2.夜晚 </h6>
                <h5>项目沙盘</h5>
                <span>VR项目沙盘</span>
                <h5>景观漫游</h5>
                <span>全景路径漫游</span>
                <h5>户型鉴赏</h5>
                <span>VR户型套装</span>
                <h5>阳台景观</h5>
                <span>三维渲染景观</span>

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