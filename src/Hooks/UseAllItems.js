
import  {React, useEffect, useState } from 'react';
import axios from 'axios';
const UseAllItems = () => {
    const [items, setItems] = useState([])
    useEffect(() =>{
        axios.get("https://murmuring-retreat-77466.herokuapp.com/inventory")
        .then(data =>{
            console.log("data:", data)

             setItems(data.data);    
        })
    },
    [])
    return (
        {items, setItems}
    );
};

export default UseAllItems;