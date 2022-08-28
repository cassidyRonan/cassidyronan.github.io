/*
*   The CertificationCard component
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
import styles from '../css/CertificationCard.module.css';

export default class CertificationCard extends Component {
  render() {
    return (
        <div className={styles.certificationCardContainer}>
            <div className={styles.certificationCard}>
                <img className={styles.certificationCardProvider} src={String(this.props.provider)} />
                <img className={styles.certificationCardImage} src={String(this.props.image)} />
                <div className={styles.certificationCardLabel} >{this.props.label}</div>
            </div>

            <div className={styles.certificationCardBack} />
        </div>
      
    )
  }
}
