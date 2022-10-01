import logo from './logo.svg';
import './App.css';
import { GridPage } from './GridPage';
import lines from './Images/button.png';
import { useState } from 'react';

var stylingObject={
  div:{'scroll-behavior':'smooth'}
}

function App() {
  const [panelhide,setPanelhide]=useState(false);
  const[modClick,setModClick]=useState(true);
  const moduleSelected=()=>{
      setModClick(()=>false)
      setPanelhide(!panelhide)
      
  }
  const fnPanel=()=>{
    setPanelhide(()=>!panelhide);
    setModClick(()=>true)
  }
  
  return (
    <div>
      <div id='scrolltop' className="container-fluid" >
        <div className="row" style={{backgroundColor:'green',height:'25px',position:'sticky',top:0}}>
          <div className="col-1" onClick={fnPanel} style={{position:'relative',display:'inline-block'}}> 
            <img src={lines} height={20} width={20} style={{position:'absolute'}} />
          </div>
          <div className='col-11 text-center' style={{fontWeight:'bold',fontFamily:'sans-serif',color:'white'}}>
            <span style={{display:'inline-block'}}>Sample Application</span>
          </div>
        </div>
        <GridPage phide={panelhide} modhide={modClick} modhidefun={moduleSelected}/>

      </div>
      <div style={{fontWeight:'bold',color:'burlywood',position:'fixed',bottom:0,cursor:'pointer',scrollBehavior:'smooth'}}><a href='#scrolltop'>Scroll Top <span style={{fontSize:'50px'}}>&#8593;</span></a></div>
    
    </div>
    
  );
}

export default App;
