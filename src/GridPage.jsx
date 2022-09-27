import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { Module1 } from "./Module1"
import { Module2 } from "./Module2"
import { Module3 } from "./Module3"
import { Module4 } from "./Module4"
import { Module5 } from "./Module5"
import { Module6 } from "./Module6"
import { Module7 } from "./Module7"

export const GridPage=()=>{
    return(
        <div className="container-fluid" style={{border:'1px solid red',padding:'10px'}}>
            <BrowserRouter>
            <div className="row">
                <div className="col-sm-2 col-md-2 col-lg-2">
                    <div className="row">
                        <Link to='/module1'><div className="col-sm-10 col-md-10 col-lg-10">Module1</div></Link>
                        <Link to='/module2'><div className="col-sm-10 col-md-10 col-lg-10">Module2</div></Link>
                        <Link to='/module3'><div className="col-sm-10 col-md-10 col-lg-10">Module3</div></Link>
                        <Link to='/module4'><div className="col-sm-10 col-md-10 col-lg-10">Module4</div></Link>
                        <Link to='/module5'><div className="col-sm-10 col-md-10 col-lg-10">Module5</div></Link>
                        <Link to='/module6'><div className="col-sm-10 col-md-10 col-lg-10">Module6</div></Link>
                        <Link to='/module7'><div className="col-sm-10 col-md-10 col-lg-10">Module7</div></Link>
                    </div>
                </div>
                
                <div className="col-sm-10 col-md-10 col-lg-10">
                    <Routes>
                        <Route path='/module1' element={<Module1/>}/>
                        <Route path='/module2' element={<Module2/>}/>
                        <Route path='/module3' element={<Module3/>}/>
                        <Route path='/module4' element={<Module4/>}/>
                        <Route path='/module5' element={<Module5/>}/>
                        <Route path='/module6' element={<Module6/>}/>
                        <Route path='/module7' element={<Module7/>}/>
                    </Routes></div>
            </div>
            </BrowserRouter>
        </div>
    )
}