import './PaperCard.css'

function PaperCard({children}){
    return(<div className='paper'>
        {children}
        <div className="float-handler"></div>
    </div>)
}

export default PaperCard