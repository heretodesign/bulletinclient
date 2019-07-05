import React, { Component } from 'react';
import { Button, Columns, Navbar, Header} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'


function TopNav() {

  return (
    <>
        <section className="is-paddingless-horizontal topNav has-background-info">
            <div className="container grid">
                <div className="firstsection">
                    <p className="subtitle is-6 has-text-white isdata">Making Communication flawless since 1890s</p>
                 </div>
            </div>
        </section>
    </>
  );
}

export default TopNav;
