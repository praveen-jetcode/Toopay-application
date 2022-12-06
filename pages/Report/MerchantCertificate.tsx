import { Card } from "../components/Card"
import "../../styles/Report/Merchant.module.css"
import { Logo } from "../components/Logo"
import Image from 'next/image'

// import Image from 'next/image'

const MerchantCertificate = ()=>{
  return(
    <>
    <Card Header={"Merchant Certificate"}>
            <div className="certificate ">
               <div className="row">
                <div className="col-sm-12 textCenter">
                  <div className="link">
                  <Logo/>
                  </div>
                </div>
                <div className="col-md-12 certificate_title">
                  <h3>CERTIFICATE OF REGISTRATION</h3>
                </div>
                <div className="col-md-12">
                  <div className="txt_1">
                    <span className="sp_1">This is to Certify that M/s</span>
                    <span className="sp_2">Omega</span>
                  </div>
                  <div className="txt_2">
                    <span className="sp_1">Address</span>  
                    <span className="address">Dombivali</span>
                  </div>
                </div>
                <div className="col-md-12 mb_2">
                  <h5>is an authorized Merchant of TooPay.</h5>
                </div>
               
                <div className="col-md-6 signature">
                  <b>Date of issue</b>
                  <span className="date">24/06/2022</span>
                </div>
                <div className="col-md-6 signature_img">
                  <Image  src={require("../../public/sig.png")}  alt="Picture of the author" width={100}
                   height={70} className="img img_fluid" 
                   />
                   <span className="authorized">Authorised Signatory</span>
                </div>
               
                <div className="validity">
                  <p>(Valid for 1 year from the Date of Issue)</p>
                </div>
                </div>
          </div >
      </Card>
    </>
  )
}
export default MerchantCertificate