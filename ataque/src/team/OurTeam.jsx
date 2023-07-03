import './OurTeam.css'
import Navbar from '../common/Navbar'
import TeamCard from './TeamCard'
import Footer from '../common/Footer'

function OurTeam() {
  const team = [
    {id: 1, imgSrc: "./public/assets/img/nati.jpg", description:"Cris es un programador experimentado que se especializa en la creación de juegos de mesa virtuales. Él se encarga de la programación, el desarrollo de software y la optimización de los juegos para asegurarse de que funcionen sin problemas en diferentes plataformas y dispositivos. Además, tiene una gran habilidad para resolver problemas técnicos y garantizar que el producto final sea de alta calidad."},
    {id: 2, imgSrc: "./public/assets/img/cris.jpg", description:"Nati, por otro lado, es una diseñadora gráfica con experiencia en el diseño de juegos y productos digitales. Ella es responsable de la creación de la interfaz de usuario, la identidad visual y el aspecto estético general de los juegos de mesa virtuales de Webors. Ella trabaja en estrecha colaboración con Cris para garantizar que el diseño se integre perfectamente con el software y brinde una experiencia de usuario intuitiva y atractiva."},
]
  return (
    <div className="OurTeam">
      <Navbar />
        <div className="ourteam-content">
          <p className='web'>WEBors®</p>
          <p className="ourteam-info">Webors es un equipo de trabajo compuesto por Cris y Nati, quienes se dedican a la programación de juegos de mesa virtuales. Ambos tienen habilidades en programación y un amplio conocimiento en el diseño y desarrollo de software. Juntos, trabajan en equipo para crear juegos de mesa virtuales innovadores y divertidos para que los usuarios disfruten.</p>
          <div className="board">
                    <TeamCard key={team.id} imgSrc={"./public/assets/img/cris.jpg"} name={"CRIS"} description={"Cris es un programador experimentado que se especializa en la creación de juegos de mesa virtuales. Él se encarga de la programación, el desarrollo de software y la optimización de los juegos para asegurarse de que funcionen sin problemas en diferentes plataformas y dispositivos. Además, tiene una gran habilidad para resolver problemas técnicos y garantizar que el producto final sea de alta calidad."}/>
                    <TeamCard key={team.id} imgSrc={"./public/assets/img/nati.jpg"} name={"NATI"}  description={"Nati, por otro lado, es una diseñadora gráfica con experiencia en el diseño de juegos y productos digitales. Ella es responsable de la creación de la interfaz de usuario, la identidad visual y el aspecto estético general de los juegos de mesa virtuales de Webors. Ella trabaja en estrecha colaboración con Cris para garantizar que el diseño se integre perfectamente con el software y brinde una experiencia de usuario intuitiva y atractiva."}/>
                    
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default OurTeam

