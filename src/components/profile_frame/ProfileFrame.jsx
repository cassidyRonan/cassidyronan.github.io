import './ProfileFrame.css'
import ProfilePicture from '../../assets/Ronan_2.jpg'

function ProfileFrame(props){
    return(
        
            <div className="item" style={props.itemStyle}>
                <div className="polaroid">
                    <img src={ProfilePicture}/>
                    <div className="caption">Ronan Cassidy</div>
                </div>
            </div>
        
    )
}

export default ProfileFrame