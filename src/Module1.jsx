import React from 'react';
import { useState } from 'react';
import  DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from 'react-bootstrap/Dropdown';
import { Checkbox } from './reusable_components/Checkbox';
import { TextBox } from './reusable_components/TextBox';
import { objectHasNullProps } from './reusable_functions/objectHasNullProps';

export const Module1=()=>{
    const [template,setTemplate]=useState('');
    let reqObj={dimg:'',dtitle:'',d_description:''};

    const n1Ref=React.createRef();
    const n2Ref=React.createRef();
    const n3Ref=React.createRef();
    const n4Ref=React.createRef();
    const n5Ref=React.createRef();
    const n6Ref=React.createRef();
    const inputControls=[
        {
            lbl:'DataCard Image:',
            errorMsg:'Please Enter DatacardImage',
            isShowError:false,
            value:'',
            name:'dimg'
        },
        {
            lbl:'DataCard Title:',
            errorMsg:'Please Enter DatacardTitle',
            isShowError:false,
            value:'',
            name:'dtitle'
        },
        {
            lbl:'DataCard Description:',
            errorMsg:'Please Enter Datacard description',
            isShowError:false,
            value:'',
            name:'d_description'
        }
    ];
    
    
    const [datacardDetails,setdatacardDetails]=useState({dimg:'',dtitle:'',d_description:''});
    const fnChange=(eve)=>{
        const {value,name}=eve.target
        const inputObj=inputControls.find((obj)=>{
          return obj.name == name
        })
        inputObj.value=value;
        //inputObj.isShowError=value== '' ? true : false;
        reqObj[name]=value;
        setdatacardDetails(reqObj);
        fnPrepareTemplate();
      }
   const fnPrepareTemplate=()=>{
        let inpuControlArr=inputControls.map((obj,index)=>{
            return <TextBox refer={n1Ref} spanLabel={obj.lbl} name={obj.name}fnChange={fnChange} isShowError={obj.isShowError} errorMsg={obj.errorMsg}/>
        })
        //rendering the updated template
        setTemplate(inpuControlArr);
   }
    const fnDatacardSubmitDesktop=()=>{
        let isValid=true;
        let bool=objectHasNullProps(datacardDetails);
        if(bool==false){
        console.log('Sending the request ....',datacardDetails);
        }else{
            console.log('Please fill all the input fields');
        }
        fnPrepareTemplate();
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

    React.useEffect(()=>{
        console.log('component did mount');
        fnPrepareTemplate();

    },[])
    return(
        <div className='row'style={{border:'0px solid red'}}>
            <div className='row p-3' >
                <div className='d-none d-sm-none d-md-block col-md-12 col-lg-12' >
                    {template}
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