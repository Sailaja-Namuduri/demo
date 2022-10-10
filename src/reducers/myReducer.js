import {init} from '../utils/init';

const myReducer=(state=init,action)=>{
    if(action.type== 'HomeClick'){
        console.log('reducer Homeclick condition is executing')
        state={
            ...state,
            homeClick:action.homeClick
        }
    }
    if(action.type=='NestClick'){
        state={
            ...state,
            nestClick:action.nestClick
        }
    }
   
  
    return state;
}

export default myReducer