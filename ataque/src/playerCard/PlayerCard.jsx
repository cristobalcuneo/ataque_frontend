import './PlayerCard.css'

export default function playerCard({playerName, playerNumber, active}) {
    // var teamColors = {
    //     "MG": ["#CC8313", "#EBC284"],
    //     "SDD": ["#B21717", "#D98D8D"],
    //     "NAU": ["#1D7536", "#89BB97"],
    //     "SRG": ["#52216B", "#A07CB3"],
    // }
    
    const cardClasses = "player-card " + playerName + " player-" + playerNumber + " " + active
    return(
        <div className={cardClasses}>
            <div className="player-card-container">
                <h3>{playerName}: <span className='player-number'>{playerNumber}</span></h3>
            </div>
        </div>
    )
}