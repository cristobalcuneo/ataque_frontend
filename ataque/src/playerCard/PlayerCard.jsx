import './PlayerCard.css'
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../auth/AuthContext";
import API_URL from "./../common/config"


export default function playerCard({playerName, playerNumber, active, territories}) {

    const {token} = useContext(AuthContext);
    const [idTeam, setIdTeam] = useState()
    const [teamName, setTeamName] = useState()

    useEffect(() => {
        axios
          .get(`${API_URL}/teams/${playerNumber}`)
          .then(response => {
            // Handle the response data
            console.log(response.data, `info player ${playerNumber} playercard`);
            console.log(response.data.id)
            console.log(response.data.color)
            setIdTeam(response.data.id)
            setTeamName(response.data.color)
          })

          .catch(error => {
            // Handle the error
            console.error(error);
          });
      }, []);

    const cardClasses = "player-card " + playerName + " player-" + playerNumber + " " + active
    return(
        <div className={cardClasses}>
            <div className="player-card-container">
                <h3>{playerName}</h3>
                <p>Conquistas: {territories}</p>
            </div>
        </div>
    )
}