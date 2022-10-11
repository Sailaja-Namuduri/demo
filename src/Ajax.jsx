import { useState } from "react"
import { Table } from "./Table";
import axios from 'axios';

export const Ajax=()=>{
    const [heading,setHeading]=useState('');
    const [ths,setThs]=useState([]);
    const [data,setData]=useState([]);
    const [tds,setTds]=useState([]);

    const fnGetUsers=()=>{
        let httpObj=new XMLHttpRequest()
        httpObj.open('get','https://jsonplaceholder.typicode.com/users')
        httpObj.send()
        httpObj.onload=()=>{
            let res=  httpObj.responseText
            res=JSON.parse(res)
            setHeading('USERS');
            setThs(['ID','NAME','Email']);
            setData(res);
            setTds(['id','name','email']);
        }
        httpObj.onerror=()=>{
  
        }
    }
    const fnGetPosts=()=>{
        fetch('https://jsonplaceholder.typicode.com/posts',{
          method:'get'
        })
        .then((res)=>{
            return   res.json()
        })
        .then((data)=>{
          console.log(data)
          
          setHeading('POSTS');
            setThs(['ID','BODY','TITLE']);
            setData(data);
            setTds(['id','body','title']);
        })
        .catch(()=>{
          
        })
      }
      const fnGetPhotos=async ()=>{
        /* axios.get('https://jsonplaceholder.typicode.com/photos')
         .then((res)=>{
           console.log(res.data)
         })
         .catch(()=>{
   
         })*/
   
       const res= await axios.get('https://jsonplaceholder.typicode.com/photos');
       console.log(res.data)
       
       setHeading('PHOTOS');
            setThs(['ID','URL','TITLE']);
            setData(res.data);
            setTds(['id','url','title']);
     }
    return(
        <div className="ajax">
        <h1>Ajax</h1>
        <button onClick={fnGetUsers}>Get Users</button>
        <button onClick={fnGetPosts}>Get Posts</button>
        <button onClick={fnGetPhotos}>Get Photos</button>
        
        <Table heading={heading} ths={ths} data={data} tds={tds} />
      </div>
    )
}