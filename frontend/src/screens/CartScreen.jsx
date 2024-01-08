import { useEffect } from 'react';
import { Button, Card, Col, Form, Image, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useSearchParams,useNavigate } from 'react-router-dom';
import { addToCart } from '../actions/cartActions';
import Message from '../components/Message';
const CartScreen = () => {
    const ZERO = 0;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const productId = id;
    const [searchParams] = useSearchParams();
    const qty = searchParams.get('qty');

    useEffect(() => {
        if (productId && qty) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const removeFromCartHandler = (id) => {
        console.log("Removing:", id);
    };
    const checkoutHandler = () => {
        navigate('/login?redirect=shipping');
    };

    return (
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <Message variant='info'>Your cart is empty <Link to='/'>Go Back</Link></Message>
                ) : (
                    <ListGroup variant='flush'>
                        {cartItems.map((item) => (
                            <ListGroup.Item key={item._id}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={item.image} fluid rounded />
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`/product/${item._id}`}>{item.name}</Link>
                                    </Col>
                                    <Col md={2}>
                                        ${item.price}
                                    </Col>
                                    <Col md={3}>
                                        <Form.Select value={item.qty} onChange={(e) => dispatch(addToCart(item._id, Number(e.target.value)))}>
                                            {/* Convert the countInStock into a list of options. count of 5 generates an array of [0,1,2,3,4] */}
                                            {
                                                [...Array(item.countInStock).keys()].map((x) => (
                                                    <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                ))
                                            }

                                        </Form.Select>
                                    </Col>
                                    <Col md={1}>
                                        <Button
                                            type="button"
                                            variant="light"
                                            onClick={() => removeFromCartHandler(item._id)}
                                        >
                                            <i className='fas fa-trash'></i>
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>

                )}
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Subtotal({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h2>
                            ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
                        </ListGroup.Item>
                    </ListGroup>
                    <ListGroup.Item className='p-2'>
                        <Button
                            type='button'
                            className='btn-block w-100'
                            disabled={cartItems.length === ZERO}
                            onClick={checkoutHandler}
                        >
                            Proceed To Checkout
                        </Button>
                    </ListGroup.Item>
                </Card>
            </Col>
        </Row>

    )
}

export default CartScreen