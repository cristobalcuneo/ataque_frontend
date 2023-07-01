import './App.css'
import Navbar from './Navbar'
import Button from './../elements/Button'

function App() {

  return (
    <div className="App">
      {/* <Navbar /> */}
      <div className='Title'>
        <h1 className='title'>ATAQUE</h1>
      </div>
      <div className='app-content'>
        <a href="./mainpage">
        <Button Text={"¡Que comience la batalla!"}/>
        </a>
      </div>
    </div>
  )
}

export default App