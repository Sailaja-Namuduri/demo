import React, { useState } from "react";
import { Ducklings } from "./Ducklings";
import { DucklingsMobile } from "./DucklingsMobile";
import { Eggs } from "./Eggs";
import { EggsMobile } from "./EggsMobile";
import nest_Image from './Images/nest.png';
import { NestImage } from "./NestImage";
import { NestImageMobile } from "./NestImageMobile";
import { store } from "./reduxStore/store";

export const NestMobile=({clik})=>{
    const [nestClick1,setNestClick1]=useState(false);
    const [nestClick2,setNestClick2]=useState(false);
    const [nestClick3,setNestClick3]=useState(false);
    const [nestClick4,setNestClick4]=useState(false);
    const [nestClick5,setNestClick5]=useState(false);
    const [duckling1,setDuckling1]=useState(false);
    const [duckling2,setDuckling2]=useState(false);
    const [duckling3,setDuckling3]=useState(false);
    const [duckling4,setDuckling4]=useState(false);
    const [duckling5,setDuckling5]=useState(false);

    const clikHigher1=()=>{ 
        store.dispatch({type:'NestClick',nestClick:true})
        store.dispatch({type:'HomeClick',homeClick:false})
        var eggLay=setTimeout(()=>{setNestClick1(true)},2000)
        
        var timout=setTimeout(()=>{
            setNestClick1(false)
            setDuckling1(true)
          }
        ,5000);
        clik(120,110);
        
    
      }
      const clikHigher2=()=>{
        store.dispatch({type:'NestClick',nestClick:true})
        store.dispatch({type:'HomeClick',homeClick:false})
        var eggLay=setTimeout(()=>{setNestClick2(true)},2000)

        var timout=setTimeout(()=>{
            setNestClick2(false)
            setDuckling2(true)
        },5000);
        clik(200,180);
      }
      const clikHigher3=()=>{
        store.dispatch({type:'NestClick',nestClick:true})
        store.dispatch({type:'HomeClick',homeClick:false})
    
        var eggLay=setTimeout(()=>{setNestClick3(true)},2000)
        var timout=setTimeout(()=>{
            setNestClick3(false)
            setDuckling3(true)
        },5000);
        clik(30,250);
      }
      const clikHigher4=()=>{
        store.dispatch({type:'NestClick',nestClick:true})
        store.dispatch({type:'HomeClick',homeClick:false})
    
        var eggLay=setTimeout(()=>{setNestClick4(true)},2000)
        var timout=setTimeout(()=>{
            setNestClick4(false)
            setDuckling4(true)
        },5000);
        clik(190,340);
      }
      const clikHigher5=()=>{
        store.dispatch({type:'NestClick',nestClick:true})
        store.dispatch({type:'HomeClick',homeClick:false})
    
        var eggLay=setTimeout(()=>{setNestClick5(true)},2000)
        var timout=setTimeout(()=>{
            setNestClick5(false)
            setDuckling5(true)
        },5000);
        clik(110,420);
      }
    
      return (
        <div className="nest" style={{position:'relative',top:100}}>
          <div style={{display:'inline-block',position:'absolute',top:"10px",left:"100px"}} onClick={clikHigher1}>
          <NestImageMobile image={nest_Image}/>1
            {nestClick1?<EggsMobile/>:''}
              {duckling1==true?<DucklingsMobile/>:''}
          </div>
          <div style={{display:'inline-block',position:'absolute',top:"80px",left:"180px"}} onClick={clikHigher2}>
          <NestImageMobile image={nest_Image}/>2
            {nestClick2?<EggsMobile/>:''}
              {duckling2?<DucklingsMobile/>:''}   
          </div>
          <div style={{display:'inline-block',position:'absolute',left:"10px",top:"160px"}} onClick={clikHigher3}>
          <NestImageMobile image={nest_Image}/>3
            {nestClick3?<EggsMobile/>:''}
              {duckling3?<DucklingsMobile/>:''}    
          </div>
          <div style={{display:'inline-block',position:'absolute',left:"180px",top:"240px"}} onClick={clikHigher4}>
          <NestImageMobile image={nest_Image}/>4
            {nestClick4?<EggsMobile/>:''}
              {duckling4?<DucklingsMobile/>:''}  
          </div>
          <div style={{display:'inline-block',position:'absolute',left:"100px",top:"320px"}} onClick={clikHigher5}>
          <NestImageMobile image={nest_Image}/>5
            {nestClick5?<EggsMobile/>:''}
              {duckling5?<DucklingsMobile/>:''}   
          </div>
        </div>
      );
}