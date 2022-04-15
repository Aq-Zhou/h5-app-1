import React, { useState } from "react";
import {Radio, Space} from "antd";
import { useDispatch } from "react-redux";
import { changeNiaoPrices } from "../store/actionCreators";

const Day = () =>  {
    
    const [value, setValue] = useState(0)
    const disptach = useDispatch()

    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(
            e.target.value
        );

        if(e.target.value === 1) {
            disptach(changeNiaoPrices(20000))
        }

        if(e.target.value === 2) {
            disptach(changeNiaoPrices(12000))
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