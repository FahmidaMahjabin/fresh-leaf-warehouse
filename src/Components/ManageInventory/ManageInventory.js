
import { Table } from 'react-bootstrap';
import UseAllItems from '../../Hooks/UseAllItems';

import TableRow from './TableRow/TableRow';
const ManageInventory = () => {
    
    const {items, setItems} = UseAllItems();
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
                    {items.map(item => <TableRow key = {item._id} item = {item}></TableRow>)}
              </tbody>

        </Table>  
        </div>
    );
};

export default ManageInventory;