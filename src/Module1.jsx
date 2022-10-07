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
        <div className='row'style={{border:'1px solid red'}}>
            <div className='row' style={{padding:'10px'}}>
                <div className='d-none d-sm-none d-md-block col-md-6 col-lg-6'>
                    <span >First Name:</span><input/>
                </div>
                <div className='d-none d-sm-none d-md-block col-md-6 col-lg-6'>
                    <span >Last Name:</span><input/>
                </div>
                <div className='d-block d-sm-block d-md-none col-sm-12 col-md-6 col-lg-6'>
                    <span >First Name:</span><input/>
                </div>
                <div className='d-block d-sm-block d-md-none col-sm-12 col-md-6 col-lg-6'>
                    <span >Last Name:</span><input/>
                </div>
            </div>
            <div style={{padding:'10px'}}><span>Gender:</span>
                <DropdownButton
                    id="dropdown-basic-button"
                    variant="outline-success"
                    className="floatRight"
                    onSelect={handleSelect}
                    title={selected?.key || 'Gender Select'}
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
            <div><span>Valid Member:</span><input type='checkbox' label='cricket'value='Cricket' height={40} width={40}/></div>
        </div>
    )
}