import React, { useState } from "react";
import {Radio, Space} from "antd";
import { useDispatch } from "react-redux";
import { changeNiaoPrices } from "../store/actionCreators";

const Day = () =>  {
    
    const [value, setValue] = useState(0)
    const dispatch = useDispatch()

    const onChange = (e) => {
        // 日夜景交替20000
        console.log('radio checked', e.target.value);
        setValue(
            e.target.value
        );
        if(e.target.value === 1) {
            dispatch(changeNiaoPrices(20000))
        }

        if(e.target.value === 2) {
            dispatch(changeNiaoPrices(0))
        }

    };

        
        return (
            <Radio.Group onChange={(e) => onChange(e)} value={value}>
                <Space direction="vertical">
                    <Radio value={1}>是</Radio>
                    <Radio value={2}>否</Radio>
                </Space>
            </Radio.Group>
        )
}

export default Day;