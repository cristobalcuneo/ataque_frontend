import { useState } from "react";
import GamesList from './gamesList'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
import axios from "axios";
import './joinGame.css'
import API_URL from "./../common/config"

export default function joinGame() {

    const PORT = 4000

    const [games, setGames] = useState([])

         // function that gets games
    async function g() {
      const response = await fetch(`${API_URL}/games`);
      const data = await response.json();
      return data
    }

    // get games for list
    async function getGames() {
      try {
          const result = await g();
          function checkStarted(game) {
            return !game.gameStarted;
          }
          setGames(result)
      } catch (error) {
        console.error(error);
      }
    }

      // create game
      async function createGame() {
        try {
          axios
            .post(`${API_URL}/games/createGame`, {
              code: Math.random().toString(36).substring(2, 8)
            })
            .then(response => {
            })
            .catch(error => {
              console.log(error)
            })
        } catch (error) {
          console.error(error);
        }
      }
    return (
        <div>
          <Navbar />
            <div className="joingame-container">
              <button onClick={() => getGames()}>Obtener partidas</button>
              <button onClick={() => createGame()}>Crear partida</button>
            </div>
            <GamesList key={1} games={games}/>
          <Footer />
        </div>
    )
}