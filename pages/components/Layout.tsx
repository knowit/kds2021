import "../../styling/headerStyles.scss";
import "../../styling/styling.scss";
import Head from 'next/head';
import Menu from "./Menu";
import Filter from "./Filter";
import Link from "next/link";
import React from 'react';
import ApiHandler from '../../helpers/apiHandler';
import Loader from './Loader';
import Router from 'next/router';

interface IProps {
  hideLogo?: 'small' | 'large' | boolean
  header?: any
  filter?: 'small' | 'large' | boolean
  onTagChange?: (tags: string[]) => void
  onFavoriteChange?: (val: boolean) => void
  selectedTags?: string[]
  showOnlyFavorites?: boolean
  background?: boolean
  title?: string
}

interface IState {
  from: Date | 'TBA',
  to: Date | 'TBA',
  loadingDates: boolean
}

class Layout extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      from: 'TBA',
      to: 'TBA',
      loadingDates: true
    }
  }

  async componentDidMount() { 
    const id = Router.asPath.split('id=')[1];
    const res = await ApiHandler.getProgramDuration(id);
    this.setState({
      from: res.from,
      to: res.to,
      loadingDates: false
    });
  }

  render() {
    return (
      <div className="layout">
        <Head>
          <title>{this.props.title || 'Knowit Developer Summit'}</title>
        </Head>
        <div className="menuAndHeader">
          <div className="header">
            {this.props.hideLogo !== true && (<Link href="/">
              <img id="KDSlogo" className={this.props.hideLogo ? `hide-${this.props.hideLogo}` : ''} src="../static/KDSsymbol.svg" />
            </Link>)}
            <div id="KDSheader">
              <h2 className="headline">
                By Developers, For Developers
            </h2>
              <h3 className="header-location">
                <Loader loading={this.state.loadingDates}>
                  <React.Fragment>

                    <img id="location-img" src="../static/location.svg" />
                    {!this.state.loadingDates && (this.state.from == 'TBA'
                      ? <span>Time and location has not yet been announced</span>
                      : <span>Bergen Norway {(this.state.from as Date).toDateString()} - {(this.state.to as Date).toDateString()}</span>
                    )}

                  </React.Fragment>
                </Loader>
                <hr />
              </h3>
              {this.props.header}
            </div>
          </div>
          <div className="filter-pos">
            {this.props.filter && <Filter onTagChange={this.props.onTagChange} onFavoriteChange={this.props.onFavoriteChange} showOnlyFavorites={this.props.showOnlyFavorites} selectedTags={this.props.selectedTags} className={typeof this.props.filter === 'string' ? `show-${this.props.filter}` : ''} />}
          </div>

          <Menu />
        </div>
        {this.props.background && <img src="../static/code.svg" className="background" />}
        <div className="content">
          {this.props.children}
        </div>
      </div >
    );
  }
}


export default Layout;