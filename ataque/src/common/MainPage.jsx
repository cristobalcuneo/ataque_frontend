import './MainPage.css'
import Navbar from './Navbar'
import Footer from './Footer'
import MainPageGameCard from './MainPageCards'


function MainPage() {

    return (
        <>
            <div className="MainPage">
                <Navbar />
                <div className='mainpage-content'>
                    <p>Ataque es un clásico juego de estrategia de mesa en el que los jugadores compiten entre sí para conquistar territorios y dominar el mundo. El juego se juega en un mapa mundial, que está dividido en diferentes territorios, y los jugadores se turnan para colocar ejércitos y atacar a sus oponentes.</p>
                    <div className='gamecards-container'>
                        <p>Selecciona uno de los modos de juego</p>
                        <div className='gamecards-container-row'>
                            <MainPageGameCard imgSrc={"./assets/img/w1.jpeg"} name={"ATAQUE"} description={""}/>
                            <MainPageGameCard imgSrc={"./assets/img/w2.jpg"} name={"DEFENSA"} description={""}/>
                        </div>
                        <div className='gamecards-container-row'>
                            <MainPageGameCard imgSrc={"./assets/img/w3.jpg"} name={"AEREO"} description={""}/>
                            <MainPageGameCard imgSrc={"./assets/img/w4.jpg"} name={"TANQUES"} description={""}/>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default MainPage