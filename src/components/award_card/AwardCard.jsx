import './AwardCard.css'

function AwardCard(props){
    return (
        <div class='award-box'>
            <div class="bar" style={{backgroundColor:props.color}}></div>
            <div>
                <div class="organization-name">{props.org}</div>
                <div class="award-name">{props.award}</div>

            </div>
        </div>
    )
}

export default AwardCard