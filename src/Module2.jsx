import { DataCard } from "./reusable_components/DataCards"
import datacard1 from './Images/datacard1.png'
export const Module2=()=>{
    return(
        <div>
            <div className="row" style={{padding:'10px'}}>
            <DataCard image={datacard1} cardtitle="Data Card1" carddescription="This is a Sample data card1, has no data description to show :)"/>
            <DataCard image={datacard1} cardtitle="Data Card2" carddescription="This is a Sample data card2, has no data description to show :)"/>
            <DataCard image={datacard1} cardtitle="Data Card3" carddescription="This is a Sample data card3, has no data description to show :)"/>

                
                
            </div>
        </div>
    )
}