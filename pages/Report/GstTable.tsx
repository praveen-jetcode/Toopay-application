import { Card } from "../components/Card"
import "../../styles/Report/GstTable.module.css"
const GstTable = ()=>{
    return (
       <>
       <Card Header={" GST Invoice Report"}>
       <div className="gst-table">
                   <table className="table">
                      <tbody >
                        <tr className="center">
                            <td >Tax Invoice</td>
                            
                        </tr>
                        <tr className="center">
                            <td>Omega</td>
                            <td>Toopay</td>
                            <td rowSpan={2}>Date</td>
                            <td rowSpan={2}>22/o4/2022</td>
                        </tr>
                        <tr className="center">
                            <td>Omega</td>
                            <td></td>
                        </tr>
                        <tr className="center">
                            <td>Dombivali</td>
                            <td>N/A</td>
                            <td>Invoice No</td>
                            <td>361116113164</td>
                        </tr>
                        <tr className="center">
                            <td>Pin code:</td>
                            <td>N/A,</td>
                            <td>Enrollment No.</td>
                            <td>NA</td>
                        </tr>
                        <tr className="center">
                            <td>7972816346</td>
                            <td>N/A</td>
                            <td>Invoice For the Months</td>
                            <td>November 2022</td>
                        </tr>
                        <tr className="center">
                            <td>manoj@gmail.com</td>
                            <td>GSTIN : N/A</td>
                            <td rowSpan={2}>Reverse Charge</td>
                            <td rowSpan={2}>No</td>
                        </tr>
                        <tr className="center">
                            <td></td>
                            <td>PAN : NA</td>
                        </tr>
                        <tr className="center">
                            <td>GSTIN:</td>
                            <td>CIN : N/A</td>
                            <td>State Code</td>
                            <td>44</td>
                        </tr>
                        <tr className="center">
                            <td colSpan={2}>Description of goods and service</td>
                            <td>HSN/SAC Code</td>
                            <td>Amount($)</td>
                        </tr>
                        <tr className="center">
                            <td colSpan={2}>Commission For-DMT</td>
                            <td></td>
                            <td>0.00</td>
                        </tr>
                        <tr className="center">
                            <td colSpan={2}>Commission For-AEPS</td>
                            <td></td>
                            <td>0.00</td>
                        </tr>
                        <tr className="center">
                            <td colSpan={2}>Commission For-RECHARGE</td>
                            <td></td>
                            <td>0.00</td>
                        </tr>
                        <tr className="center">
                            <td colSpan={3}>TOTAL</td>
                            <td>0</td>
                        </tr>
                        <tr className="text-right">
                            <td colSpan={2}>CGST</td>
                            <td>0.00%</td>
                            <td>0.00</td>
                        </tr>
                        <tr className="text-right">
                            <td colSpan={2}>SGST</td>
                            <td>0.00%</td>
                            <td>0.00</td>
                        </tr>
                        <tr className="text-right">
                            <td colSpan={2}>IGST</td>
                            <td>18.00%</td>
                            <td>0.00</td>
                        </tr>
                        <tr className="text-right">
                            <td colSpan={2}>Total Amount(Rounded off)</td>
                            <td></td>
                            <td>0</td>
                        </tr>
                        <tr className="center">
                            <td colSpan={4}>Amount Chargeable in words</td>
                        </tr>
                        <tr className="center">
                            <td colSpan={4}>Zero</td>
                        </tr>
                        <tr className="text-right">
                            <td colSpan={4}>Omega</td>
                        </tr>
                        <tr className="text-right">
                            <td colSpan={4}>
                                <img src="./assets/signature (1).png"></img><br></br>
                                Authorized Signatory
                                </td>
                        </tr>
                        <tr className="center">
                            <td colSpan={4}>
                                <h5>Note:</h5>
                                <ol>
                                    <li><p>In case the merchant/distributor is in the same state as MBS, 
                                        the GST (for ex. 18%) will <b>be divided equally between SGST (9%) and CGST (9%) and
                                         levied.</b></p></li>
                                    <li><p>In case the merchant/distributor in in a different state than MBS, the GST (for ex. 18%)
                                        will be levied as IGST (18%).</p></li>
                                    <li><p>GST will be credited only when the following parameters (Invoice No, Amount, TAX(CGST/SGST/IGST))
                                         mentioned on Submitted invoice matches with GSTR2A data.In case of mismatch of any paramenter ,
                                         <b>NO GST AMOUNT WILL BE CREDITED.</b></p></li>
                                    <li><p>The GST invoice cannot be on MBS/TooPay letterhead.It needs to be vendor letterhead.</p></li>
                                    <li><p>The invoice shoul be digitally signed,or it can be manuallysigned. In the case of manual signature, 
                                        scsned copy will not be enough for taking credit-signed hard copy is mandatory.However,
                                         during lockdown period, GST Credit will be processed,provided, 
                                         the invoice is in correct formate and signed.</p></li>
                                </ol>
                            </td>
                        </tr>
                      </tbody>
                   </table>
                </div>
       </Card>
       </>
    )
}
export default GstTable