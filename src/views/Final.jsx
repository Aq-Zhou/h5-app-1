import React from "react";
import styled from "styled-components";
import '../index.less'
import TopMessage from "../views/TopMessage";



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
const Export = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  height: 38px;
  font-size: 18px;
  .-button {
    border: none ;
    background: #ffb522;
    width: 100%;
    font-weight: bold;
  }
`

const Pricecss = styled.div`
  width: 200px;
  p {
    position: absolute;
    top: 18px;
    left: 30px;
  }
  h3 {
    color:#a7aab3;
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
    color:#a7aab3;
    text-align: left;
    font-size: 13px;
    -webkit-transform: scale(0.8);
    height: 30px;
    position: absolute;
    top: 50px;
    left: 25px;
  }
`

function Final() {
    return (
        <Table>
            <TopMessage>
                <div className='textCss'>
                    <Pricecss>
                        <p>产品总价及明细</p>
                        <h4 style={{color:"white"}}>不含税总价<br/>￥XXX,XXX</h4>
                        <h3 style={{color:"white"}}>含税总价(13%)</h3>
                        <h2 style={{color:"#ffb520"}}>￥XXX,XXX</h2>
                    </Pricecss>
                </div>
            </TopMessage>

            <Showing>
                <h3 style={{color: "white", textAlign:"center", borderRadius:"12px", }}>产品明细</h3>
            </Showing>

            {/*<Export>*/}
            {/*    <button className="-button">导出图片</button>*/}
            {/*</Export>*/}
        </Table>
    );
}

export default Final;