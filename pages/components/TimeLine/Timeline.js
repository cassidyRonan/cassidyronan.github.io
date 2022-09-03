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

        this.nodeList = [{date:'2022 - Present',heading:'Azure/ Full Stack Developer',logo:'/experienceLogos/tcs.png',body:(<div>Research &#38; Development of Azure-based Proof of Concepts with international teams to showcase potential features and technologies to be utilized across a variety of projects company-wide.<br/><br/> Responsible for Backend, Frontend Web &#38; API development on current project.</div>)},
        {date:'2021 - 2022',heading:'Graduate Systems Developer',logo:'/experienceLogos/tcs.png',body:(<div>Experience with Full Stack development and a key focus on the use of Microsoft related technologies such as ASP.Net Core, C#, Microsoft SQL Server and Microsoft Azure.<br/><br/> Other skills developed include front-end technologies such as Angular and React.</div>)},
        {date:'2020 - 2021',heading:'BSc (Hons) in Software Development',logo:'/experienceLogos/itSligo.png',body:(<div><div>Grade: First Class Honours (Prize Winner Award)</div><br/><div>Modules: (GPA: 78.75%)</div><div>Artificial Intelligence, Machine Learning, Data Analytics, Cloud Development, User Experience (UX), Advanced Programming, Software Application Security Testing, Secure Software Development, Strategic Technology Management, Startup Engineering, Project 400</div></div>)},
        {date:'2019',heading:'WPF Developer',logo:'/experienceLogos/ans.jpg',body:(<div>Design and implementation of Inventory Management System to meet client business requirements. <br/>Provided range of functionality such as asset location, stock management and job tracking. <br/>Migration of pre-existing data to the new system and integrating of barcode scanning technology. <br/><br/> Technology stack implemented:<br/>.NET framework(C#),JSON,Windows Presentation Foundation (WPF),SQLite </div>)},
        {date:'2017 - 2020',heading:'BSc in Games Development',logo:'/experienceLogos/itSligo.png',
          body:(
            <div>
              <div>Grade: Distinction (Prize Winner Award)</div>
              <br/>
              <div>Year 1 Modules: (GPA: 91.41%)</div>
              <div>Personal Development, Intro To Programming 1 &#38; 2 using C#, Computer Systems and Networking 1 &#38; 2, Design Thinking, Game Design Fundamentals, Mathematics 1 &#38; 2, Game Design and Programming, Web Design Fundamentals, Internet of Things</div>
              <br/>
              <div>Year 2 Modules: (GPA: 87.75%)</div>
              <div>Maths 3 &#38; 4, Requirements Engineering, Foundation Object-Oriented Programming 201 &#38; 202, Web Programming 1 &#38; 2, 2D Games Programming, Game Content Design 1 &#38; 2, Software Dsign, Data Structures &#38; Algorithims</div>
              <br/>
              <div>Year 3 Modules: (GPA: 84.60%)</div>
              <div>Software Project Management, 3D Game Engine Programming, Casual Gaming, Rich Application Development 301 &#38; 302, Professional Development, Software Quality &#38; Testing, 3D Graphics for Game Programmers, Project 300, Work Placement Substitution Project</div>
            </div>)},
        {date:'2017',heading:'Lab Technician',logo:'/experienceLogos/ans.jpg',body:(<div>Responsible for a variety of tasks including inspection preperation, certification distribution, inventory management and various other day to day tasks. <br/>Provided a base knowledge of the Non Destructive Testing (NDT) domain.</div>)},
      ];

      this.createNode = this.createNode.bind(this);
    }

    createNode(isLeft,heading,body,date,logo){
        this.isLeft = !isLeft;
        return(<TimelineNode date={date} heading={heading} body={body} isLeft={isLeft} logo={logo} key={heading} />);
    }

    createTimeLineList(){
        return(
            <>
            {
                this.nodeList.map((node) => this.createNode(this.isLeft,node.heading,node.body,node.date,node.logo))
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
