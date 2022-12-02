import { Card } from "../components/Card";
import { Heads } from "../components/Head";

const Mywallet = () => {
  return (
    <>
      <Card Header={"Mywallet"}>
        <button type="button" className="btn btn-primary">
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
          <div className="col-lg-4">c</div>
        </div>
      </Card>
    </>
  );
};

export default Mywallet;
