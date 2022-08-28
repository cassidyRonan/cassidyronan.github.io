/*
*   The Navbar component
*
*   ToDo:
*   -
*
*   Last Updated: [28/08/22 11:03 UTC]
*   -
*
*   @author [Ronan Cassidy]
*/

//Library Imports
import React, { Component } from 'react';

//CSS Stylesheet Imports
import styles from '../css/Navbar.module.css';

export default class Navbar extends Component {
  render() {
    return (
      <div className={styles.navBackdrop}>
        <img className={styles.navLogo} src={'/logo.svg'} />
      </div>
    )
  }
}
