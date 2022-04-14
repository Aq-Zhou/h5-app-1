import React from "react";
import '../index.less'
import { Collapse, Input } from "antd";

const { Panel } = Collapse;


function Sand() {

    return (

        <Collapse
            accordion
        >
            <Panel header="三维渲染全景鸟瞰" >
                {/*<Input placeholder="请填写漫游点数">请填写漫游点数</Input>*/}
            </Panel>

            <Panel header="虚实结合全景鸟瞰">
                {/*<Input placeholder="请填写需要漫游的条数（一条100米）">请填写需要漫游的条数（一条100米）</Input>*/}
            </Panel>

            <Panel header="不需要景观漫游" >
                <p>跳转中</p>
            </Panel>

        </Collapse>

    )
}

export default Sand;