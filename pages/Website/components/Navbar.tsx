import { Logo } from "../../components/Logo";

const Navbar = () => {
  return (
    <>
      <div
        id="navbar-wrapper"
        className="container-fluid "
        style={{ position: "fixed", zIndex: 6, backgroundColor: "white" }}
      >
        <div className="row">
          <div className=" col-lg-4" style={{ paddingLeft: 75 }}>
            <Logo />
          </div>
          <div className="col-lg-8">
            <div className="row">
              <div className="col-sm-2 col-md-2 col-lg-2 p-2">
                <p className="Navtext1 ">Home</p>
              </div>
              <div className="col-sm-2 col-md-2 col-lg-2 p-2">
                <p className="Navtext1 ">About</p>
              </div>
              <div className="col-sm-2 col-md-2 col-lg-2 p-2">
                <p className="Navtext1 ">Bill Payment</p>
              </div>
              <div className="col-sm-2 col-md-2 col-lg-2 p-2">
                <p className="Navtext1 ">Contact</p>
              </div>
              <div className="col-sm-2 col-md-2 col-lg-2 p-2">
                <p className="Navtext1 ">Login</p>
              </div>
              <div className="col-sm-2 col-md-2 col-lg-2 p-2">
                <p className="Navtext1 ">Register</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar();
