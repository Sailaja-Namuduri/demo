import one from '../Images/1.png';
import two from '../Images/2.png';
import three from '../Images/3.png';
import four from '../Images/4.png';
import five from '../Images/5.png';
import six from '../Images/6.png';
import seven from '../Images/7.png';

export const HidePanelShortcuts=()=>{
    return(
        <div className="row" style={{border:'0px dashed orange'}}>
            <div className="col-sm-12 col-md-12 col-lg-12"><img src={one} width={15} height={15} alt='module1'/></div>
            <div className="col-sm-12 col-md-12 col-lg-12"><img src={two} width={15} height={15} alt='module2'/></div>
            <div className="col-sm-12 col-md-12 col-lg-12"><img src={three} width={15} height={15} alt='module3'/></div>
            <div className="col-sm-12 col-md-12 col-lg-12"><img src={four} width={15} height={15} alt='module4'/></div>
            <div className="col-sm-12 col-md-12 col-lg-12"><img src={five} width={15} height={15} alt='module5'/></div>
            <div className="col-sm-12 col-md-12 col-lg-12"><img src={six} width={15} height={15} alt='module6'/></div>
            <div className="col-sm-12 col-md-12 col-lg-12"><img src={seven} width={15} height={15} alt='module7'/></div>

        </div>
    )
}