import React from "react";
import '../index.css'
import {Collapse} from "antd";
import Day from "./Day";
import ShowTime from "./Showtime";


const {Panel} = Collapse;


function Shuttle() {
    return (
        <>
            <Collapse defaultActiveKey="1">
                <Panel header="三维渲染全景鸟瞰" key="1" showArrow={false}>
                    <p>是否需要日夜景切换</p>
                    <Day/>
                </Panel>
            </Collapse>
            <Collapse defaultActiveKey="2">
                <Panel header="虚实结合全景鸟瞰" key="2" showArrow={false}>
                    <p>请选择展示时段</p>
                    <ShowTime/>
                </Panel>
            </Collapse>
            <Collapse defaultActiveKey="3">
                <Panel header="CIM孪生城市" key="3" showArrow={false}>
                    <p>3</p>
                </Panel>
            </Collapse>
            <Collapse defaultActiveKey="4">
                <Panel header="不需要项目鸟瞰" key="4" showArrow={false}>
                    <p>4</p>
                </Panel>
            </Collapse>
        </>
    )
}

export default Shuttle;