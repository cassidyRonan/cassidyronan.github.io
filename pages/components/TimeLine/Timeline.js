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
import styles from '../../css/Timeline/Timeline.module.css';
import TimelineNode from './TimelineNode';

export default class Timeline extends Component {

    constructor(props){
        super(props);

        this.isLeft = true;

        

      this.createNode = this.createNode.bind(this);
    }

    createNode(isLeft,heading,body,date,logo){
        this.isLeft = !isLeft;
        return(<TimelineNode date={date} heading={heading} body={body} isLeft={isLeft} logo={logo} />);
    }

    createTimeLineList(){
        return(
            <>
            {
                this.props.nodeList.map((node) => this.createNode(this.isLeft,node.heading,node.body,node.date,node.logo))
            }
            </>
        );
    }

    render() {
        return (
            <div className={styles.timeline}>
                {this.createTimeLineList()}
            </div>
        );
    }

}
