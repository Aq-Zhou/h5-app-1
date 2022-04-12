import React from 'react';
import antd from 'antd';
import { Collapse } from 'antd';


import 'antd/dist/antd.css';

const { Panel } = Collapse;



const Test = () => {

    const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found:a welcome guest in many households across the world.
`;


    return (
        <>
            <Collapse accordion>
                <Panel header="This is panel header 1" key="1">
                    <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                    <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                    <p>{text}</p>
                </Panel>
            </Collapse>
        </>
    )


}


export default Test;







