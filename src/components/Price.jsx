import { Select } from 'antd';




const { Option } = Select;

function handleChange(value) {
    console.log(value);  // { value: "1", key: "1", label: "含税总价(13%)" }
}



function PriceSelect(){


    return (
        <Select
            labelInValue
            defaultValue={{ value: "1" }}
            style={{ width: 120 }}
            onChange={handleChange}
        >
            <Option className="set1" value="1">含税总价(13%)</Option>
            <Option className="set2" value="2">含税总价(3%)</Option>
        </Select>
    )
}

export default PriceSelect;
