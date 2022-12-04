import { Card } from "../components/Card";

const TopupReqReport = () => {
  return (
    <>
      <Card Header={"Topup Request Report"}>
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
                <th className="th-sm tableHead ">Request Date</th>
                <th className="th-sm tableHead">Request To</th>
                <th className="th-sm tableHead ">Amount</th>
                <th className="th-sm tableHead ">Txn Mode</th>
                <th className="th-sm tableHead ">Txn ID</th>
                <th className="th-sm tableHead">Details</th>
                <th className="th-sm tableHead">Reply Received</th>
                <th className="th-sm tableHead">Payment Proof</th>
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
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
};

export default TopupReqReport;
