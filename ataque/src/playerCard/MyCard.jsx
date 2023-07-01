import './MyCard.css'

export default function MyCard({playerName, playerNumber, active}) {

    const cardClasses = "my-card " + playerName + " player-" + playerNumber + " " + active

    return(
        <div className={cardClasses}>
            <div className="my-card-container">
            <h3>{playerName}: <span className='player-number'>{playerNumber}</span></h3>
            </div>
        </div>
    )
}
