import {Checkbox, Row, Col} from 'antd';
import {useDispatch} from 'react-redux';
import {changeNiaoPrices} from '../store/actionCreators';


function ShowTime() {

    // const [state, setState] = useState(null)

    const dispatch = useDispatch()

    const onChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
        console.log(checkedValues.length);
        // 单选一个一万二，两个两万，三个两万六
        if (checkedValues.length === 0) {
            dispatch(changeNiaoPrices(0))
        }
        if (checkedValues.length === 1) {
            dispatch(changeNiaoPrices(12000))
        }
        if (checkedValues.length === 2) {
            dispatch(changeNiaoPrices(20000))

        }
        if (checkedValues.length === 3) {
            dispatch(changeNiaoPrices(26000))
        }
    }


    return (
        <Checkbox.Group style={{width: '100%'}} onChange={onChange}>
            <Row>
                <Col span={8}>
                    <Checkbox value={1}>正午</Checkbox>
                </Col>
                <Col span={8}>
                    <Checkbox value={2}>黄昏</Checkbox>
                </Col>
                <Col span={8}>
                    <Checkbox value={3}>夜晚</Checkbox>
                </Col>
            </Row>
        </Checkbox.Group>
    )
}

export default ShowTime;