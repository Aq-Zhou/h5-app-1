import React from "react";
import '../index.less'
import { Collapse } from "antd";
import Day from './Day'
import ShowTime from "./Showtime";


const { Panel } = Collapse;


function Every() {


    return (

        <Collapse
            accordion
        >
            <Panel header="三维渲染全景鸟瞰" >
                <p>是否需要日夜景切换</p>
                <Day />
            </Panel>

            <Panel header="虚实结合全景鸟瞰">
                <p>请选择展示时段</p>
                <ShowTime />
            </Panel>

            <Panel  header="CIM孪生城市"  >
                <p>跳转中</p>
            </Panel>

            <Panel header="不需要项目鸟瞰" >
                <p>跳转中</p>
            </Panel>

        </Collapse>

    )
}

export default Every;

