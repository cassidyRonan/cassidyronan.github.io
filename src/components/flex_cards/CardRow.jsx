import './CardRow.css'

function CardRow(props){
    return(
        <div className='cardRowFlex'>
            {props.children}
        </div>
    )
}

export default CardRow