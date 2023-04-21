import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderSearchForm from "../../components/HeaderSearchForm";
import Sidebar from "../../components/Sidebar";
import navigatorData from "../../data/navigator.json";
import {
  About,
  Blog,
  Classes,
  Contact,
  Event,
  Home,
  Pages,
  Program,
  Shop,
  Teacher,
} from "./Menus";

const Header = () => {
  useEffect(() => {
    document.querySelector("body").className =
      "counter-scroll header-fixed inner-page";
  }, []);
  const [form, setForm] = useState(false);
  const [sidebarToggle, setSidebarToggle] = useState(false);

  return (
    <header id="header" className="d-none d-xl-block">
      <div className="top-bar">
        <div className="inner jus-ct">
          <p className="clr-pri-1">
            Lịch học : Thứ 2 - Thứ 7, 08:00 - 17:00
          </p>
        </div>
      </div>
      <div id="site-header" className="">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="site-header-inner fx">
                <div id="site-logo" className="clearfix">
                  <Link href="/">
                    <a className="logo">
                      <img src="assets/images/logo/logo.png" alt="Kinco" />
                    </a>
                  </Link>
                </div>
                <div className="btn-menu">
                  <span />
                </div>
                <div className="nav-wrap">
                  <nav id="mainnav" className="mainnav st-2">
                    <ul className="menu">
                      <li className="menu-item">
                        <Link href={navigatorData.HOME.href}>
                          <a>{navigatorData.HOME.title}</a>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link href={navigatorData.NOTICE.href}>
                          <a>{navigatorData.NOTICE.title}</a>
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link href={navigatorData.TIME_TABLE.href}>
                          <a>{navigatorData.TIME_TABLE.title}</a>
                        </Link>
                        <ul className="sub-menu">
                          {navigatorData.TIME_TABLE.subMenu.map((item, index) => (
                            <li key={index}>
                              <Link href={item.href}>
                                <a>{item.title}</a>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li className="menu-item">
                        <Link href={navigatorData.CLASSES.href}>
                          <a>{navigatorData.CLASSES.title}</a>
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link href={navigatorData.PARENT.href}>
                          <a>{navigatorData.PARENT.title}</a>
                        </Link>
                        <ul className="sub-menu">
                          {navigatorData.PARENT.subMenu.map((item, index) => (
                            <li key={index}>
                              <Link href={item.href}>
                                <a>{item.title}</a>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li className="menu-item">
                        <Link href={navigatorData.CONTACT.href}>
                          <a>{navigatorData.CONTACT.title}</a>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link href={navigatorData.ABOUT.href}>
                          <a>{navigatorData.ABOUT.title}</a>
                        </Link>
                      </li>
                    </ul>
                    {/* /.menu */}
                  </nav>
                </div>

              </div>
            </div>
          </div>
        </div>
        <Sidebar show={sidebarToggle} close={() => setSidebarToggle(false)} />
      </div>
      <div />
    </header>
  );
};
export default Header;
