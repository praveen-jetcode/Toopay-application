import { Card } from "../components/Card";
import "../../styles/Myprofile.module.css";

 const Myprofile = () => {
  return (
    <>

    <Card Header={"Profile Information"}>
    <div className="row">
                    <div className="col-lg-4 col-sm-12">
                        <form>
                            <div className="row">
                                <div className="col-lg-12  text-center">
                                    <div className="mb-3 mt-4">
                                        <input type="file" className="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" />
                                    </div>
                                    <button type="submit" className="btn">Update Profile Picture</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="col-lg-8 col-xs-12">
                        <div className="row pb-3">
                            <div className="col-lg-6">
                                <label className="control-label">Name</label>
                                <input type="text" className="form-control" value="Shinde Subhash" />
                            </div>
                            <div className="col-lg-6">
                                <label className="control-label">Mobile No.</label>
                                <input type="text" className="form-control" value="7972816346" />
                            </div>
                        </div>
                        <div className="row pb-3">
                            <div className="col-lg-6">
                                <label className="control-label"> Pancard No &nbsp;
                                    <img src="	https://toopay.in/myassets/images/icon/ok.png"/></label>
                                    <input type="text" className="form-control" value="S45BH454"/>
                            </div>
                            <div className="col-lg-6">
                                <label className="control-label"> Aadhaar No&nbsp;
                                    <img src="	https://toopay.in/myassets/images/icon/ok.png" /></label>
                                    <input type="text" className="form-control" value="121212121218" />
                            </div>
                        </div>
                        <div className="row pb-3">
                            <div className="col-lg-6">
                                <label className="control-label">Email Id</label>
                                <input type="text" className="form-control" value="manoj@gmail.com" / >
                            </div>
                            <div className="col-lg-6">
                                <label className="control-label">Address</label>
                                <textarea rows={2} cols={20} className="form-control">Dombivali</textarea>
                            </div>
                        </div>
                        <div className="row pb-3">
                            <div className="col-lg-6">
                                <label className="control-label">Business Name</label>
                                <input type="text" className="form-control" value="Omega" />
                            </div>
                            <div className="col-lg-6">
                                <label className="control-label">Business Address</label>
                                <textarea  rows={2} cols={20} className="form-control">Dombivali</textarea>
                            </div>
                        </div>
                        <div className="row pb-3">
                            <div className="col-lg-12 m-b-15">
                                <div className="mb-3">
                                    <label className="control-label">Business Contact No</label>
                                    <input type="text" className="form-control" value="7972816346" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 m-b-15 text-center">
                                <div className="mb-3">
                                    <input type="submit"  value="UPDATE DETAILS" className="btn" />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
    </Card>
        
    </>
  );
};

export default Myprofile;