import styled from "styled-components";

const PriceCss = styled.div`
  width: 200px;

  h3 {
    position: absolute;
    top: 15px;
    right: 32px;
    font-size: 13px;
    width: 100px;
    height: 22px;
    border: 1px solid white;
    border-radius: 6px;
    text-align: center;
  }

  h2 {
    height: 30px;
    position: absolute;
    top: 30px;
    right: 32px;
    font-size: 32px;
    text-align: right;
  }

  h4 {
    position: absolute;
    top: 70px;
    right: 23px;
    color: #a7aab3;
    text-align: right;
    font-size: 10px;
    -webkit-transform: scale(0.8)
  }
`


export default PriceCss;