import { Card } from "../components/Card";
import "../../styles/Support/Complaints.module.css";

 const Complaints = () => {
  return (
    <>
<Card Header={"Complaint & Support"}>
<div className="section">
                <div className="row">
                    <div className="col-lg-12">
                        <h5>ADD NEW COMPLAINT</h5>
                        <hr/>
                    </div>
                </div>

                <div className="row pb-4">
                    <div className="col-lg-6">
                        <span>Complaint Type :</span><br />
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="col-lg-6">
                        <span>Transaction ID :</span><br />
                        <input type="password" className="form-control" id="inputPassword"/>
                    </div>
                </div>



                <div className="row pb-4">
                    <div className="col-lg-6">
                        <span>Related Mobile No : [OPTIONAL]</span><br />
                        <input type="password" className="form-control" id="inputPassword"/>
                    </div>
                    <div className="col-lg-6">
                        <span>Message :</span><br />
                        <input type="password" className="form-control" id="inputPassword"/>
                    </div>
                </div>


                <div className="row">
                    <div className="col-lg-6">
                        <button type="button" className="btn">SUBMIT</button>
                    </div>
                    <div className="col-lg-6"></div>
                </div>

            </div>
          
</Card>
</>
  );
};

export default Complaints;