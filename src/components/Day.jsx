import React from "react";
import {Radio, Space} from "antd";

class Day extends React.Component {
    state= {
        value: 1
    }

    onChange= e => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value
        });
    };

    render() {
        const {value} = this.state;
        return (
            <Radio.Group onChange={this.onChange} value={value}>
                <Space direction="vertical">
                    <Radio value={1}>是</Radio>
                    <Radio value={2}>否</Radio>
                </Space>
            </Radio.Group>
        )
    }
}

export default Day;