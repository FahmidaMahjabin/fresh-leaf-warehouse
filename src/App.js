import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Inventory from './Components/Inventory/Inventory';
import ManageItem from './Components/ManageItem/ManageItem';
import MyItem from './Components/MyItems/MyItem';
import LogIn from './Components/LogIn/LogIn';
import Register from './Components/Register/Register';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import ManageInventory from './Components/ManageInventory/ManageInventory';

function App() {
  return (
    <Routes>
      <Route path = "/" element = {<Home></Home>}></Route>
      <Route path = "/inventory" element = {<Inventory></Inventory>}></Route>
      <Route path = "/inventory/:id" element = {
        <RequireAuth>
          <ManageItem></ManageItem>
        </RequireAuth>
      
      }></Route>
      <Route path = "/myItems" element = {
        <RequireAuth>
            <MyItem></MyItem>
        </RequireAuth>}>
      </Route>
      <Route path = "/manageInventory" element = {
        <RequireAuth>
            <ManageInventory></ManageInventory>
        </RequireAuth>}>
      </Route>
      <Route path = "/logIn" element = {<LogIn></LogIn>}></Route>
      <Route path = "/register" element = {<Register></Register>}></Route>  
    </Routes>
  );
}

export default App;
