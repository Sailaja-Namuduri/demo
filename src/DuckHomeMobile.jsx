import { store } from "./reduxStore/store";
import hut from './Images/hut.png';
import React from "react";


export const DuckHomeMobile=({clik})=>{
   
    const homeClick=()=>{
        clik(-20,-80);
        store.dispatch({type:'HomeClick',homeClick:true})
    }
    return(
        <div style={{display:'inline-block',cursor:'pointer'}} onClick={homeClick}>
            <img src={hut}width={80} height={80} alt=''/>
        </div>
    )
}