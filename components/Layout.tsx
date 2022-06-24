import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Filter, Menu } from "../components";

interface LayoutProps {
  hideLogo?: "small" | "large" | boolean;
  header?: any;
  background?: boolean;
  title?: string;
  children: any;
}

const Layout = ({
  hideLogo,
  header,
  background,
  title,
  children,
}: LayoutProps) => {
  return (
    <div className="layout">
      <Head>
        <title>{title || "Knowit Developer Summit"}</title>
      </Head>
      <div className="menuAndHeader">
        <div className="header">
          {hideLogo !== true && (
            <Link href="/">
              <a>
                <img
                  id="KDSlogo"
                  className={hideLogo ? `hide-${hideLogo}` : ""}
                  src="/KDSsymbol.svg"
                />
              </a>
            </Link>
          )}
          {/*<div id="KDSheader">
            <h2 className="headline">By Developers, For Developers</h2>
            <h3 className="header-location">
              <img id="location-img" src="/location.svg" />
              Stockholm, Sweden 12 - 13 November 2021
              <hr />
            </h3>
            {header}
          </div> */}
        </div>
        <Menu />
      </div>
      {background && <img src="/code.svg" className="background" />}
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
