import { store } from "./reduxStore/store";
import hut from './Images/hut.png';


export const DuckHome=({clik})=>{
   
    const homeClick=()=>{
        clik(-20,-80);
        store.dispatch({type:'HomeClick',homeClick:true})
    }
    return(
        <div className="duck-home" style={{display:'inline-block',cursor:'pointer'}} onClick={homeClick}>
            <img src={hut}width={160} height={160} alt=''/>
        </div>
    )
}