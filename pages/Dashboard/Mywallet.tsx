import { Card } from "../components/Card";
import { Heads } from "../components/Head";

const Mywallet = () => {
  return (
    <>
      <Card Header={"My Wallet"}>
        <button type="button" className="btn btnPrimary">
          Fund Request
          <span>
            <i className="fa fa-plus-circle" aria-hidden="true"></i>
          </span>
        </button>
        <hr />
        <div className="row">
          <div className="col-lg-4">
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
          <div className="col-lg-4">
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
          <div className="col-lg-4  btn-container">
            <button type="button" className="btn btnPrimary">
              Search
            </button>
          </div>
        </div>
        <div className="selection">
          <div className="selection-text">Show</div>
          <div>
            <select
              style={{ width: "57px", padding: "5px 5px" }}
              className="form-select"
              aria-label="2"
            >
              <option selected>10</option>
              <option value="1">50</option>
              <option value="2">all</option>
            </select>
          </div>
          <div className="selection-text">entries</div>
        </div>
        {/* <div className="containerRow">
          <div className="btnCol">
            <button type="button" className="btn btninkBlue ">
              Copy
            </button>
          </div>
          <div className="btnCol">
            <button type="button" className="btn btninkBlue ">
              CSV
            </button>
          </div>
          <div className="btnCol">
            <button type="button" className="btn btninkBlue ">
              Excel
            </button>
          </div>
          <div className="btnCol">
            <button type="button" className="btn btninkBlue ">
              PDF
            </button>
          </div>
          <div className="btnCol">
            <button type="button" className="btn btninkBlue ">
              Print all (not just Selected)
            </button>
          </div>
        </div> */}

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
                <th className="th-sm tableHead">DATE</th>
                <th className="th-sm tableHead">PARTICULARS</th>
                <th className="th-sm tableHead">CREDIT</th>
                <th className="th-sm tableHead">DEBIT</th>
                <th className="th-sm tableHead">BALANCE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
};

export default Mywallet;
