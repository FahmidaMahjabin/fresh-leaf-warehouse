import React, { useEffect } from 'react';
import Banner from './Banner/Banner';
import GetNavbar from './Navbar/Navbar';
import axios from 'axios';
import {useState } from 'react';
import Inventory from '../Inventory/Inventory';

const Home = () => {
    const [items, setItems] = useState([]);
    useEffect(() =>
    {
        axios.get("http://localhost:5000/inventory")
        .then(data =>{
            console.log("data:", data)

             setItems(data.data);
             
            
        })
    },
    [])
    const sixItem = items.slice(0, 6);
    console.log(sixItem);
    console.log("items", items)
    const inventoryList = [];
    for(let item of items){
        console.log("current item:", item);
        inventoryList.push(<Inventory  item = {item}></Inventory>)
    }
    return (
        <div>
            
            <GetNavbar></GetNavbar>
            <Banner></Banner>
            <div className = "row m-5">
                {sixItem?.map(item => <Inventory key = {item._id} item = {item}></Inventory>)}
                
            </div>

        </div>
    );
};

export default Home;