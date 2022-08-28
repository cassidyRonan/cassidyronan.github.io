/*
*   The SectionHeader component
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
import styles from '../css/Divider.module.css';

export default class Divider extends Component {
  render() {
    return (
      <div className={styles.sectionDivider} />
    )
  }
}
