import React from "react";
import egg from './Images/Egg.png';
export const EggsMobile=()=>{
    return (
        <div className="eggs" style={{position:'relative',bottom:140,left:-30}}>
          <div style={{display:'inline-block',position:'absolute',top:"70px",left:"50px"}}>
            <img src={egg}width={15} height={30} alt=''/>
          </div>
        </div>
      );
}