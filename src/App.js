import logo from './logo.svg';
import './App.css';
import Header from './pages/shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home/Home';
import Inventory from './pages/Inventory/Inventory';
import ManageInventories from './pages/ManageInvetories/ManageInventories';
import AddItem from './pages/AddItem/AddItem';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='inventory/:itemId' element={<Inventory></Inventory>}></Route>
        <Route path='manageinventories' element={<ManageInventories></ManageInventories>}></Route>
        <Route path='additem' element={<AddItem />}></Route>
      </Routes>
    </div>
  );
}

export default App;
