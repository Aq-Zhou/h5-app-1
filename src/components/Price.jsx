import { Select } from 'antd';

const { Option } = Select;


function handleChange(value) {
    console.log(value);  // { value: "13%", key: "13%", label: "含税总价(13%)" }
}

function PriceSelect(){
    return (
        <Select
            labelInValue
            defaultValue={{ value: '13' }}
            style={{ width: 120 }}
            onChange={handleChange}
        >
            <Option value="13">含税总价(13%)</Option>
            <Option value="3">含税总价(3%)</Option>
        </Select>
    )
}

export default PriceSelect;
