import React, { useState } from "react"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { Module1 } from "./Module1"
import { Module2 } from "./Module2"
import { Module3 } from "./Module3"
import { Module4 } from "./Module4"
import { Module5 } from "./Module5"
import { Module6 } from "./Module6"
import { Module7 } from "./Module7"
import { HidePanelShortcuts } from "./reusable_components/hidePanelShortcuts"
import { NavButton, NavMobLink } from "./styledComponents/GridPageStyles"


export const GridPage=({phide,modhide,modhidefun})=>{
        const moduleSelected=()=>{
            modhidefun();
        }
        return(
            
            <BrowserRouter>
            
            <div className="row" style={{height:window.innerHeight-20,border:'0px solid green'}}>
                {phide?
                    <div className="d-sm-block d-md-none col-5" style={{display:'inline',position:'absolute',
                        backgroundColor:'#E1FFB1',zIndex:9,border:'0px solid pink'}}>
                        {modhide?
                            <div className="row" style={{border:'0px solid cyan',backgroundColor:'#E1FFB1',position:'fixed',top:30}}>Mobile Navigation
                                <div className="row" onClick={moduleSelected} style={{border:'0px solid cyan'}}> 
                                    <NavButton><NavMobLink to='/module1'><div className="col-sm-2">Pending</div></NavMobLink></NavButton>
                                    <NavButton><NavMobLink to='/module2'><div className="col-sm-2">Completed</div></NavMobLink></NavButton>
                                    <NavButton><NavMobLink to='/module3'><div className="col-sm-2">Cancelled</div></NavMobLink></NavButton>
                                    <NavButton><NavMobLink to='/module4'><div className="col-sm-2">Search by supplier</div></NavMobLink></NavButton>
                                    <NavButton><NavMobLink to='/module5'><div className="col-sm-2">Search by E-id</div></NavMobLink></NavButton>
                                    <NavButton><NavMobLink to='/module6'><div className="col-sm-2">Module6</div></NavMobLink></NavButton>
                                    <NavButton><NavMobLink to='/module7'><div className="col-sm-2">Module7</div></NavMobLink></NavButton>
                                </div>
                            </div>:''
                        }
                    </div>:
                    <div className="d-none d-md-block col-xs-2 col-sm-2 col-md-2 col-lg-2" style={{border:'0px solid #BEBEBE'}}>
                        <div className="row" style={{border:'0px solid blue',backgroundColor:'#E1FFB1'}}>Desktop Navigation:
                            <div className="row" style={{border:'0px solid yellow'}}> 
                                <NavButton><Link to='/module1' style={{textDecoration:'none',color:'black',fontWeight:'bold'}}><div className="col-sm-10 col-md-10 col-lg-10">Pending</div></Link></NavButton>
                                <NavButton><Link to='/module2' style={{textDecoration:'none',color:'black',fontWeight:'bold'}}><div className="col-sm-10 col-md-10 col-lg-10">Completed</div></Link></NavButton>
                                <NavButton><Link to='/module3' style={{textDecoration:'none',color:'black',fontWeight:'bold'}}><div className="col-sm-10 col-md-10 col-lg-10">Cancelled</div></Link></NavButton>
                                <NavButton><Link to='/module4' style={{textDecoration:'none',color:'black',fontWeight:'bold'}}><div className="col-sm-10 col-md-10 col-lg-10">Search by supplier</div></Link></NavButton>
                                <NavButton><Link to='/module5' style={{textDecoration:'none',color:'black',fontWeight:'bold'}}><div className="col-sm-10 col-md-10 col-lg-10">Search by employer id</div></Link></NavButton>
                                <NavButton><Link to='/module6' style={{textDecoration:'none',color:'black',fontWeight:'bold'}}><div className="col-sm-10 col-md-10 col-lg-10">Module6</div></Link></NavButton>
                                <NavButton><Link to='/module7' style={{textDecoration:'none',color:'black',fontWeight:'bold'}}><div className="col-sm-10 col-md-10 col-lg-10">Module7</div></Link></NavButton>
                            </div>
                        </div>
                    </div>
                }
                {phide?
                    
                    <div className="row"style={{border:'5px solid cyan'}}>
                        
                        <div className="d-none d-md-block col-md-1 col-lg-1 text-center" style={{borderRight:'1px solid #BEBEBE',padding:'10px',border:'4px solid black',width:'9px'}}>
                            <div className="row text-center" >
                                <div className="col-1 d-none d-md-block" style={{border:'3px dashed cyan'}}>
                                    <HidePanelShortcuts/>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11 text-center" style={{borderLeft:'1px solid #BEBEBE',padding:'10px',border:'4px dashed red'}}>
                            <Routes>
                                <Route path='/module1' element={<Module1/>}/>
                                <Route path='/module2' element={<Module2/>}/>
                                <Route path='/module3' element={<Module3/>}/>
                                <Route path='/module4' element={<Module4/>}/>
                                <Route path='/module5' element={<Module5/>}/>
                                <Route path='/module6' element={<Module6/>}/>
                                <Route path='/module7' element={<Module7/>}/>
                            </Routes>
                        </div>
                    </div>:
                    <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 text-center" style={{borderLeft:'1px solid #BEBEBE',padding:'10px',borderLeft:'5px solid green',borderRight:'5px solid green',borderBottom:'5px solid green'}}>
                        <Routes>
                            <Route path='/module1' element={<Module1/>}/>
                            <Route path='/module2' element={<Module2/>}/>
                            <Route path='/module3' element={<Module3/>}/>
                            <Route path='/module4' element={<Module4/>}/>
                            <Route path='/module5' element={<Module5/>}/>
                            <Route path='/module6' element={<Module6/>}/>
                            <Route path='/module7' element={<Module7/>}/>
                        </Routes>
                    </div>
                }
                
            </div>
            </BrowserRouter>
    )
}