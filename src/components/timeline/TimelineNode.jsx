import './TimelineNode.css'

function TimelineNode({details,isLeft}){
    return (
        <div key={details.heading} className={'timeline-node-container' + " " + (isLeft ? 'timeline-node-left' : 'timeline-node-right')}>
            <div className={'timeline-node-content' + " " + (isLeft ? 'timeline-node-content-left-spacer':'timeline-node-content-right-spacer')}>
                <div className='timeline-node-header' >
                    <img className='timeline-node-img' src={details.logo} alt={details.alt}/>
                    <div className='timeline-node-date' >{details.date}</div>
                </div>
                <div className='timeline-node-heading' >{details.heading}</div>
                <hr/>
                <div className='timeline-node-body' >{details.body}</div>
            </div>
        </div>
    )
}

export default TimelineNode;