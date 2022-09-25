/*
*   The PortfolioCard component
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
import styles from '../css/PortfolioCard.module.css';

export default class PortfolioCard extends Component {
  render() {
    return (
        <div className={styles.portfolioCardContainer}>
            <div className={styles.portfolioCard}>
                {
                    (this.props.isCompanyText === true ? 
                    (<div className={styles.portfolioCardTitle} >{this.props.company}</div>) : 
                    (<img className={styles.portfolioCardProvider} src={this.props.companyLogo} />))
                }
                
                <div className={styles.portfolioCardLabelContainer}>
                    {
                        (this.props.title ? 
                            (<div className={styles.portfolioCardLabel}>{this.props.title}</div>) : 
                            (<img className={styles.portfolioCardLabelImage} src={this.props.projectLogo} />) 
                        )
                    }
                </div>

                <div className={styles.portfolioStackContainer}>
                    {
                        this.props.techStack ? 
                        (this.props.techStack.map((tech) => (<img src={tech} className={styles.portfolioStackImage} />)))
                        : (<></>)
                    }
                </div>

                {this.props.repoLink ? (<a className={styles.portfolioCardButton} href={this.props.repoLink} target="_blank">View Repository</a>) : (<></>)}

            </div>

            <div className={styles.portfolioCardBack} />
        </div>
      
    )
  }
}
