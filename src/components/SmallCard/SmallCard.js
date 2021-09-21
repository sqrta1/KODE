import './SmallCard.css';

function SmallCard(props) {
    return(
        <div className='smallcard' onClick={props.onClick}>
            <div className='smallcard-image'><img src={props.img}></img></div> 
            <div className='smallcard-author'>By {props.author}</div>
        </div>
    )
}

export default SmallCard;