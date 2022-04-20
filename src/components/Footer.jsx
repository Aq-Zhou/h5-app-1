import React from "react";
import styled from "styled-components";


const Footer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  justify-content: space-between;
  display: flex;
  height: 38px;
  font-size: 18px;

  a {
    color: white;
  }

  .next {
    border: none;
    width: 50%;
    background: #70747f;
  }

  .back {
    border: none;
    width: 50%;
    background: #70747f;

  }


  .line {
    background: #c7cacf;
    width: 0.6px;
    height: 22px;
    top: 8px;
    position: relative;
  }

`
export default Footer;