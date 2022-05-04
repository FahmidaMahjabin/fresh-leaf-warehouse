
import { Button, Card } from 'react-bootstrap';

const Inventory = (params) => {
    const { name, sold, quantity, picture, supplier, balance, about } = params.item;
    console.log("sold:", sold)
    return (
        <div className='col-12 col-lg-4 g-3 d-flex align-items-stretch'>
            <Card >
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <h5>Price:{balance}</h5>
                        <h5>quantity:{quantity}</h5>
                        <h5>Supplier:{supplier}</h5>
                        <p>Description:{about}</p>
                        
                    </Card.Text>
                    <Button className = "d-block w-75" variant="success">Manage Item</Button>
                    
                </Card.Body>
            </Card>
        </div>

    );
};

export default Inventory;