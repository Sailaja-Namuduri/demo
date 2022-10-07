import { DataCard } from "./reusable_components/DataCards"
import datacard1 from './Images/datacard1.png';
const data=[
    {
        cardimage:'1',
        cardtitle:'Data Card1',
        carddescription:'This is a Sample data card1, has no data description to show :)'
    },
    {
        cardimage:'2',
        cardtitle:'Data Card2',
        carddescription:'This is a Sample data card2, has no data description to show :)'
    },
    {
        cardimage:'3',
        cardtitle:'Data Card3',
        carddescription:'This is a Sample data card3, has no data description to show :)'
    },
    {
        cardimage:'4',
        cardtitle:'Data Card4',
        carddescription:'This is a Sample data card4, has no data description to show :)'
    },
    {
        cardimage:'5',
        cardtitle:'Data Card5',
        carddescription:'This is a Sample data card5, has no data description to show :)'
    },
    {
        cardimage:'6',
        cardtitle:'Data Card6',
        carddescription:'This is a Sample data card6, has no data description to show :)'
    }
    
]


export const Module2=()=>{
    return(
        <div>
            <div className="row" style={{padding:'10px'}}>
            
            {data.map((value)=>
                <DataCard image={datacard1} cardtitle={value.cardtitle} carddescription={value.carddescription}/>
                )

            }
            
                
            </div>
        </div>
    )
}