import React from "react";
import egg from './Images/Egg.png';
export const Eggs=()=>{
    return (
        <div className="eggs" style={{position:'relative',bottom:140,left:-30}}>
          <div style={{display:'inline-block',position:'absolute',top:"10px",left:"100px"}}>
            <img src={egg}width={60} height={90}/>
          </div>
        </div>
      );
}