import { Card2 } from "../components/Card";
import "../../styles/Dashboard/Changepassword.module.css";


const Changepassword = () => {
  return (
    <>
      <Card2 Header={"Change Password"} className="Card" style={{ padding: 0 }}>
        <h5 className="mt-4 px-3"> Password Change</h5>

        <div className="row p-3">
          <div className="col-lg-8 col-xs-12">
            <div className="col-lg-12 px-3">
              <div className="form-group pb-3">
                <label className="col-sm-4">Old Password</label>
                <div className="col-sm-9">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Old Password"
                  />
                </div>
              </div>

              <div className="form-group pb-3">
                <label className="col-sm-4">New Password</label>
                <div className="col-sm-9">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter New Password"
                  />
                </div>
              </div>

              <div className="form-group pb-3">
                <label className="col-sm-4">Confirm Password</label>
                <div className="col-sm-9">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm New Password"
                  />
                </div>
              </div>

              <div className="form-group pb-3">
                <div className="col-sm-3"></div>
                <div className="col-sm-9">
                  <input
                    type="submit"
                    value="Change"
                    className="btn btnInput "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-body">
          <h5>Password Policy</h5>
          <ul>
            <li className="rules"># Required 1 Uppercase Character(A-Z)</li>
            <li className="rules"># Required 1 Lowercase Character(a-z)</li>
            <li className="rules"># Required 1 Symbol Character(@#$%&amp;*)</li>
            <li className="rules"># Required 1 Numeric Character(0-9)</li>
            <li className="rules"># Minimum Length should be 6</li>
          </ul>
        </div>
      </Card2>
     
    </>
  );
};

export default Changepassword;
