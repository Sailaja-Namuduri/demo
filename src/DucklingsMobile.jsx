import React from "react";
import duckling from './Images/duckling.png'
export const DucklingsMobile=()=>{
    return (
        <div className="ducklings"style={{position:'relative',bottom:140,left:-30}}>
          <div style={{display:'inline-block',position:'absolute',top:"70px",left:"40px"}}>
            <img src={duckling}width={30} height={30}/>
          </div>
        </div>
      );
}