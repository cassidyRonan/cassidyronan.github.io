import './Timeline.css'
import TimelineNode from './TimelineNode.jsx'  

function GenerateNodes(entries){
    let nodelist = []
    let isLeft = true
    for (let entry in entries){
        nodelist.push((<TimelineNode key={entries[entry].heading} details={entries[entry]} isLeft={isLeft}/>))
        isLeft = !isLeft
    }
    return nodelist
}

function Timeline(props){
    return (<div className='timeline-container'>
        {GenerateNodes(props.entries)}
    </div>)
}

export default Timeline;