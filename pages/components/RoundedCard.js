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
import styles from '../css/RoundedCard.module.css';

export default class RoundedCard extends Component {
  render() {
    return (
        <div className={styles.roundedCardContainer}>
            <div className={styles.roundedCard}>
                <div className={styles.cardTitle}>{this.props.title}</div>
                {this.props.children}
            </div>

            <div className={this.props.isBlue ? styles.roundedCardBackBlue : styles.roundedCardBackOrange} />
        </div>
      
    )
  }
}
