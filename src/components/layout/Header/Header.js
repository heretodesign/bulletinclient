import React, { Component } from 'react';
import TopNav from './TopNav.js'
import BottomNav from './BottomNav.js'


class Header extends React.Component {

  render() {
    return (
      <div className="navbarMain">
        <TopNav />
        <BottomNav />
      </div>
    );
  }
}

export default Header;
