import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";
import { Sidebar } from "./Sidebar";
import "../../styles/Layout.module.css";

export const Layout = ({ children }: any) => {
  const [open, setOpen] = useState(false);
  console.log(open, "opennn");

  return (
    <>
      <div id="navbar-wrapper" style={{ position: "fixed", zIndex: 6 }}>
        <div className="logo-container">
          <Logo />
        </div>
        <div className="Bars">
          <a href="#" className="navbar-brand" id="sidebar-toggle">
            <button className="btn btn-dark">
              {" "}
              <i className="fa fa-bars"></i>
            </button>
          </a>
        </div>
      </div>
      <div id="wrapper" style={{ zIndex: 1 }}>
        <Sidebar />

        <section id="content-wrapper">
          <div className="row">
            <div className="col-lg-12">{children}</div>
          </div>
        </section>
      </div>
    </>
  );
};
