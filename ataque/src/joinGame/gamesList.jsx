

export default function gamesList({games}) {

    return(
        <div className={'games-list'}>
            {games.map((item) => (
                <div>
                    <p key={item.id}  >{item.code}</p>
                    <button onClick={() => joinAGame(item.id, item.code)}>Unirse a la partida</button>
                </div>

            ))}
        </div>
    )
}
