import './Footer.css'

export default function Footer() {
    return(
        <footer>
            <div id="creator"> 
                <ul>
                    <li className="web"><a href="./ourteam">WEBors®</a></li>
                    <li><a href="https://github.com/NatC18">Natalia Correal Posada</a></li>
                    <li><a href="https://github.com/cristobalcuneo">Cristóbal Cuneo Galleguillos</a></li>
                    <li>Ingeniería Civil UC</li>
                </ul>
            </div>

            <div id="course">
                <ul>
                    <li className="list-title">Curso</li>
                    <li>IIC2513</li>
                    <li>Tecnologías y Aplicaciones Web</li>
                    <li><a href="https://github.com/IIC2513/Syllabus">Repositorio Github</a></li>
                </ul>
            </div>

            <div id="univerity">
                <ul>
                    <li className="list-title">University</li>
                    <li><a href="https://www.uc.cl">Pontificia Universidad Católica de Chile</a></li>
                    <li><a href="https://www.ing.uc.cl">Escuela de Ingeniería</a></li>
                </ul>
            </div>
        </footer>

    )
}