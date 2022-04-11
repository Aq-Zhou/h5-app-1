import { Collapse } from 'antd';
import React from "react";


export const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;



export default function Form() {
    return (
        <Collapse accordion>
            <Panel header="视频包装式区位" key="1">
                <p>{text}</p>
            </Panel>
            <Panel header="VR无缝穿梭式区位" key="2">
                <p>{text}</p>
            </Panel>
            <Panel header="不需要区位展示" key="3">
                <p>{text}</p>
            </Panel>
        </Collapse>
    )
};