import { useState } from "react";
import GamesList from './gamesList'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'

export default function joinGame() {


    const PORT = 4000

    const [games, setGames] = useState([])

    async function g() { // Función que busca la multiplicacion
        console.log("mult")
        const response = await fetch(`http://localhost:${PORT}/games`);
        console.log(response, "response")
        const data = await response.json();
        console.log(data, "data")
        return data
      }

      async function getGames() {
        try {
            console.log("hola")
            const result = await g();
            console.log(result)
            setGames(result)
        } catch (error) {
          console.error(error);
        }
      }
    return (
        <div>
          <Navbar />
          <button onClick={() => getGames()}>Obtener partidas</button>
          <GamesList key={1} games={games}/>
          <Footer />
        </div>
    )
}