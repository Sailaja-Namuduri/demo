import logo from './logo.svg';
import './App.css';
import { GridPage } from './GridPage';
import lines from './Images/button.png';
import { useReducer, useState } from 'react';
import styled from 'styled-components';
import myReducer from './reducers/myReducer';
import { init } from './utils/init';

const SpanAppName1=styled.span`
display:inline-block;
color:black;
    `;

var stylingObject={
  div:{'scroll-behavior':'smooth'}
}

function App() {
  

  const [panelhide,setPanelhide]=useState(false);
  const[modClick,setModClick]=useState(true);
  const [leftMain,setLeftMain]=useState(0);
  const [positionMain,setPositionMain]=useState('sticky');
  const moduleSelected=()=>{
      setModClick(()=>false)
      setPanelhide(!panelhide)
      
  }
  const fnPanel=()=>{
    setPanelhide(()=>!panelhide);
    setModClick(()=>true)
  }
  
  return (
    <div >
      <div id='scrolltop' className="container-fluid" style={{border:'0px dashed green',height: '100%'}}>
        <div className="row" style={{backgroundColor:'#E1FFB1',height:'30px',position:'sticky',top:0,bottom:0,zIndex:100}}>
          <div className="col-1" onClick={fnPanel} style={{position:'relative',display:'inline-block'}}> 
            <img src={lines} height={20} width={20} style={{position:'absolute',paddingTop:'6px'}} alt=''/>
          </div>
          <div className='d-none d-md-block col-1' style={{paddingLeft:0,textAlign:'center'}}>
            <button style={{borderRadius:5,width:'125px',height:'29px',textAlign:'match-parent'}}>Create</button>
          </div>
          <div className='d-sm-block d-md-none col-1' style={{paddingLeft:0,textAlign:'center'}}>
            <button style={{borderRadius:5,width:'60px',height:'29px',textAlign:'match-parent'}}>Create</button>
          </div>
          <div className='col-10 text-center' style={{fontWeight:'bold',fontFamily:'sans-serif',color:'white'}}>
            <SpanAppName1>Sample Application</SpanAppName1>
          </div>
        </div>
        <GridPage phide={panelhide} modhide={modClick} modhidefun={moduleSelected} />

      </div>
      <div style={{fontWeight:'bold',color:'burlywood',position:'fixed',bottom:0,cursor:'pointer',scrollBehavior:'smooth'}}><a href='#scrolltop'>Scroll Top <span style={{fontSize:'50px'}}>&#8593;</span></a></div>
    
    </div>
    
  );
}

export default App;
