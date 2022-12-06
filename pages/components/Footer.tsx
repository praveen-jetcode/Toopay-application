import "../../styles/Footer.module.css"
const Footer = ()=>{
    return(
        <>
          <footer className="footer" style={{position:"absolute"}}>
       <ul>
        <li>
            <a href="http://localhost:3000/Support/Policy">PRIVACY POLICY</a>
        </li>
        <li>
            <a href="https://toopay.in/Retailor/Refund.aspx">REFUNDS AND CANCELLATION POLICY</a>
        </li>
        <li>
           <a href="http://localhost:3000/Support/TermsAndCondition">TERMS AND CONDITION</a>
        </li>
       </ul>
     </footer>
        </>
    )
}
export default Footer