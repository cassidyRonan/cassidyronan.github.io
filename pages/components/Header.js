/*
*   The Header component
*
*   @author Ronan Cassidy
*/

//Library Imports
import React, { Component } from 'react';

//CSS Stylesheet Imports
import styles from '../css/Header.module.css';

//Image References
//import logo from ;

export default class Header extends Component {
  render() {
    return (
      <div className={styles.headerBackdrop}>
        <img className={styles.headerLogo} src={'/logo.svg'} />
      </div>
    )
  }
}
