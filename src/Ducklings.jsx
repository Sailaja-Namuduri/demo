import React from "react";
import duckling from './Images/duckling.png'
export const Ducklings=()=>{
    return (
        <div className="ducklings"style={{position:'relative',bottom:140,left:-30}}>
          <div style={{display:'inline-block',position:'absolute',top:"10px",left:"100px"}}>
            <img src={duckling}width={60} height={90}/>
          </div>
        </div>
      );
}