import React from "react";
import './TerminalCard.css'

function TerminalCard(props){
    return(
        <div className='terminalContainer'>
                    <div className='terminalHeader'>
                        <div>{props.title}</div>
                        <div>X</div>
                    </div>
                    <div className='terminalBox'>
                        <div className='scanlines'>
                            <div className='terminalSpacer'>
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default TerminalCard