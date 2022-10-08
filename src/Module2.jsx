import { DataCard } from "./reusable_components/DataCards"
import datacard1 from './Images/datacard1.png';
const data=[
    {
        cardimage:'https://image.shutterstock.com/image-illustration/elephant-zebra-skin-be-different-260nw-2135376329.jpg',
        cardtitle:'Data Card1',
        carddescription:'This is a Sample data card1, has no data description to show :)'
    },
    {
        cardimage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMltbvA3f4uasfhCxVCc3fGIjoHI2DsZ-IsQ&usqp=CAU',
        cardtitle:'Data Card2',
        carddescription:'This is a Sample data card2, has no data description to show :)'
    },
    {
        cardimage:'https://media.istockphoto.com/photos/elephant-with-zebra-skin-in-the-studio-the-concept-of-being-different-picture-id1163846305?k=20&m=1163846305&s=612x612&w=0&h=ayygPp-IV1i-hrwXqFoLi-FTzglBq5NHEuXZVzk1Isg=',
        cardtitle:'Data Card3',
        carddescription:'This is a Sample data card3, has no data description to show :)'
    },
    {
        cardimage:'https://image.shutterstock.com/image-photo/beautiful-pink-flower-anemones-fresh-260nw-1028135845.jpg',
        cardtitle:'Data Card4',
        carddescription:'This is a Sample data card4, has no data description to show :)'
    },
    {
        cardimage:'https://assets-global.website-files.com/610b110a9a81544b676680ff/610b110a9a81547b4a668179_scottbourne-image.jpg',
        cardtitle:'Data Card5',
        carddescription:'This is a Sample data card5, has no data description to show :)'
    },
    {
        cardimage:'https://www.adobe.com/express/feature/image/media_1bb4d071398492506a1b76b3b6f9d69a5e96d7ffc.png?width=750&format=png&optimize=medium',
        cardtitle:'Data Card6',
        carddescription:'This is a Sample data card6, has no data description to show :)'
    }
    
]


export const Module2=()=>{
    return(
        <div>
            <div className="row" style={{padding:'10px'}}>
            
            {data.map((value,index)=>
                <DataCard image={value.cardimage} cardtitle={value.cardtitle} carddescription={value.carddescription} index={index}/>
                )

            }
            
                
            </div>
        </div>
    )
}