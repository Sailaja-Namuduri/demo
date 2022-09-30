import { useState } from 'react';
import  DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from 'react-bootstrap/Dropdown';
import { Checkbox } from './reusable_components/Checkbox';

export const Module1=()=>{
    const list = [
        { key: "male", value: "Male" },
        { key: "female", value: "Female" },
      ];
    const [selected, setSelected] = useState({});
    const [checked, setChecked] = useState(false);
    const handleSelect=(key,event)=>{
        setSelected({key,value:event.target.value})

    }
    const fnCheckChange=()=>{
        setChecked(()=>!checked)
    }
    return(
        <div>
            <div style={{padding:'10px'}}><span style={{padding:'10px'}}>First Name:</span><input/></div>
            <div><span style={{padding:'10px'}}>Last Name:</span><input/></div>
            <div style={{padding:'10px'}}><span>Gender:</span>
                <DropdownButton
                    id="dropdown-basic-button"
                    variant="outline-success"
                    className="floatRight"
                    onSelect={handleSelect}
                    title={selected?.key || list[0].key}
                    style={{display:'inline'}}
                >
                {list.map((item, index) => {
                    return (
                        <Dropdown.Item key={index} eventKey={item.key}>
                        {item.value}
                        </Dropdown.Item>
                    );
                })}
                </DropdownButton>
            </div>
            <input type='checkbox' label='cricket'value='Cricket'/>
        </div>
    )
}