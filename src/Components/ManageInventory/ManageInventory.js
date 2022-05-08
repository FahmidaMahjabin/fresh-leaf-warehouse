
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';


import TableRow from './TableRow/TableRow';
const ManageInventory = () => {
    console.log("came into manage inventory")
    const [items, setItems] = useState([])
    useEffect(() =>{
        axios.get("http://localhost:5000/inventory")
        .then(data =>{
            console.log("data:", data)

             setItems(data.data);    
        })
    },
    [])
    return (
        <div>
            <h1>Inventory Manage</h1>
          <Table striped bordered hover>
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Picture</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                  </tr>
              </thead>
              <tbody>
                    {items.map(item => <TableRow key = {item._id} item = {item} setItems={setItems}></TableRow>)}
              </tbody>

        </Table>  
        </div>
    );
};

export default ManageInventory;