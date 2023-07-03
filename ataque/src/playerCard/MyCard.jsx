import './MyCard.css'
import axios from "axios";
import { useEffect } from "react";
import API_URL from "./../common/config"

export default function MyCard({playerName, playerNumber, active, territories}) {

    useEffect(() => {
        axios
          .get(`${API_URL}/teams/${playerNumber}`)
          .then(response => {
            // Handle the response data
            console.log(response.data, `info player ${playerNumber} mycard`);
          })
          .catch(error => {
            // Handle the error
            console.error(error);
          });
      }, []);

    const cardClasses = "my-card " + playerName + " player-" + playerNumber + " " + active

    return(
        <div className={cardClasses}>
            <div className="my-card-container">
            <h3>{playerName}</h3>
            <p>Conquistas: {territories}</p>
            </div>
        </div>
    )
}
