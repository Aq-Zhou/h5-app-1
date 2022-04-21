import {Select} from 'antd';
import PriceCss from "./PriceCss";
import React, {useState} from "react";
import {useSelector} from "react-redux";


const {Option} = Select;


function PriceSelect() {

    const totalPrice = useSelector(state => state.totalPrices)

    const [state, setState] = useState(1)

    function handleChange(value) {
        console.log(value);  // { value: "1", key: "1", label: "含税总价(13%)" }

        if (value.key === '1') {
            setState(1)
        }else {
            setTimeout(()=> {setState(2)},0)
        }
    }


    return (
        <PriceCss>
            <Select
                className="set"
                labelInValue
                defaultValue={{value: "1"}}
                style={{width: 110}}
                onChange={handleChange}
            >
                <Option className="set1" value="1">含税总价(13%)</Option>
                <Option className="set2" value="2">含税总价(3%)</Option>
            </Select>
            {/*<h3 style={{color: "white"}}>含税总价(13%)</h3>*/}
            <h2 style={{color: "#ffb520"}}>￥{state === 1 ? Math.ceil(totalPrice * 1.13) : Math.ceil(totalPrice * 1.03)}</h2>
            <h4 style={{color: "white"}}>不含税总价：￥{totalPrice}</h4>
        </PriceCss>
    )
}

export default PriceSelect;
