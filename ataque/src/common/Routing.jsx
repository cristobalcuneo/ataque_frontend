import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import MainPage from './MainPage'
import OurTeam from './../team/OurTeam'
import Instructions from './../game/Instructions'
import DynamicBoard from './../board/DynamicBoard';
import Login from './../user/Login';
import Register from './../user/Register';
import JoinGame from './../joinGame/joinGame';


function Routing() {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}/>
                <Route path='/mainpage' element={<MainPage/>}/>
                <Route path='/ourteam' element={<OurTeam/>}/>
                <Route path='/instructions' element={<Instructions/>}/> 
                <Route path='/board' element={<DynamicBoard/>}/> 
                <Route path='/login' element={<Login/>}/> 
                <Route path='/register' element={<Register/>}/> 
                <Route path='/joingame' element={<JoinGame/>}/> 
            </Routes>
        </BrowserRouter>
        </>

    )
}

export default Routing
