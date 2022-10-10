import React from "react";
import duckImg from './Images/1294915403.png';
import {connect} from 'react-redux'

export let DuckMobile=({l,t,homeClicked,nestClicked})=>{
 
  console.log('duck left::',{l});
  console.log('duck top::',{t});
  console.log('duck_home clicked::::::::::');
  return (
    <>

      <div style={{position:'relative',top:t}}>      
        <div className="duck" style={{display:'inline-block',position:'absolute',left:l,zIndex:9}}>
          {homeClicked|!nestClicked?<img src={duckImg} width={0} height={0} alt=''/>:<img src={duckImg} width={20} height={20} alt=''/>}
                
        </div>
      </div>
      
    </>
  );
}
DuckMobile=connect(
    (state)=>{
        return {
            homeClicked:state.myReducer.homeClick,
            nestClicked:state.myReducer.nestClick
        }
    }
)(DuckMobile)