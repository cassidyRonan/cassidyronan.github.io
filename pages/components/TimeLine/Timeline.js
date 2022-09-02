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

    }

    createNode(isLeft,heading,body,date,logo){
        this.isLeft = !isLeft;
        return(<TimelineNode date={date} heading={heading} body={body} isLeft={isLeft} logo={logo} />);
    }

    render() {
        return (
            <div className={styles.timeline}>
                {
                    this.createNode(this.isLeft,this.props.nodes[0].heading,this.props.nodes[0].body,this.props.nodes[0].date,this.props.nodes[0].logo)
                }
                {
                    this.createNode(this.isLeft,this.props.nodes[1].heading,this.props.nodes[1].body,this.props.nodes[1].date,this.props.nodes[1].logo)
                }
                {
                    this.createNode(this.isLeft,this.props.nodes[2].heading,this.props.nodes[2].body,this.props.nodes[2].date,this.props.nodes[2].logo)
                }
                {
                    this.createNode(this.isLeft,this.props.nodes[3].heading,this.props.nodes[3].body,this.props.nodes[3].date,this.props.nodes[3].logo)
                }
                {
                    this.createNode(this.isLeft,this.props.nodes[4].heading,this.props.nodes[4].body,this.props.nodes[4].date,this.props.nodes[4].logo)
                }
                {
                    this.createNode(this.isLeft,this.props.nodes[5].heading,this.props.nodes[5].body,this.props.nodes[5].date,this.props.nodes[5].logo)
                }
            </div>
        );
    }

}
