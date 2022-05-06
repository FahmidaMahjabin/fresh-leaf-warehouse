
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Inventory = (props) => {
    const navigate = useNavigate();
    // const {_id, name, sold, quantity, picture, supplier, balance, about } = params.item;
    const item = props.item;
    console.log("item:", item)

    console.log("id:", item._id, "name:", item.name,"quantity:", item.quantity)
    return (
        <div className='col-12 col-lg-4 g-3 d-flex align-items-stretch'>
            <Card >
                <Card.Img variant="top" src={item?.picture} />
                <Card.Body>
                    <Card.Title>{item?.name}</Card.Title>
                    <Card.Text>
                        <h5>Price:{item?.balance}</h5>
                        <h5>quantity:{item?.quantity}</h5>
                        <h5>Supplier:{item?.supplier}</h5>
                        <p>Description:{item?.about}</p>
                        
                    </Card.Text>
                    <Button className = "d-block w-75" onClick={() => navigate(`/inventory/${item._id}`)} variant="success">Manage Item</Button>
                    
                </Card.Body>
            </Card>
            
        </div>
        // <p></p>


    );
};

export default Inventory;