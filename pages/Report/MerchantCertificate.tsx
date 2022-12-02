import { Card } from "../components/Card"
import "../../styles/Merchant.module.css"

const MerchantCertificate = ()=>{
  return(
    <>
    <Card Header={"Merchant Certificate"}>
   
    <div>
            <div className="certificate">
               <div className="row">
                 <div className="textCenter">
                  <div className="mAuto">
                    <p>Toopay</p>
                  </div>
                 </div>
                 <div className="certificate_title">
                  <h5 className="heading">CERTIFICATE OF REGISTRATION</h5>
                 </div>
                 <div className="certificate_content">
                   <div className="txt1">
                      <span className="span1">This is to Certify that M/s</span>
                      <span className="certificate_name">Omega</span>
                   </div>
                   <div className="txt2">
                   <span className="span1">Address</span>
                      <span className="certificate_address">Dombivali</span>
                   </div>
                   <div className="txt2"></div>
                 </div>
                 <div className="certificate_content">
                   <p className="authorized">is an authorized Merchant of TooPay.</p>
                 </div>
                 <div className="signature">
                    <b className="bold">Date of issue</b>
                    <span className="signature_date">24/06/2022</span>
                 </div>
                 <div className="signature_img">
                   
                    <img src='../../assets/signature (1).png'></img>
                    <span style={{display:"inline-block",fontSize:"12px"}}>Authorised Signatory</span>
                 </div>
                 <div className="certificate_content">
                  <p style={{fontSize:"14px",lineHeight:1.5}}>(Valid for 1 year from the Date of Issue)</p>
                 </div>
               </div>
            </div>
          </div >
                   
    </Card>
    </>
  )
}
export default MerchantCertificate