import Link from "next/link";
import { useState } from "react";
import "../../styles/Layout.module.css";
import { Heads } from "./Head";

export const Sidebar = ({ item }: any) => {
  const [dash, setdash] = useState(false);
  const [utility, setUtility] = useState(false);
  const [report, setReport] = useState(false);
  const [support, setSupport] = useState(false);
  const [logout, setLogout] = useState(false);

  console.log(item, "itemss");
  return (
    <>
      <Heads />
      <aside id="sidebar-wrapper">
        <div
          onClick={() => setdash(!dash)}
          className={
            dash ? "sidebar-item-dashboard open " : "sidebar-item-dashboard"
          }
        >
          <div className="sidebar-title">
            <span>
              <i className="fa fa-tachometer menu-icon" aria-hidden="true"></i>
              Dashboard
            </span>
            <i className="fa fa-chevron-down toggle-btn" aria-hidden="true"></i>
          </div>
          <div className="sidebar-content">
            <ul>
              <li>
                <Link className="link" href="/Dashboard/Mydashboard">
                  My Dashboard
                </Link>
              </li>
              <li>
                <Link className="link" href="/Dashboard/Mywallet">
                  My Wallet
                </Link>
              </li>
              <li>
                <Link className="link" href="/Dashboard/Myprofile">
                  My Profile
                </Link>
              </li>
              <li>
                <Link className="link" href="/Dashboard/Changepassword">
                  Change Password
                </Link>
              </li>
              <li>Set TPIN</li>
            </ul>
          </div>
        </div>
        <div
          onClick={() => setUtility(!utility)}
          className={
            utility ? "sidebar-item-utility open " : "sidebar-item-utility"
          }
        >
          <div className="sidebar-title">
            <span>
              <i className="fa fa-fax menu-icon" aria-hidden="true"></i>
              Utility Services
            </span>
            <i className="fa fa-chevron-down toggle-btn" aria-hidden="true"></i>
          </div>
          <div className="sidebar-content">
            <ul>
              <li>Gas Bill</li>
              <li>Water Bill</li>
              <li>Electricity Bill</li>
            </ul>
          </div>
        </div>
        <div
          onClick={() => setReport(!report)}
          className={
            report ? "sidebar-item-report open " : "sidebar-item-report"
          }
        >
          <div className="sidebar-title">
            <span>
              <i className="fa fa-list menu-icon" aria-hidden="true"></i>
              Report
            </span>
            <i className="fa fa-chevron-down toggle-btn" aria-hidden="true"></i>
          </div>
          <div className="sidebar-content">
            <ul>
              <li>
                <Link className="link" href="/Report/MerchantCertificate">
                  Merchant
                </Link>
              </li>
              <li>
                <Link className="link" href="/Report/TdsLetter">
                  TdsLetter
                </Link>
              </li>
              <li>My Profile</li>
              <li>Change Password</li>
              <li>Set TPIN</li>
            </ul>
          </div>
        </div>
        <div
          onClick={() => setSupport(!support)}
          className={
            support ? "sidebar-item-support open" : "sidebar-item-support"
          }
        >
          <div className="sidebar-title">
            <span>
              <i className="fa fa-cogs menu-icon" aria-hidden="true"></i>
              Support
            </span>
            <i className="fa fa-chevron-down toggle-btn" aria-hidden="true"></i>
          </div>
          <div className="sidebar-content">
            <ul>
              <li>
                <Link className="link" href="/Support/Complaints">
                  Complaints
                </Link>
              </li>
              <li>My Wallet</li>
              <li>My Profile</li>
              <li>Change Password</li>
              <li>Set TPIN</li>
            </ul>
          </div>
        </div>
        <div
          onClick={() => setLogout(!logout)}
          className={
            logout ? "sidebar-item-logout open " : "sidebar-item-logout"
          }
        >
          <div className="sidebar-title">
            <span>
              <i style={{ fontSize: 18 }} className="material-icons">
                logout
              </i>
              Log Out
            </span>
          </div>
        </div>
      </aside>
    </>
  );
};
