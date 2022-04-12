import {Link, Route, Switch, useRouteMatch} from "react-router-dom";
import React from "react";
import { Collapse } from 'antd';
import styled from "styled-components";


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
`


const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;


function Show() {

    return (
        <Body>
            <Showing>
                <Collapse  accordion>
                    <Panel header="视频包装式区位" key="1">
                        <Collapse defaultActiveKey="1">
                            <Panel header="三维渲染全景鸟瞰" key="1">
                                <p>是否需要日夜景切换</p>
                            </Panel>
                        </Collapse>
                        <Collapse defaultActiveKey="2">
                            <Panel header="虚实结合全景鸟瞰" key="2">
                                <p>请选择展示时段</p>
                            </Panel>
                        </Collapse>
                        <Collapse defaultActiveKey="3">
                            <Panel header="CIM孪生城市" key="3">
                                <p>3</p>
                            </Panel>
                        </Collapse>
                        <Collapse defaultActiveKey="4">
                            <Panel header="不需要项目鸟瞰" key="4">
                                <p>4</p>
                            </Panel>
                        </Collapse>
                    </Panel>


                    <Panel header="VR无缝穿梭式区位" key="2">
                        <Collapse defaultActiveKey="1">
                            <Panel header="三维渲染全景鸟瞰" key="1">
                                <p>是否需要日夜景切换</p>
                            </Panel>
                        </Collapse>
                        <Collapse defaultActiveKey="2">
                            <Panel header="虚实结合全景鸟瞰" key="2">
                                <p>请选择展示时段</p>
                            </Panel>
                        </Collapse>
                        <Collapse defaultActiveKey="3">
                            <Panel header="CIM孪生城市" key="3">
                                <p>3</p>
                            </Panel>
                        </Collapse>
                        <Collapse defaultActiveKey="4">
                            <Panel header="不需要项目鸟瞰" key="4">
                                <p>4</p>
                            </Panel>
                        </Collapse>
                    </Panel>


                    <Panel header="不需要区位展示" key="3">
                        <Collapse defaultActiveKey="1">
                            <Panel header="三维渲染全景鸟瞰" key="1">
                                <p>是否需要日夜景切换</p>
                            </Panel>
                        </Collapse>
                        <Collapse defaultActiveKey="2">
                            <Panel header="虚实结合全景鸟瞰" key="2">
                                <p>请选择展示时段</p>
                            </Panel>
                        </Collapse>
                        <Collapse defaultActiveKey="3">
                            <Panel header="CIM孪生城市" key="3">
                                <p>3</p>
                            </Panel>
                        </Collapse>
                        <Collapse defaultActiveKey="4">
                            <Panel header="不需要项目鸟瞰" key="4">
                                <p>4</p>
                            </Panel>
                        </Collapse>
                    </Panel>
                </Collapse>
            </Showing>
        </Body>
    );
}

export default Show;
