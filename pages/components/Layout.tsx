import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";
import { Sidebar } from "./Sidebar";
import "../../styles/Layout.module.css";
import Footer from "./Footer";

export const Layout = ({ children }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        id="navbar-wrapper"
        className="container-fluid "
        style={{ position: "fixed", zIndex: 6, backgroundColor: "white" }}
      >
        <div className="row">
          <div className=" col-lg-8" style={{ paddingLeft: 75 }}>
            <Logo />
          </div>
          <div className="col-lg-4">
            <div className="row">
              <div className="col-sm-2 col-md-2 col-lg-4 p-2">
                <p className="Navtext1 textAlingRight">Main Balance</p>
                <p className="Navtext2 textAlingRight"> 2003.00</p>
              </div>
              <div className="col-sm-2 col-md-2 col-lg-4 p-2">
                <p className="Navtext1 textAlingRight">Refund Balance</p>
                <p className="Navtext2 textAlingRight"> 2003.00</p>
              </div>
              <div className="col-sm-2 col-md-2 col-lg-3 p-2">
                <p className="Navtext1 textAlingRight">Welcome</p>
                <p className="Navtext2 textAlingRight"> 2003.00</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="Bars"> */}
        {/* <a href="#" className="navbar-brand" id="sidebar-toggle"> */}
        {/* <button className="btn btn-dark">
            {" "}
            <i className="fa fa-bars"></i>
          </button> */}
        {/* </a> */}
        {/* </div> */}
      </div>
      <div id="wrapper" style={{ zIndex: 1 }}>
        <Sidebar />

        <section id="content-wrapper">
          <div className="row">
            <div className="col-lg-12">
              <div style={{height:"80vh" , overflowY:"auto",paddingLeft:30,paddingTop:10,paddingBottom:20}}>
              {children}
              </div> 
             
              <div>
              <Footer/>
               </div> 
             
            </div>
          </div>
        </section>
       
      </div>
     
    </>
  );
};

export const WebLayout = ({ children }: any) => {
  const [open, setOpen] = useState(false);

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
              <div className="col-sm-2 col-md-2 col-lg-2 p-3">
                <Link
                  className="Navtext1 colorash anchor"
                  href="/Website/HomePage"
                >
                  Home
                </Link>
              </div>
              <div className="col-sm-2 col-md-2 col-lg-2 p-3">
                <Link
                  className="Navtext1 colorash anchor"
                  href="/Website/AboutPage"
                >
                  About
                </Link>
              </div>
              <div className="col-sm-2 col-md-2 col-lg-2 p-3">
                <Link
                  className="Navtext1 colorash anchor"
                  href="/Website/AboutPage"
                >
                  Bill Payment
                </Link>
              </div>
              <div className="col-sm-2 col-md-2 col-lg-2 p-3">
                <Link
                  className="Navtext1 colorash anchor"
                  href="/Website/AboutPage"
                >
                  Contact
                </Link>
              </div>
              <div className="col-sm-2 col-md-2 col-lg-2 p-3">
                <Link
                  className="Navtext1 colorash anchor"
                  href="/Login/Loginpage"
                >
                  Login
                </Link>
              </div>
              <div className="col-sm-2 col-md-2 col-lg-2 p-3">
                <Link
                  className="Navtext1 colorash anchor"
                  href="/Website/AboutPage"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="content-wrapper">{children}</div>
    </>
  );
};
