import React from "react";
import styled from "styled-components";
import '../index.less'
import TopMessage from "../components/TopMessage";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import PriceSelect from "../components/Price";


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

  .ant-select {
    top: 0;
    left: -37px;
    
  }
`

function Final() {

    const totalPrice = useSelector(state => state.totalPrices)
    // const totalPrices = Math.ceil(totalPrice * 1.13)
    console.log(PriceSelect)

    return (
        <Table>
            <TopMessage>
                <div className='textCss'>
                    <Pricecss>
                        <p style={{color: "#edeef0"}}>?????????????????????</p>
                        <h5 style={{color: "#b0b4bc"}}>???????????????</h5>
                        <h4 style={{color: "#feffff"}}>???{Math.ceil(totalPrice / 1.13)}</h4>
                        <h3 style={{color: "#b0b4bc"}}><PriceSelect/></h3>
                        <h2 style={{color: "#ffb520"}}>???{totalPrice}</h2>
                    </Pricecss>
                </div>
            </TopMessage>

            <Showing>
                <h3 style={{color: "white", textAlign: "center", borderRadius: "12px",}}>????????????</h3>
                {/*<hr/>*/}
                ?????????
                {/*<h5 style={{color: "#9fa3ac"}}>????????????</h5>*/}
                {/*<span>VR?????????????????????</span>*/}

                {/*<h5>????????????</h5>*/}
                {/*<span>????????????????????????</span>*/}
                {/*<h6 style={{color: "#f3f2f3"}}>????????????: <br/>1.?????? <br/>2.?????? </h6>*/}
                {/*<h5>????????????</h5>*/}
                {/*<span>VR????????????</span>*/}
                {/*<h5>????????????</h5>*/}
                {/*<span>??????????????????</span>*/}
                {/*<h5>????????????</h5>*/}
                {/*<span>VR????????????</span>*/}
                {/*<h5>????????????</h5>*/}
                {/*<span>??????????????????</span>*/}

            </Showing>

            <Back>
                <button className='back'><NavLink to="/total">???????????????</NavLink></button>
            </Back>

            {/*<Export>*/}
            {/*    <button className="-button">????????????</button>*/}
            {/*</Export>*/}
        </Table>
    );
}

export default Final;