
import './App.css';
import {Routes, Route} from 'react-router'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'

function App(Store) {
  return (
    <div className="App">
      <Navbar />
     
     <Routes>
      <Route path ="/" element={<Home/>} />
      <Route path ="/cart" element={<Cart/>} />


     </Routes>

    </div>
  );
}

export default App;
