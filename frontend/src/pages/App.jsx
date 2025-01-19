import {BrowserRouter, Routes, Route,} from 'react-router-dom';
import Home from './Home';
import Gen from './Gen';
import Generated from './Generated';
import '../index.css';



const App=()=> {

  return (
    <div className='app'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/gen' element={<Gen />}></Route>
        <Route path='/Generated' element={<Generated />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
       
  )
}

export default App;
