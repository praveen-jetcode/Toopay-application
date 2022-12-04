import { Logo } from "../components/Logo";
import "../../styles/Loginpage.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const Router = useRouter();

  const handleLogin = () => {
    console.log("clicked");
    if (userName === "admin" && password === "admin") {
      localStorage.setItem("token", "token");
      Router.refresh();
    }
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-lg-6">a</div>
          <div className="col-lg-6 ">
            <div className="row mt-2 pt-5">
              <div className="col-lg-12">
                <Logo />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-lg-12">
                <p className="title"> Login</p>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-12">
                    <label>USERNAME</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <input
                      onChange={(e) => setUserName(e.target.value)}
                      style={{ borderBottom: "1px solid black", padding: 0 }}
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-12">
                    <label>PASSWORD</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      style={{ borderBottom: "1px solid black", padding: 0 }}
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-lg-8">
                <button className="btn btnDanger" onClick={handleLogin}>
                  LOG IN
                </button>
              </div>
              <div className="col-lg-4">
                <div className="row">
                  <div className="col-lg-12 ">
                    <a href="#" className="linkText">
                      Forgot Password
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <a
                      href="#"
                      style={{ marginLeft: "86px" }}
                      className="linkText"
                    >
                      Signup
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
