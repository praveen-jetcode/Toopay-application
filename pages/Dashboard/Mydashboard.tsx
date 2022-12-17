/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import { Heads } from "../components/Head";
import "../../styles/Dashboard/Mydashboard.module.css";
import Footer from "../components/Footer";
// import Marquee from "react-fast-marquee";


const Mydashboard = () => {
  return (
    <>
      <div className="section">
        <div className="row mb-3">
          <div className="col-md-8 mb-4 mt-4">
            <img
              src="https://toopay.in/assets-dashboard/images/banners/banner5.jpg"
              className="img-fluid"
            />
          </div>
          <div className="col-md-4 mt-4 d-flex">
            <div className="latest_updates">
              <div className="update_head">Latest Updates</div>
              <div className="news_ticker">
                {/* <Marquee  direction='right'>
                No Notification Available
                </Marquee> */}
                   <div className="marquee marquee-top">
  <div className="marquee-inner">
     <span className="marquee-inner-item">You spin me right round, baby. Like a record, baby.</span>
    <span className="marquee-inner-item">You spin me right round, baby. Like a record, baby.</span>
  </div>
  <span className="marquee-inner-item--hidden">You spin me right round, baby. Like a record, baby.</span>
</div>
              </div>
            </div>
          </div>
        </div>

        <div className="container pt-3">
          <div className="row">
            <div className="col-md-5 mb-3">
              <div className="col-md-12 m-0 mb-3 p-0">
                <span className="text-white">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <input type="radio" value="Wallet3" />
                          <label>Add Money</label>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </span>
                <div className="d-flex wallet-load">
                  <input
                    type="number"
                    maxLength={7}
                    className="form-control border-1 text-secondary"
                    placeholder="Enter Amount"
                  />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="input-group-btn">
                    <input
                      type="submit"
                      value="PROCESS"
                      className="btn btn-primary rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* <div className="container">
          <div className="row">
            <div className="col-md-2 col-12 col-sm-3 col-lg-3">
              <div className="card-counter info">
                <a href="#" className="link">
                  <div className="row">
                    <div className="col-4">
                      <img
                        src="https://toopay.in/assets-dashboard/images/Water.png"
                        width="100%"
                      />
                    </div>
                    <div className="col-8">
                      <span className="bottomcontent">
                        Water Bill <br />
                        Payment
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-2 col-12 col-sm-3 col-lg-3">
              <div className="card-counter info">
                <a href="#" className="link">
                  <div className="row">
                    <div className="col-4">
                      <img
                        src="https://toopay.in/assets-dashboard/images/Electricity.png"
                        width="100%"
                      />
                    </div>
                    <div className="col-8">
                      <span className="bottomcontent">
                        Electricity Bill Payment
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-2 col-12 col-sm-3 col-lg-3">
              <div className="card-counter info">
                <a href="#" className="link">
                  <div className="row">
                    <div className="col-4">
                      <img
                        src="https://toopay.in/assets-dashboard/images/Gas.png"
                        width="100%"
                      />
                    </div>
                    <div className="col-8">
                      <span className="bottomcontent">
                        Piped Gas Bill Payment
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div> */}
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6 col-lg-3">
              <div className="card-counter info">
                <a href="#" className="link">
                  <div className="row">
                    <div className="col-2 col-sm-4 col-md-4"><img src="https://toopay.in/assets-dashboard/images/Water.png"
                      width="100%" /></div>
                    <div className="col-8"><span className="bottomcontent">Water Bill <br />
                      Payment</span></div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-lg-3">
              <div className="card-counter info">
                <a href="#" className="link">
                  <div className="row">
                    <div className="col-2 col-sm-4 col-md-4"><img src="https://toopay.in/assets-dashboard/images/Electricity.png"
                      width="100%" /></div>
                    <div className="col-8"><span className="bottomcontent">Electricity Bill
                      Payment</span></div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-lg-3">
              <div className="card-counter info">
                <a href="#" className="link">
                  <div className="row">
                    <div className="col-2 col-sm-4 col-md-4"><img src="https://toopay.in/assets-dashboard/images/Gas.png"
                      width="100%" /></div>
                    <div className="col-8"><span className="bottomcontent">Piped Gas Bill
                      Payment</span></div>
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
      
    </>
  );
};

export default Mydashboard;
