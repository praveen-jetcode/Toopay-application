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
      <div id="navbar-wrapper" className="row">
        <div className="col-3">
          <Logo />
        </div>
        <div className="col-9">
          <a href="#" className="navbar-brand" id="sidebar-toggle">
            <i className="fa fa-bars"></i>
          </a>
        </div>
      </div>
      <div id="wrapper">
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
