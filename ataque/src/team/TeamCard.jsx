import './TeamCard.css'
export default function TeamCard({imgSrc, name, description}) {
    return(
        <div className="team-card">
            <div className="card-container">
                <img src={imgSrc} className="photo"/>
                <div className='card-text'>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}