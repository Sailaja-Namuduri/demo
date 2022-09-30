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

export const GridPage=({phide,modhide,modhidefun})=>{
        const moduleSelected=()=>{
            modhidefun();
        }
        return(
            
            <BrowserRouter>
            
            <div className="row" style={{height:window.innerHeight-20,border:'10px solid green'}}>
                {phide?
                    <div className="d-sm-block d-md-none" style={{display:'inline',position:'absolute',
                        backgroundColor:'#E1FFB1',zIndex:9,border:'3px solid pink'}}>
                        {modhide?
                            <div className="row" style={{border:'1px solid cyan'}}>Main Navigation
                                <div className="row" onClick={moduleSelected} style={{border:'1px solid cyan'}}> 
                                    <Link to='/module1'><div className="col-sm-2" >Module1</div></Link>
                                    <Link to='/module2'><div className="col-sm-2">Module2</div></Link>
                                    <Link to='/module3'><div className="col-sm-2">Module3</div></Link>
                                    <Link to='/module4'><div className="col-sm-2">Module4</div></Link>
                                    <Link to='/module5'><div className="col-sm-2">Module5</div></Link>
                                    <Link to='/module6'><div className="col-sm-2">Module6</div></Link>
                                    <Link to='/module7'><div className="col-sm-2">Module7</div></Link>
                                </div>
                            </div>:''
                        }
                    </div>:
                    <div className="d-none d-md-block col-xs-2 col-sm-2 col-md-2 col-lg-2" style={{border:'1px solid #BEBEBE'}}>
                        <div className="row" style={{border:'1px solid blue'}}>Main Navigation</div>
                        <div className="row" style={{border:'1px solid yellow'}}> 
                            <Link to='/module1'><div className="col-sm-10 col-md-10 col-lg-10">Module1</div></Link>
                            <Link to='/module2'><div className="col-sm-10 col-md-10 col-lg-10">Module2</div></Link>
                            <Link to='/module3'><div className="col-sm-10 col-md-10 col-lg-10">Module3</div></Link>
                            <Link to='/module4'><div className="col-sm-10 col-md-10 col-lg-10">Module4</div></Link>
                            <Link to='/module5'><div className="col-sm-10 col-md-10 col-lg-10">Module5</div></Link>
                            <Link to='/module6'><div className="col-sm-10 col-md-10 col-lg-10">Module6</div></Link>
                            <Link to='/module7'><div className="col-sm-10 col-md-10 col-lg-10">Module7</div></Link>
                        </div>
                    </div>
                }
                {phide?
                    <div className="row"style={{border:'1px solid brown'}}>
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 text-center" style={{borderRight:'1px solid #BEBEBE',padding:'10px',border:'1px solid black'}}>
                            <HidePanelShortcuts/>
                        </div>
                        <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 text-center" style={{borderLeft:'1px solid #BEBEBE',padding:'10px',border:'1px solid red'}}>
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
                    <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 text-center" style={{borderLeft:'1px solid #BEBEBE',padding:'10px',border:'1px solid green'}}>
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