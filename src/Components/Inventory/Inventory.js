
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

<<<<<<< HEAD
const Inventory = (props) => {
    const navigate = useNavigate();
    // const {_id, name, sold, quantity, picture, supplier, balance, about } = params.item;
    const item = props.item;
    console.log("item:", item)

    console.log("id:", item._id, "name:", item.name,"quantity:", item.quantity)
    return (
        <div className='col-12 col-lg-4 g-3 d-flex align-items-stretch'>
            {/* <Card >
                <Card.Img variant="top" src={item?.picture} />
                <Card.Body>
                    <Card.Title>{item?.name}</Card.Title>
                    <Card.Text>
                        <h5>Price:{item?.balance}</h5>
                        <h5>quantity:{item?.quantity}</h5>
                        <h5>Supplier:{item?.supplier}</h5>
                        <p>Description:{item?.about}</p>
=======
const Inventory = ({item}) => {
    const navigate = useNavigate();
    console.log("item:", item)
    const {_id, name, sold, quantity, picture, supplier, balance, about } = item;
    console.log("name:", name)
    return (
        <div className='col-12 col-lg-4 g-3 d-flex align-items-stretch'>
            <Card >
                <Card.Img variant="top" src={item.picture} />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                        <h5>Price:{item.balance}</h5>
                        <h5>quantity:{item.quantity}</h5>
                        <h5>Supplier:{item.supplier}</h5>
                        <p>Description:{item.about}</p>
>>>>>>> 2bfdf7f30a6dbe2a15f6dbb0222ec4c863b7ff29
                        
                    </Card.Text>
                    <Button className = "d-block w-75" onClick={() => navigate(`/inventory/${item._id}`)} variant="success">Manage Item</Button>
                    
                </Card.Body>
            </Card> */}
            <div>
                {item.name}
                {item._id}
                {item.supplier}
                {item.about}
                {item.picture}
                {item.sold}
            </div>
        </div>
        // <p></p>


    );
};

export default Inventory;