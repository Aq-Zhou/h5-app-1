import React from "react";
import { Collapse } from 'antd';
import styled from "styled-components";
import '../index.css'
import Packing from "./Packing";
import Shuttle from "./Shuttle";
import Nothing from "./Nothing";


const Body = styled.div`
  color: white;
  position: absolute;
  width: 100%;
  height: 100%;
  background: #2b2f38;
`

const Showing = styled.section`
  position: absolute;
  width: 100%;
  height: 50%;
  bottom: 0;
`

// const { Panel } = Collapse;

// const text = `
//   A dog is a type of domesticated animal.
//   Known for its loyalty and faithfulness,
//   it can be found as a welcome guest in many households across the world.
// `;



function Show() {
    return (
        <Body>
            <Showing>
                <Collapse
                    accordion
                    bordered={false}
                    defaultActiveKey={['1']}
                    className="site-collapse-custom-collapse"
                >
                    <Packing />
                    <Shuttle />
                    <Nothing />
                </Collapse>
            </Showing>
        </Body>
    );
}

export default Show;
