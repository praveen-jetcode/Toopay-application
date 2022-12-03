import "../../styles/TdsLetter.module.css"
import { Card } from "../components/Card"

const MerchantCertificate = ()=>{
    return (
          <>
          <Card  Header={"TDS Letter"}>

          
             
       
      
          
              <div className="certificate ">
                  {/* <div className="row">
                    <div className="col-md-12"> */}
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="comp-logo">
                                    <img></img>
                                </div>
                            </div>
                            <div className="col-md-6 signature order-1 ">
                               <b>Date</b>
                               <span className="Signature-Date ">24/06/2022</span>
                               <p className="mt-3" style={{fontSize: "14px",lineHeight:1.5}}>
                                <b style={{fontWeight: "bold"}}>The Manager</b>
                               </p>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-md-12 certificate-content">
                           <p className="align">Sub: Agent of a corporate/ Principal Business Correspondent TooPay.</p>
                           <p className="align">Re: Non-Reduction of TDS on Cash Withdrawal over 1 crore as per Section 194N for the financial Year FY 21-22</p>
                           <p className="align">My/our PAN is <span>N/A</span>My/our PAN is N/A</p>
                           <p className="align">I/We have been appointed by TooPay. for rendering Business Correspondent services in accordance with the Guidelines issued by the Reserve Bank Of India in this regards by the Reserve Bank of India (RBI) under the Reserve Bank Of India Act 1932 (2 of 1913) to ICICI Bank.</p>
                           <p className="align">A copy of a valid certificate dated <span>02/01/2020</span>  issued to us by TooPay. is enclosed which is valid as on date.</p>
                           <p className="align">I/We are maintaining separate bank account number with . from which withdrawal is made only for the “Business Correspondent” activities permitted by the RBI.</p>
                           <p className="align">I /We hereby agree to indemnify and keep indemnified the Bank against any loss or damages that may be caused to the Bank by reason of incorrect/false information provided by me/us to the Bank and the Bank having acted upon the same. I/We further indemnify keep indemnified the Bank against any and all claims, demands, suits and other proceedings made or instituted by any persons/authorities for or in connection with any matter relating hereto and agree and undertake to pay to Bank on demand all sums of money, costs, charges and expenses incurred, sustained or put to in respect thereof.</p>
                           <p className="align">Thanking You.</p>
                           <p className="mt-5" style={{fontSize:"14px"}}>Yours faithfully,</p>
                           <div className="signature-image">
                            <img className="signatures img-fluid" src="./assets/signature (1).png" style={{width: "15%"}}></img><br></br>
                            <span>
                                <b style={{fontSize: "13px"}}>Authorised Signatory</b>
                            </span>
                           </div>
                           <hr className="w-100"></hr>
                           <div className="col-md-12 text-center">
                            <h6 className="text-primary">TooPay</h6>
                            <p className="para" style={{fontSize:"13px"}}>CIN NO <span>N/A</span></p>
                            <p className="para" style={{fontSize:"13px"}}>NA</p>
                            <p className="para" style={{fontSize:"13px"}}>Tel:NA</p>
                            <p className="para" style={{fontSize:"13px"}}>Email Id:NA</p>
                            <p className="para" style={{fontSize:"13px"}}><a href="#" className="colorlink">NA</a></p>
                            
                           </div>
                        </div>
                        </div>
                    {/* </div>
                  </div> */}
              </div>
          
        
    
    </Card>
          </>
    )
}

export default MerchantCertificate