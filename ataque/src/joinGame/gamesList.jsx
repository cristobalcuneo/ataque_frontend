import axios from "axios"
import { Link } from 'react-router-dom';
import { useState } from "react";
import API_URL from "./../common/config"

export default function gamesList({games}) {
    const [loaded, setloaded] = useState(false)

    function joinAGame(gameId, code) {

        // get game
        axios
            .get(`${API_URL}/games/game/${gameId}`)
            .then(response => {
                const game = response.data
                const numberPlayers = game.nPlayers

                // ccreate teams for game
                axios
                    .post(`${API_URL}/teams/createteam`, {
                    color: "orange",
                    name: "MG",
                    conquered: 0,
                    gameId: gameId,
                    userId: 1,
                    turnId: 0,
                    availableArmies: 0
                    })
                    .then(response => {
                        axios
                            .post(`${API_URL}/teams/createteam`, {
                                color: "red",
                                name: "SDD",
                                conquered: 0,
                                gameId: gameId,
                                userId: 1,
                                turnId: 0,
                                availableArmies: 0
                            })
                            .then(response => {
                                axios
                                    .post(`${API_URL}/teams/createteam`, {
                                        color: "green",
                                        name: "NAU",
                                        conquered: 0,
                                        gameId: gameId,
                                        userId: 1,
                                        turnId: 0,
                                        availableArmies: 0
                                    })
                                    .then(response => {
                                        axios
                                            .post(`${API_URL}/teams/createteam`, {
                                                color: "purple",
                                                name: "SRG",
                                                conquered: 0,
                                                gameId: gameId,
                                                userId: 1,
                                                turnId: 0,
                                                availableArmies: 0
                                            })
                                            .then(response => {
                                                setloaded(true)
                                            })
                                            .catch(error => {
                                            console.log(error)
                                            })
                                    })
                                    .catch(error => {
                                    console.log(error)
                                    })
                            })
                            .catch(error => {
                            console.log(error)
                            })
                    })
                    .catch(error => {
                    console.log(error)
                    })
            })
            .catch(error => {
            console.log(error)
            })
    }

    return(
        <div className={'games-list'}>
            {games.map((item) => (
                <div className="game-list-div">
                    <p className="games-list-item" key={item.id}  >id: {item.id} | {item.code} | ronda: {item.currentTurn} | {(item.gameStarted) && (<span> Comenzó | </span>)} {(!item.gameFinished && item.gameStarted) && (<span> Partida en curso | </span>)}{(item.gameFinished) && (<span> Partida finalizada | </span>)} {(item.gameFinished) && ( <span> ganador: {item.winner}</span>)}</p>
                        
                    {(!item.gameStarted) && (
                            <button onClick={() => joinAGame(item.id, item.code)}>Unirse a la partida</button>
                    )}
                    
                    {(loaded && !item.gameFinished && !item.gameStarted) && (
                        <Link to={`/board/${item.id}`}>
                            <button className="boton-jugar">Jugar</button>
                        </Link>
                    )}
                </div>
            ))}
        </div>
    )
}
