

export const DataCard=({image,cardtitle,carddescription,index})=>{
   
    console.log(cardtitle);
    console.log(carddescription);
    return(
        <>
            <div key={index} className="d-none d-md-block col-md-6 col-lg-6 align-center" style={{border:'0px solid green',padding:'20px',height:'540px',width:'540px'}}>
                <div style={{border:'0px solid green',display:'flex',justifyContent:'center',alignItems:'center',height:'500px',width:'500px'}}>
                    <div style={{height:'480px',width:'480px',border:'1px solid black',boxShadow:'5px 6px #888888',cursor:'pointer'}}>
                        <img src={image} height={250} alt=""></img>
                        <h1>{cardtitle}</h1>
                        <p>{carddescription}</p>
                    </div>
                </div>
            </div>
            <div key={index} className="d-sm-block d-md-none col-sm-6 align-center" style={{border:'0px solid green',padding:'20px',height:'240px',width:'240px'}}>
                <div style={{border:'0px solid green',display:'flex',justifyContent:'center',alignItems:'center',height:'200px',width:'200px'}}>
                    <div style={{height:'180px',width:'180px',border:'1px solid black',boxShadow:'5px 6px #888888',cursor:'pointer'}}>
                        <img src={image} height={80} alt=""></img>
                        <h6>{cardtitle}</h6>
                        <p>{carddescription}</p>
                    </div>
                </div>
            </div>
    </>
    )
}