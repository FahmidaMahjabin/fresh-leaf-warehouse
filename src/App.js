import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Inventory from './Components/Inventory/Inventory';
import ManageItem from './Components/ManageItem/ManageItem';
import MyItem from './Components/MyItems/MyItem';
import LogIn from './Components/LogIn/LogIn';

function App() {
  return (
    <Routes>
      <Route path = "/" element = {<Home></Home>}></Route>
      <Route path = "/indentory" element = {<Inventory></Inventory>}></Route>
      <Route path = "/manageItem" element = {<ManageItem></ManageItem>}></Route>
      <Route path = "/myItem" element = {<MyItem></MyItem>}></Route>
      <Route path = "/logIn" element = {<LogIn></LogIn>}></Route> 
    </Routes>
  );
}

export default App;