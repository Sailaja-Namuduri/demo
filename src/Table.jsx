import React from 'react'

export const Table = (props) => {
  const {heading,ths,data,tds}=props
  return (
    <div>
        <h3>{heading}</h3>
        <table border='1px'>
            <thead>
                <tr>
                   {
                       ths.map((v,i)=>{
                           return <th key={i}>{v}</th>
                       })
                   }
                </tr>
            </thead>
            <tbody>
                   {
                       data.map((obj,i)=>{
                           return <tr key={i}>
                               {
                                   tds.map((k,index)=>{
                                       return <td key={index} >{obj[k]}</td>
                                   })
                               }
                           </tr>
                       })
                   }
            </tbody>
        </table>
    </div>
  )
}
