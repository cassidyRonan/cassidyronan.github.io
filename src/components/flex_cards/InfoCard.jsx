import './InfoCard.css'

function InfoCard(props){
    return(
        <div className={props.wide ? "cardWrapperWide" : "cardWrapper"}>
            {props.children}
        </div>
    )
}

export default InfoCard