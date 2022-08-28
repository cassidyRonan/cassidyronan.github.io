/*
*   The SectionSubheader component
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
import styles from '../../css/Headers/SectionSubheader.module.css';

export default class SectionSubheader extends Component {
  render() {
    return (
      <div className={styles.sectionSubheader} >{this.props.heading}</div>
    )
  }
}
