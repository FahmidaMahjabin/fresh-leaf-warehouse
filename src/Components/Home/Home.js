import React, { useEffect } from 'react';
import Banner from './Banner/Banner';
import GetNavbar from './Navbar/Navbar';
import axios from 'axios';
import {useState } from 'react';
import Inventory from '../Inventory/Inventory';

const Home = () => {
    const [items, setItems] = useState([]);
<<<<<<< HEAD
    useEffect(() =>
    {
        axios.get("http://localhost:5000/inventory")
        .then(data =>{
            console.log("data:", data)

             setItems(data.data);
            
        })
    },
    [])

    console.log("items", items)
    const inventoryList = [];
    for(let item of items){
        console.log("current item:", item);
        inventoryList.push(<Inventory  item = {item}></Inventory>)
    }
=======
    useEffect(
        () =>{axios.get("http://localhost:5000/inventory")
    .then(data =>{
        // console.log("items:", data.data)
        setItems(data.data);
        }
        )
        }, [])

    console.log("items:", items)
>>>>>>> 2bfdf7f30a6dbe2a15f6dbb0222ec4c863b7ff29
    return (
        <div>
            
            <GetNavbar></GetNavbar>
            <Banner></Banner>
            <div className = "row m-5">
<<<<<<< HEAD
                {/* {items?.map(item => <Inventory  item = {item}></Inventory>)} */}
                {inventoryList}
=======
                {items?.map((item) => {return <Inventory  item = {item}></Inventory>})}
>>>>>>> 2bfdf7f30a6dbe2a15f6dbb0222ec4c863b7ff29
            </div>

        </div>
    );
};

export default Home;