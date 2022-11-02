import React, { useState } from "react"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { Ajax } from "./Ajax"
import { Module1 } from "./Module1"
import { Module2 } from "./Module2"
import { Module3 } from "./Module3"
import { Module4 } from "./Module4"
import { Module5 } from "./Module5"
import { Module6 } from "./Module6"
import { Module7 } from "./Module7"
import { HidePanelShortcuts } from "./reusable_components/hidePanelShortcuts"
import { NavButton, NavLink } from "./styledComponents/GridPageStyles"

export const GridPage=({phide,modhide,modhidefun})=>{
    const [mainhide,setMainHide]=useState(false);
        const moduleSelected=()=>{
            modhidefun();
        }
        const fnDeskDisplayhiddenMenu=()=>{
            document.getElementById('menuhidden').style.zIndex=0;
            setMainHide(true);
        }
        const fnDeskDisplayhiddenMenu_Enable=()=>{
            document.getElementById('menu_hidden').style.zIndex=-1;
            setMainHide(false);
        }
        return(
            
            <BrowserRouter>
            
            <div className="row" style={{height:'100%',border:'0px solid pink'}}>
                {phide?
                    <div className="d-sm-block d-md-none col-5" style={{display:'inline',position:'absolute',
                        backgroundColor:'#E1FFB1',zIndex:9,border:'0px solid pink'}}>
                        {modhide?
                            <div className="row" style={{border:'0px solid cyan',backgroundColor:'#E1FFB1',position:'fixed',top:30}}>Mobile Navigation
                                <div className="row" onClick={moduleSelected} style={{border:'0px solid cyan'}}> 
                                    <NavButton><NavLink to='/create-datacard'><div className="col-sm-2">Create Datacard</div></NavLink></NavButton>
                                    <NavButton><NavLink to='/datacard-list'><div className="col-sm-2">Datacard List</div></NavLink></NavButton>
                                    <NavButton><NavLink to='/api-calls-examples'><div className="col-sm-2">Example Api Calls</div></NavLink></NavButton>
                                    <NavButton><NavLink to='/module4'><div className="col-sm-2">Processing...</div></NavLink></NavButton>
                                    <NavButton><NavLink to='/module5'><div className="col-sm-2">Processing...</div></NavLink></NavButton>
                                    <NavButton><NavLink to='/module6'><div className="col-sm-2">Processing...</div></NavLink></NavButton>
                                    <NavButton><NavLink to='/game'><div className="col-sm-2">Game</div></NavLink></NavButton>
                                </div>
                            </div>:''
                        }
                    </div>:
                    <div className="d-none d-md-block col-xs-2 col-sm-2 col-md-2 col-lg-2" style={{border:'0px solid #c4311a'}}>
                        <div className="row" style={{border:'0px dashed #fdgfdf'}}>
                            <div className="d-none d-md-block col-xs-2 col-sm-2 col-md-2 col-lg-2" style={{border:'0px solid #8f5d5d',position:'fixed',top:30,left:0,bottom:0}}>
                                <div className="row" style={{border:'0px solid blue',backgroundColor:'#E1FFB1',paddingLeft:'25px'}}>Desktop Navigation:
                                    {mainhide?
                                        <div className="row" style={{border:'0px solid yellow'}}>
                                            <div className="d-none d-md-block col-xs-1 col-sm-1 col-md-1 col-lg-1" onMouseOver={fnDeskDisplayhiddenMenu_Enable}><HidePanelShortcuts/></div>
                                            <div className="d-none d-md-block col-xs-10 col-sm-10 col-md-10 col-lg-10" id='menu_hidden' style={{zIndex:-1}}>
                                                <div><NavButton><NavLink to='/create-datacard' ><div className="col-sm-10 col-md-10 col-lg-10">Create Datacard</div></NavLink></NavButton></div>
                                                <div><NavButton><NavLink to='/datacard-list' ><div className="col-sm-10 col-md-10 col-lg-10">Datacard List</div></NavLink></NavButton></div>
                                                <div><NavButton><NavLink to='/api-calls-examples' ><div className="col-sm-10 col-md-10 col-lg-10">Example Api Calls</div></NavLink></NavButton></div>
                                                <div><NavButton><NavLink to='/module4' ><div className="col-sm-10 col-md-10 col-lg-10">Processing...</div></NavLink></NavButton></div>
                                                <div><NavButton><NavLink to='/module5' ><div className="col-sm-10 col-md-10 col-lg-10">Processing...</div></NavLink></NavButton></div>
                                                <div><NavButton><NavLink to='/module6' ><div className="col-sm-10 col-md-10 col-lg-10">Processing...</div></NavLink></NavButton></div>
                                                <div><NavButton><NavLink to='/game' ><div className="col-sm-10 col-md-10 col-lg-10">Game</div></NavLink></NavButton></div>
                                            </div>
                                            
                                        </div>:
                                        <div className="row" style={{border:'0px solid yellow'}}>
                                            <div className="d-none d-md-block col-xs-1 col-sm-1 col-md-1 col-lg-1" ><HidePanelShortcuts/></div>
                                            <div className="d-none d-md-block col-xs-10 col-sm-10 col-md-10 col-lg-10" id='menu_hidden' style={{zIndex:0}}>
                                                <div><NavButton><NavLink to='/create-datacard' ><div className="col-sm-10 col-md-10 col-lg-10">Create Datacard</div></NavLink></NavButton></div>
                                                <div><NavButton><NavLink to='/datacard-list' ><div className="col-sm-10 col-md-10 col-lg-10">Datacard List</div></NavLink></NavButton></div>
                                                <div><NavButton><NavLink to='/api-calls-examples' ><div className="col-sm-10 col-md-10 col-lg-10">Example Api Calls</div></NavLink></NavButton></div>
                                                <div><NavButton><NavLink to='/module4' ><div className="col-sm-10 col-md-10 col-lg-10">Processing...</div></NavLink></NavButton></div>
                                                <div><NavButton><NavLink to='/module5' ><div className="col-sm-10 col-md-10 col-lg-10">Processing...</div></NavLink></NavButton></div>
                                                <div><NavButton><NavLink to='/module6' ><div className="col-sm-10 col-md-10 col-lg-10">Processing...</div></NavLink></NavButton></div>
                                                <div><NavButton><NavLink to='/game' ><div className="col-sm-10 col-md-10 col-lg-10">Game</div></NavLink></NavButton></div>
                                            </div>    
                                        </div>
                                        }
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {phide?
                    
                    <div className="d-block col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="row" >
                            <div className="d-none d-md-block col-xs-2 col-sm-2 col-md-2 col-lg-2" style={{border:'0px solid #1477da'}}>
                                <div className="row" style={{border:'0px solid blue',backgroundColor:'#E1FFB1',paddingLeft:'25px'}}>Desktop Navigation:
                                    <div className="row" style={{border:'0px solid yellow'}}>
                                        <div className="d-none d-md-block col-xs-1 col-sm-1 col-md-1 col-lg-1" onMouseOver={fnDeskDisplayhiddenMenu} ><HidePanelShortcuts/></div>
                                        <div className="d-none d-md-block col-xs-10 col-sm-10 col-md-10 col-lg-10" id='menuhidden'  style={{zIndex:-1}} >
                                            <div ><NavButton ><NavLink to='/create-datacard'  ><div className="col-sm-10 col-md-10 col-lg-10" >Create Datacard</div></NavLink></NavButton></div>
                                            <div ><NavButton ><NavLink to='/datacard-list' ><div className="col-sm-10 col-md-10 col-lg-10" >Datacard List</div></NavLink></NavButton></div>
                                            <div ><NavButton ><NavLink to='/api-calls-examples' ><div className="col-sm-10 col-md-10 col-lg-10" >Example Api Calls</div></NavLink></NavButton></div>
                                            <div ><NavButton ><NavLink to='/module4' ><div className="col-sm-10 col-md-10 col-lg-10" >Processing...</div></NavLink></NavButton></div>
                                            <div ><NavButton ><NavLink to='/module5' ><div className="col-sm-10 col-md-10 col-lg-10" >Processing...</div></NavLink></NavButton></div>
                                            <div ><NavButton ><NavLink to='/module6' ><div className="col-sm-10 col-md-10 col-lg-10" >Processing...</div></NavLink></NavButton></div>
                                            <div ><NavButton ><NavLink to='/game' ><div className="col-sm-10 col-md-10 col-lg-10" >Game</div></NavLink></NavButton></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="d-block col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{border:'0px solid #1d0b22'}}>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center" style={{border:'0px dashed red'}}>
                                        <Routes>
                                            <Route path='/create-datacard' element={<Module1/>}/>
                                            <Route path='/datacard-list' element={<Module2/>}/>
                                            <Route path='/api-calls-examples' element={<Ajax/>}/>
                                            <Route path='/module4' element={<Module4/>}/>
                                            <Route path='/module5' element={<Module5/>}/>
                                            <Route path='/module6' element={<Module6/>}/>
                                            <Route path='/game' element={<Module7/>}/>
                                        </Routes>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>:
                    <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 text-center" style={{border:'0px solid green'}}>
                        <Routes>
                            <Route path='/create-datacard' element={<Module1/>}/>
                            <Route path='/datacard-list' element={<Module2/>}/>
                            <Route path='/api-calls-examples' element={<Ajax/>}/>
                            <Route path='/module4' element={<Module4/>}/>
                            <Route path='/module5' element={<Module5/>}/>
                            <Route path='/module6' element={<Module6/>}/>
                            <Route path='/game' element={<Module7/>}/>
                        </Routes>
                    </div>
                    
                }
                
            </div>
            </BrowserRouter>
    )
}