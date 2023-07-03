import Navbar from './../common/Navbar'
import './instructions.css'
import React, {useState} from 'react';
import Footer from './../common/Footer'

export default function Instructions() {
    const [selected, setSelected] = useState('intro');
    const handleSelect = (link) => {
        setSelected(link);
    };
    const reglas = (
    <div>
        <h1>REGLAS DEL JUEGO</h1>
        <br></br>
        <p>ATAQUE es un juego creado para un mínimo de 3 participantes y un máximo de 5. Éste es un juego en el que se requiere no sólo suerte, sino también una fuerte dosis de estrategia para resultar vencedor. El juego consiste en conquistar un objetivo determinado. Se recomienda que se comience el juego a medida que vayan siendo leídas las instrucciones, con el fin de facilitar la comprensión.</p>
    </div>
    );
    const pasos = (
        <div>
            <h1>PASOS PREVIOS AL JUEGO</h1>
            <br></br>
            <p>MILITANTES: Las fichas utilizadas para este juego se denominan militantes. Cada militante tiene un color. Los jugadores deben elegir el color del movimiento con que jugarán.</p>
            <br></br>
            <p>DISTRIBUCIÓN: Al inicio del juego se repartirán los territorios entre los jugadores.</p>
            <br></br>
            <p>OBJETIVO: Para conocer el objetivo, a cada jugador se le entregará al azar una Carta-Objetivo de entre las presentadas por el juego. Estas cartas estarán dispuestas de manera que no se vea su contenido. En las Cartas-Objetivo está indicado, claramente, cuál es el objetivo que debemos conseguir. El jugador que logre su objetivo primero es el ganador. El contenido de las Cartas-Objetivo deberá mantenerse en secreto durante todo el juego por su poseedor, y lo dará a conocer sólo en el caso de conseguir el objetivo indicado en ésta, o sea si es ganador (o si el juego termina y otro jugador ha ganado). Es conveniente que los jugadores estén familiarizados con el contenido de las Cartas-Objetivo para poder prever las posibles estrategias de sus compañeros de juego.</p>
            <br></br>
            <p>TERRITORIOS: Cuando cada jugador haya elegido su movimiento, y los objetivos estén asignados, se repartirán los territorios entre los jugadores. Luego, cada jugador procederá a ocupar sus territorios, colocando en cada uno de los territorios que obtuvo en el sorteo, un militante. Este militante se denomina De Ocupación. En esta etapa todos los territorios deberán quedar ocupados, y así deberán permanecer durante todo el juego. NO PUEDE haber territorios desocupados.</p>
        </div>
    );
    const juego = (
        <div>
            <h1>EL JUEGO</h1>
            <br></br>
            <p>Inicia el jugador siguiente al que recibió el último Territorio. En cada ronda de juego, cada jugador recibirá militantes. La cantidad de éstos se determinará al inicio del turno de juego, contando la cantidad de territorios ocupados por sus militantes y dividiéndolo por 2 (considerándose sólo la parte entera del resultado, en caso de ser impar la cantidad de territorios). EJEMPLO: Si el jugador tiene 9 territorios ocupados, le corresponderá 4 militantes (9/2= 4.5 = 4).</p>
            <br></br>
            <p>En la primera ronda, el iniciador determinará la cantidad de militantes que le corresponden. Luego él, y cada jugador, procederán a sacar la cantidad de militantes calculados, los cuales serán ubicados por cada jugador en los territorios que tengan ocupados, según sea su conveniencia, teniendo en cuenta el objetivo que debe conseguir. Los militantes serán sacados junto con el jugador que inicia el juego, pero cada jugador los ubicará en el tablero cuando le corresponda el turno de jugar. Sólo en la primera ronda de juego la cantidad de militantes adicionales estará determinada para todos iguales. En las siguientes rondas, la cantidad de militantes que le corresponde a cada jugador, estará determinada para cada uno en particular, por la cantidad de territorios que tenga ocupados al iniciar su turno de juego. OBSERVACIÓN: El mínimo de militantes a recibir es SIEMPRE 3. Aunque el jugador posea menos de 6 territorios. El jugador en su turno, deberá colocar todos los militantes recibidos en uno o más de sus territorios, de acuerdo a su estrategia para lograr el objetivo. A continuación, el jugador podrá o no atacar a sus adversarios de acuerdo a su conveniencia.</p>
            <br></br>
            <p>FINAL DEL JUEGO: El juego finaliza cuando un jugador logra alcanzar su objetivo. En ese momento, descubre su carta-objetivo al resto de los jugadores, comprobando su victoria.</p>
        </div>
    );
    const atacar = (
        <div>
            <h1>COMO ATACAR?</h1>
            <br></br>
            <p>Cada territorio debe estar ocupado con, por lo menos, un militante De Ocupación, el que NO tiene derecho a atacar. Para hacerlo, se debe contar con, por lo menos, 2 militantes en el territorio.</p>
            <br></br>
            <ul>
                <li><p>Un territorio puede atacar solamente a un territorio adversario con el que tenga fronteras en común, o esté unido por línea de puntos. EJ: Atacar BRASIL desde ARGELIA, o viceversa.</p></li>
                <li><p>El jugador podrá atacar con cuantos militantes posea en su territorio, menos el ‘De Ocupación’. El atacado podrá defenderse con cuantos militantes posea en su territorio, inclusive el ‘De Ocupación’. </p></li>
                <li><p>El jugador en su turno es libre de atacar, o no, las veces y territorios que desee.</p></li>
                <li><p>El atacante deberá especificar, antes de jugar, a qué territorio atacará y desde cuál lo hará.</p></li>
                <li><p>El ataque y defensa de un territorio se hará a través de dados. Aunque la cantidad de militantes sea superior, no se podrá atacar o defender con más de tres dados cada vez. Así, si el atacante usa tres militantes contra uno del defensor, él jugará con tres dados contra uno del defensor.</p></li>
                <li><p>La decisión, después de una batalla, de quién gana o pierde militantes, es hecha de la siguiente forma: se compara el dado mayor del atacante con el dado mayor del defensor; el mayor de ellos gana. En seguida se compara el 2° dado mayor del atacante con el del defensor, y el mayor gana. Lo mismo con el menor de ambos jugadores. El empate es siempre victoria para el defensor.</p></li>
                <li><p>Si el atacante lo deseara, podría atacar a un enemigo con una cantidad de dados inferior a la utilizada para defenderse por el enemigo. EJ: ATACANTE 1 militante y DEFENSOR 2 ó 3 militantes. En este caso, se comparará el dado del atacante con el mayor del defensor; el que obtenga menor puntaje, es el que perderá un militante.</p></li>
                <li><p>Durante un combate en el que el atacante juega con 2 ó 3 dados, y el defensor con un dado; si el atacante resulta perdedor, éste sacará solamente 1 de sus militantes.</p></li>
                <li><p>Una vez que el jugador da por terminado su turno, podrá, voluntariamente, reagrupar sus militantes, trasladando la cantidad deseada de un territorio a otro contiguo o unido por líneas de puntos, debiendo permanecer siempre en sus territorios de militante de ocupación. Un militante puede ser trasladado una sola vez durante la reagrupación, no pudiendo éste avanzar más de un territorio por jugada. La finalidad de la reagrupación una vez terminada la jugada, es la de resguardar los territorios conquistados, o bien, la de prepararlo para una futura batalla.</p></li>
            </ul>
        </div>
    );

    const cambios = (
        <div>
            <h1>CAMBIOS</h1>
            <br></br>
            <p>Si durante su turno un jugador ha logrado conquistar al menos un territorio, tendrá derecho al final de su turno a recibir como premio una carta del mazo de cartas territorio.</p>
            <br></br>
            <p>En esta oportunidad deberán tomarse en cuentas las figuras geométricas que cada una de estas cartas contiene a uno de sus costados. El jugador deberá juntar tres cartas con figuras geométricas iguales o tres distintas para lograr un CAMBIO (podrá hacer uso de un comodín, carta que contiene 3 figuras). Al juntar las tres figuras, el jugador, al inicio de su turno, deberá entregarlas al Distribuidor, el que las separa del juego. Consultando la tabla I CAMBIO, recibirá determinada cantidad de militantes extra, dependiendo de la cantidad de veces que haya logrado el cambio. Aquel jugador que en su turno no haya logrado conquistar ningún territorio, no recibirá carta-territorio hasta que lo logre en sus próximos turnos.</p>
            <br></br>
            <p>Si al cambiar las cartas el jugador posee alguno de los territorios que en ella se indica, tendrá derecho a recibir dos militantes más, los que deberá colocar obligatoriamente en este territorio. Si durante el juego un jugador elimina completamente los militantes de un enemigo, sin ser éste su objetivo, las cartas-territorio del derrotado pasan automáticamente al poder del jugador que lo ha eliminado.</p>
        </div>
    );

    return (
        <>
        <Navbar />
            <div className="container">

                <div className='div-sidebar'>
                    <ul className="sidebar">
                        <li onClick={() => handleSelect('intro')} className={selected === 'intro' ? 'active-instruction': ''}><span>Introducción</span></li>
                        <li onClick={() => handleSelect('pasos')} className={selected === 'pasos' ? 'active-instruction': ''}><span>Pasos previos al juego</span></li>
                        <li onClick={() => handleSelect('juego')} className={selected === 'juego' ? 'active-instruction': ''}><span>El juego</span></li>
                        <li onClick={() => handleSelect('atacar')} className={selected === 'atacar' ? 'active-instruction': ''}><span>¿Cómo atacar?</span></li>
                        <li onClick={() => handleSelect('cambios')} className={selected === 'cambios' ? 'active-instruction': ''}><span>Cambios</span></li>
                    </ul>
                </div>
                <div className="content instructions-content">
                    {selected === 'intro' && reglas}
                    {selected === 'pasos' && pasos}
                    {selected === 'juego' && juego}
                    {selected === 'atacar' && atacar}
                    {selected === 'cambios' && cambios}
                </div>

            </div>  
        <Footer />
    </>
    )
}
