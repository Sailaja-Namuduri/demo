import React from 'react';
import { useState } from 'react';
import  DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from 'react-bootstrap/Dropdown';
import { Checkbox } from './reusable_components/Checkbox';

export const Module1=()=>{

    const n1Ref=React.createRef();
    const n2Ref=React.createRef();
    const n3Ref=React.createRef();
    const n4Ref=React.createRef();
    const n5Ref=React.createRef();
    const n6Ref=React.createRef();
    const [selected, setSelected] = useState({});
    const [checked, setChecked] = useState(false);
    const [datacardDetails,setdatacardDetails]=useState({});
    const handleSelect=(key,event)=>{
        setSelected({key,value:event.target.value})

    }
    const fnCheckChange=()=>{
        setChecked(()=>!checked)
    }
    const fnDatacardSubmitDesktop=()=>{
        let imageUploaded=n1Ref.current.value;
        let imageTitle=n2Ref.current.value;
        let imageDescription=n3Ref.current.value;

        let obj={};
        obj.cardimage=imageUploaded;
        obj.cardtitle=imageTitle;
        obj.carddescription=imageDescription;
        alert(obj.cardimage+obj.cardtitle+obj.carddescription);
        setdatacardDetails(obj);
        console.log('sending request.....',datacardDetails);
    }
    const fnDatacardSubmitMobile=()=>{
        let imageUploaded=n4Ref.current.value;
        let imageTitle=n5Ref.current.value;
        let imageDescription=n6Ref.current.value;

        let obj={};
        obj.cardimage=imageUploaded;
        obj.cardtitle=imageTitle;
        obj.carddescription=imageDescription;
        alert(obj.cardimage+obj.cardtitle+obj.carddescription);
        setdatacardDetails(obj);
        console.log('sending request.....',datacardDetails);
    }
    return(
        <div className='row'style={{border:'0px solid red'}}>
            <div className='row p-3' >
                <div className='d-none d-sm-none d-md-block col-md-12 col-lg-12' >
                    <div className='row p-2'>
                        <div className='d-none d-md-block col-md-6 col-lg-6 text-end'><span >DataCard Image:</span></div>
                        <div className='d-none d-md-block col-md-6 col-lg-6 text-start'><input ref={n1Ref} multiple accept="image/*"/></div>
                    </div>
                </div>
                <div className='d-none d-sm-none d-md-block col-md-12 col-lg-12'>
                    <div className='row p-2'>
                        <div className='d-none d-md-block col-md-6 col-lg-6 text-end'><span >DataCard Title:</span></div>
                        <div className='d-none d-md-block col-md-6 col-lg-6 text-start'><input ref={n2Ref}/></div>
                    </div>
                </div>
                <div className='d-none d-sm-none d-md-block col-md-12 col-lg-12'>
                    <div className='row p-2'>
                        <div className='d-none d-md-block col-md-6 col-lg-6 text-end'><span >DataCard Desciption:</span></div>
                        <div className='d-none d-md-block col-md-6 col-lg-6 text-start'><input ref={n3Ref}/></div>
                    </div>
                </div>
                <div className='d-none d-sm-none d-md-block col-md-12 col-lg-12 text-center p-3'>
                    <input type='submit' onClick={fnDatacardSubmitDesktop}/>
                </div>
                <div className='d-sm-block d-md-none col-sm-12'>
                    <div className='row p-2'>
                        <div className='d-sm-block d-md-none col-sm-12 text-center'><span >DataCard Image:</span></div>
                        <div className='d-sm-block d-md-none col-sm-12 text-center'><input ref={n4Ref} multiple accept="image/*"/></div>
                    </div>
                </div>
                <div className='d-sm-block d-md-none col-sm-12'>
                    <div className='row p-2'>
                        <div className='d-sm-block d-md-none col-sm-12 text-center'><span >DataCard Title:</span></div>
                        <div className='d-sm-block d-md-none col-sm-12 text-center'><input ref={n5Ref}/></div>
                    </div>
                </div>
                <div className='d-sm-block d-md-none col-sm-12'>
                    <div className='row p-2'>
                        <div className='d-sm-block d-md-none col-sm-12 text-center'><span >DataCard Desciption:</span></div>
                        <div className='d-sm-block d-md-none col-sm-12 text-center'><input ref={n6Ref}/></div>
                    </div>
                </div>
                <div className='d-sm-block d-md-none col-sm-12 text-center p-3'>
                    <input type='submit' onClick={fnDatacardSubmitMobile}/>
                </div>
            </div>
        </div>
    )
}