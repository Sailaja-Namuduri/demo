
export const DataCard=({image,cardtitle,carddescription})=>{
    return(
        <div className="d-none d-md-block col-6 align-center" style={{border:'0px solid green',padding:'20px',height:'540px',width:'540px'}}>
                    <div style={{border:'0px solid green',display:'flex',justifyContent:'center',alignItems:'center',height:'500px',width:'500px'}}>
                        <div style={{height:'480px',width:'480px',border:'1px solid black',boxShadow:'5px 6px #888888',cursor:'pointer'}}>
                            <img src={image} height={250} alt=""></img>
                            <h1>{cardtitle}</h1>
                            <p>{carddescription}</p>
                        </div>
                    </div>
                </div>
    )
}