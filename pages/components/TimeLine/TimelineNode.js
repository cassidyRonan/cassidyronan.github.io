/*
*   The Timeline component
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
import styles from '../../css/Timeline/TimelineNode.module.css';

export default class TimelineNode extends Component {

    render() {
        return (
            <div className={styles.container + " " + (this.props.isLeft ? styles.left : styles.right)}>
                <div className={styles.content}>
                    <div className={styles.timelineNodeHeader} >
                        <img className={styles.timelineNodeImg} src={this.props.logo}/>
                        <div className={styles.timelineNodeDate} >{this.props.date}</div>
                    </div>
                    <div className={styles.timelineNodeHeading} >{this.props.heading}</div>
                    <div className={styles.timelineNodeBody} >{this.props.body}</div>
                </div>
            </div>
        );
    }

}
