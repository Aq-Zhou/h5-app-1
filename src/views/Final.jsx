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
  border: 1px solid green;
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
  h3 {
    position: absolute;
    top: 15px;
    left: 32px;
    font-size: 13px;
    width: 100px;
    height: 22px;
    border-radius: 6px;
    text-align: center;
  }

  h2 {
    position: absolute;
    top: 70px;
    left: 23px;
    font-size: 32px;
    text-align: left;
  }

  h4 {
    
    color: #a7aab3;
    text-align: left;
    font-size: 10px;
    -webkit-transform: scale(0.8)

    height: 30px;
    position: absolute;
    top: 30px;
    left: 32px;
  }
`

function Final() {
    return (
        <Table>
            <TopMessage>
                <div className='textCss'>
                    <Pricecss>
                        <h4 style={{color:"white"}}>不含税总价<br/>￥222222</h4>
                        <h3 style={{color:"white"}}>含税总价(13%)</h3>
                        <h2 style={{color:"#ffb520"}}>￥23132332</h2>
                    </Pricecss>
                </div>
            </TopMessage>

            <Showing>
                <h3 style={{color: "white", textAlign:"center", borderRadius:"12px", border:"1px solid red"}}>产品明细</h3>
            </Showing>

            {/*<Export>*/}
            {/*    <button className="-button">导出图片</button>*/}
            {/*</Export>*/}
        </Table>
    );
}

export default Final;