import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Filter, Menu } from "../components";

import "../styling/headerStyles.scss";
import "../styling/styling.scss";

interface LayoutProps {
  hideLogo?: "small" | "large" | boolean;
  header?: any;
  filter?: "small" | "large" | boolean;
  onTagChange?: (tags: string[]) => void;
  onFavoriteChange?: (val: boolean) => void;
  selectedTags?: string[];
  showOnlyFavorites?: boolean;
  background?: boolean;
  title?: string;
  children: any;
}

const Layout = ({
  hideLogo,
  header,
  filter,
  onTagChange,
  onFavoriteChange,
  selectedTags,
  showOnlyFavorites,
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
              <img
                id="KDSlogo"
                className={hideLogo ? `hide-${hideLogo}` : ""}
                src="../static/KDSsymbol.svg"
              />
            </Link>
          )}
          <div id="KDSheader">
            <h2 className="headline">By Developers, For Developers</h2>
            <h3 className="header-location">
              <img id="location-img" src="../static/location.svg" />
              Stockholm, Sweden 12 - 13 November 2021
              <hr />
            </h3>
            {header}
          </div>
        </div>
        <div className="filter-pos">
          {filter && (
            <Filter
              onTagChange={onTagChange}
              onFavoriteChange={onFavoriteChange}
              showOnlyFavorites={showOnlyFavorites}
              selectedTags={selectedTags}
              className={typeof filter === "string" ? `show-${filter}` : ""}
            />
          )}
        </div>

        <Menu />
      </div>
      {background && <img src="../static/code.svg" className="background" />}
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
