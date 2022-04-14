import React from "react";
import '../index.less'
import { Collapse, Input } from "antd";

const { Panel } = Collapse;


function Sand() {

    return (

        <Collapse
            accordion
        >
            <Panel header="720°全景漫游" showArrow={false}>

            </Panel>

            <Panel header="全景路径漫游" showArrow={false}>

            </Panel>

            <Panel header="不需要景观漫游" showArrow={false}>
                <p style={{color: "white"}}>跳转中</p>
            </Panel>

        </Collapse>

    )
}

export default Sand;