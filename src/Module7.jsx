import React, {   useState } from "react";
import {DuckHome} from './DuckHome';
import { Duck } from "./Duck";
import {Nest} from './Nest';


export const Module7=()=>{
    //useReducer
    const [lft,setLft]=React.useState(0);
  const [tp,setTp]=React.useState(0);
  const fnClick=(l,t)=>{
    setLft(l); 
    setTp(t);
    setTimeout(()=>{setLft(l+80)},3000);
  }
    return(
        <React.Fragment style={{position:'relative'}}>
            <div className="row">
                <div className="d-none d-md-block col-md-12 col-lg-12" style={{border:'1px solid red',height:'100%'}}>
                    <DuckHome clik={fnClick}/>
                    <Duck l={lft} t={tp} />
                    <Nest clik={fnClick} />
                </div>
            </div>
        </React.Fragment>
        
    )
}