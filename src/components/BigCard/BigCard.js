import './BigCard.css';

function BigCard(props) {
    return(
        <div>
        { (props.result &&
            <div className='bigcard'>
                <div className='bigcard-image'><img src={props.result.images.large}></img></div>
                <div className='bigcard-info'>
                    <div className='main-info'>
                        <p>Name: {props.result.name}</p>
                        <p>Supertype: {props.result.supertype}</p>
                        <p>Types: {props.result.types}</p>
                        <p>SubTypes: {props.result.subtypes}</p>
                    </div>
                    <div className='hr'></div>
                    <div className='secondary-info'>
                        <p>attackDamage: {props.result.attacks[0].damage}</p>
                        <p>attackCost: {props.result.attacks[0].convertedEnergyCost}</p>
                        <p>resistances: {!props.result.resistances ? 'none': props.result.resistances[0].type}</p>
                        <p>evolvesFrom: {!props.result.evolvesFrom ? 'Evolves from himself?!?!' : props.result.evolvesFrom}</p>
                    </div>
                </div>
                <div className='description'> 
                    <p>{!props.result.flavorText ? 'There is nothing I can say about this cutie :)' : props.result.flavorText}</p>
                </div>
            </div>
        ) }
        </div>
    )
}

export default BigCard;