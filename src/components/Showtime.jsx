import {Checkbox, Row, Col} from 'antd';

function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
}


function ShowTime() {
    return (
        <Checkbox.Group style={{width: '100%'}} onChange={onChange}>
            <Row>
                <Col span={8}>
                    <Checkbox value="A">正午</Checkbox>
                </Col>
                <Col span={8}>
                    <Checkbox value="B">黄昏</Checkbox>
                </Col>
                <Col span={8}>
                    <Checkbox value="C">夜晚</Checkbox>
                </Col>
            </Row>
        </Checkbox.Group>
    )
}

export default ShowTime;