import React, { useState } from "react";
import '../index.less'
import { Collapse } from "antd";
import Day from './Day'
import ShowTime from "./Showtime";
import { useDispatch } from "react-redux";
import { changeNiaoPrices } from "../store/actionCreators";





const { Panel } = Collapse;


function Every() {

    const [state, setState] = useState(0)
    const dispatch = useDispatch()

    const change = (evt) => {
        console.log(evt);
        if(evt === '1' ){
            setState('1')
            dispatch(changeNiaoPrices(0))
        }
        if(evt === '2' ){
            setState('2')
            dispatch(changeNiaoPrices(0))
        }
        if(evt === '3' ){
            setState('3')
            dispatch(changeNiaoPrices(16000))
        }
        if(evt === '4' ){
            setState('4')
            dispatch(changeNiaoPrices(0))
        }

    }

    return (
        
        <Collapse
            accordion
            onChange={(evt) => { change(evt)}}
        >
            <h3 style={{color:"white"}}>项目鸟瞰</h3>
            <Panel key={1} header="三维渲染全景鸟瞰" showArrow={false} >
                <p style={{color:"white"}}>是否需要日夜景切换</p>
                {state ==='1' ? <Day /> : null}
            </Panel>

            <Panel key={2} header="虚实结合全景鸟瞰" showArrow={false}>
                <p style={{color:"white"}}>请选择展示时段</p>
                {state ==='2' ? <ShowTime /> : null}
            </Panel>

            <Panel  key={3} header="CIM孪生城市" showArrow={false}>
                <p style={{color:"white"}}>跳转中</p>
            </Panel>

            <Panel key={4} header="不需要项目鸟瞰" showArrow={false}>
                <p style={{color:"white"}}>跳转中</p>
            </Panel>

        </Collapse>

    )
}

export default Every;

