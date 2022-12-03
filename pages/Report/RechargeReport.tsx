import { Card } from "../components/Card";

const RechargeReport = () => {
  return (
    <>
      <Card Header={"Recharge Transactions"}>
        <div className="row">
          <div className="col-lg-3">
            <div className="row">
              <div className="col-lg-12">
                <label> Category</label>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <select
                  style={{ width: "100%", padding: "5px 5px" }}
                  aria-label="2"
                  className="p-2 mt-2"
                >
                  <option value="1">Mobile prepaid</option>
                  <option value="2">50</option>
                  <option value="3">all</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="row">
              <div className="col-lg-12">
                <label> From Date*</label>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <input
                  type="date"
                  className="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="row">
              <div className="col-lg-12">
                <label> To Date*</label>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <input
                  type="date"
                  className="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-3  btn-container">
            <button type="button" className="btn btnPrimary p-4">
              Search
            </button>
          </div>
        </div>
        <div className="cont row mt-2" style={{ width: "250px" }}>
          <div className="col-lg-3 selection-text ">Show</div>
          <div className="col-lg-4">
            <select
              style={{ width: "60px", padding: "5px 5px" }}
              aria-label="2"
            >
              <option selected>10</option>
              <option value="1">50</option>
              <option value="2">all</option>
            </select>
          </div>
          <div className="col-lg-4 selection-text">
            <p>entries</p>
          </div>
        </div>

        <div className="row rowContainer">
          <div className="col-lg-2 colSmall">
            <button type="button" className="btn btninkBlue ">
              Copy
            </button>
          </div>
          <div className="col-lg-2 colSmall">
            <button type="button" className="btn btninkBlue ">
              CSV
            </button>
          </div>
          <div className="col-lg-2 colSmall">
            <button type="button" className="btn btninkBlue ">
              Excel
            </button>
          </div>
          <div className="col-lg-2 colSmall">
            <button type="button" className="btn btninkBlue ">
              PDF
            </button>
          </div>
          <div className="col-lg-3 printCol ">
            <button type="button" className="btn btninkBlue ">
              Print all (not just Selected)
            </button>
          </div>
          <div className="col-lg-4">
            <div className="mb-3 row">
              <label className="col-sm-4 col-form-label">Search : </label>
              <div className="col-sm-7">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                />
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: "100%", overflowX: "scroll" }}>
          <table
            id="dtBasicExample"
            className="table table-striped table-bordered table-sm"
            cellSpacing="0"
            width="100%"
          >
            <thead>
              <tr>
                <th className="th-sm tableHead ">#</th>
                <th className="th-sm tableHead ">Type</th>
                <th className="th-sm tableHead">Transaction ID</th>
                <th className="th-sm tableHead ">Customer No</th>
                <th className="th-sm tableHead ">Mobile No</th>
                <th className="th-sm tableHead ">Operator</th>
                <th className="th-sm tableHead">Amount</th>
                <th className="th-sm tableHead">Status</th>
                <th className="th-sm tableHead">Date</th>
                <th className="th-sm tableHead">Recharge Type</th>
                <th className="th-sm tableHead">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01</td>
                <td>23145321</td>
                <td>12/12/2022</td>
                <td>1234567891</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
                <td>System Architect</td>
                <td>1%</td>
                <td>2%</td>
                <td>1%</td>
                <td>2%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
};

export default RechargeReport;
