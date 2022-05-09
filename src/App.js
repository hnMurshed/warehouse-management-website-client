import logo from './logo.svg';
import './App.css';
import Header from './pages/shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home/Home';
import Inventory from './pages/Inventory/Inventory';
import ManageInventories from './pages/ManageInvetories/ManageInventories';
import AddItem from './pages/AddItem/AddItem';
import { Toaster } from 'react-hot-toast';
import Register from './pages/login-signup/Reginster/Register';
import Login from './pages/login-signup/Login/Login';
import PrivatePage from './pages/shared/PrivatePage/PrivatePage';

function App() {
  return (
    <div>
      <Toaster></Toaster>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='inventory/:itemId' element={
          <PrivatePage>
            <Inventory></Inventory>
          </PrivatePage>
        }></Route>
        <Route path='manageinventories' element={<ManageInventories></ManageInventories>}></Route>
        <Route path='additem' element={<AddItem />}></Route>
        <Route path='register' element={<Register></Register>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
