import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ManageItem = () => {
    const [item, setItem] = useState({});
    useEffect(() => {
        axios.get(`https://murmuring-retreat-77466.herokuapp.com/inventory/${id}`)
            .then(data => setItem(data.data))
    }, [item])
    const { id } = useParams();
    
    
    const { name, picture, about, balance, supplier, quantity } = item;
    console.log("item.quantity: ",item.quantity)
    // const [quantity, setQuantity] = useState(item.quantity);
    // if(item.quantity === 0){
    //     setQuantity(item.quantity)
    // }


    const deliverItem = () => {
        console.log("delivered item:", item);

        if (quantity > 1) {
            
            axios.put(`https://murmuring-retreat-77466.herokuapp.com/inventory/${id}`, {quantity: quantity-1})
                .then(res => {
                    console.log("res received client:", res);
                    // if(res.data){
                    //     setQuantity(quantity-1)
                    // }
                })

            // add item to my order list
            // axios.post("https://murmuring-retreat-77466.herokuapp.com/myItems", item)
            // .then(data =>
            //     {console.log("data from my item:", data)}
            //     )
        }
        else {
            alert("quantity can't be negative")
        }
    }
    

    // function = addToQuantity
    // step1:input value jeta pabo seta integer e convert korbo 
    // step2:id diye database theke item khuje ber korbo 
    // step3: oi quantity er sathe add kore response send korbo
    const addToQuantity = (event) =>{
        event.preventDefault();
        const restock = parseInt(event.target.quantity.value);
        // console.log("restock:", restock);
        axios.put(`https://murmuring-retreat-77466.herokuapp.com/inventory/${id}`, { quantity: `${parseInt(quantity) + restock}` })
                .then(res => {
                    console.log("res received client:", res);
                })


    }
    return (
        <div>
            <Card className="text-center mx-auto my-5" style={{ width: "500px" }}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <h5>Price:{balance}</h5>
                        <h5>quantity:{quantity}</h5>
                        <h5>Supplier:{supplier}</h5>
                        <p>Description:{about}</p>
                    </Card.Text>
                    <Button variant="primary" onClick={deliverItem} >Deliver</Button>
                </Card.Body>
            </Card>
            <div className='bg-light mx-auto my-5 text-center'>
                <h1>Re-Stock</h1>
                <form onSubmit={addToQuantity}>
                    <input  type = "number" placeholder='add stock' name = "quantity"></input>
                    <input name = "submitBtn"  type = "submit" className='btn btn-success' placeholder = "Add to Stock"></input>
                </form>
            </div>
        </div>

    );
};

export default ManageItem;