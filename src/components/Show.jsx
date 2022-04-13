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

const { Panel } = Collapse;

// const text = `
//   A dog is a type of domesticated animal.
//   Known for its loyalty and faithfulness,
//   it can be found as a welcome guest in many households across the world.
// `;



function Show() {
    return (
        <Body>
            <Showing>
                <h3 style={{color: "white"}}>项目鸟瞰</h3>
                <Collapse accordion>
                    <Panel key={1} header="视频包装式区位" className="site-collapse-custom-panel" showArrow={false}>
                        <Packing />
                    </Panel>
                    <Panel key={2} header="VR无缝穿梭式区位" key="2" className="site-collapse-custom-panel" showArrow={false}>
                        <Shuttle />
                    </Panel>
                    <Panel key={3} header="不需要区位展示" key="3" className="site-collapse-custom-panel" showArrow={false}>
                        <Nothing />
                    </Panel>
                </Collapse>
            </Showing>
        </Body>
    );
}

export default Show;
