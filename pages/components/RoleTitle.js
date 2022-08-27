import React, { Component } from 'react'
import Typed from 'typed.js';

import style from '../css/RoleTitle.module.css';

export default class RoleTitle extends Component {

    componentDidMount(){

        this.typed = new Typed(this.el,{
            strings: ['Azure','Systems','Full Stack','Cloud'],
            backSpeed: 40,
            typeSpeed: 50,
            loop:true
          });

    }

    componentWillUnmount(){
        this.typed.destroy();
    }

  render() {
    return (
        <div className={style.roleTitleContainer} >
            <div ref={(el) => {this.el = el; }} className={style.roleTitleBlue} >Azure</div>
            <div className={style.roleTitleOrange} >Developer</div>
        </div>
    )
  }
}
