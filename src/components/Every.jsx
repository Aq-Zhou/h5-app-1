import React from "react";
import '../index.css'
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

            <Panel  header="VR无缝穿梭式区位" >
                <p>3</p>
            </Panel>

            <Panel header="不需要项目鸟瞰" >
                <p>4</p>
            </Panel>

        </Collapse>

    )
}

export default Every;

