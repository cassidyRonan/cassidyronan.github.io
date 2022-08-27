/*
*   The Header component
*
*   @author Ronan Cassidy
*/

//Library Imports
import React, { Component } from 'react';

//CSS Stylesheet Imports
import styles from '../css/ProfilePortrait.module.css';

export default class ProfilePortrait extends Component {
  render() {
    return (
        <div className={styles.profileHeaderContainer}>
                <img className={styles.profilePortraitImage} src={'/profile.jpg'} />
        </div>
    )
  }
}
