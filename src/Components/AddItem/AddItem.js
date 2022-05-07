import axios from 'axios';
import React from 'react';

const AddItem = () => {
    const addItemToDatabase = (event)=>{
        event.preventDefault();
        const name = event.target.name.value;
        const quantity = event.target.quantity.value;
        const price = event.target.price.value;
        const image = event.target.image.value;
        const item = {name, quantity, price, image};
        console.log("added item:", item)
        axios.post("http://localhost:5000/inventory", item)
        .then(res => console.log("res for update:", res))


    }
    return (
        <div>
            <h1 className='text-center'>Add Item</h1>
            <form onSubmit={addItemToDatabase} className='bd-light w-50 mx-auto my-5 text-center'>
                <input type = "text" name = "name" placeholder='enter product name'></input>
                <input type = "number" name = "price" placeholder='enter product price'></input>
                <input type = "number" name = "quantity" placeholder='enter product quantity'></input>
                <input type = "text" name = "image" placeholder='enter product image'></input>
                <button type = "submit" className='btn btn-success'>Add Item</button>
            </form>
        </div>
    );
};

export default AddItem;