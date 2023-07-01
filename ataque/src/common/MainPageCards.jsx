import './MainPageCards.css'

export default function MainPageGameCard({imgSrc, name, description}) {
    return(
        <div className="mainpage-gamecard">
            <div className="gamecard-container">
                <div className="gamecard-img">
                    <img src={imgSrc} className="photo"/>
                </div>
                <div className='gamecard-text'>
                    <h2>{name}</h2>
                    {/* <p>{description}</p> */}
                </div>
            </div>
        </div>
    )
}