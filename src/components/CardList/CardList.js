import SmallCard from '../SmallCard/SmallCard';

import './CardList.css';

function CardList(props) {
    return(
        <div className='cardlist'>
            { (props.result && 
                (props.result).map((card, index) =>  (
                    <SmallCard  
                        onClick={props.onClick} 
                        img={card.images.small}
                        author={card.artist}
                        key={index}
                         />
                )))

            }
        </div>
    )
}

export default CardList;