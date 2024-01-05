import { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Image, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { listProductDetails } from '../actions/productActions';
import Loader from "../components/Loader";
import Message from "../components/Message";
import Rating from "../components/Rating";
const Zero = 0;

const ProductScreen = () => {
    const [qty, setQty] = useState(1);
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const productDetails = useSelector(state => state.productDetail);
    const { loading, error, product } = productDetails;
    useEffect(() => {
        dispatch(listProductDetails(id));
    }, [id, dispatch]);

    const addToCartHandler = () => {
        navigate(`/cart/${id}?qty=${qty}`);
    };


    return (
        <div>
            <Link to="/" className='btn btn-light my-3'>Go Back</Link>
            {loading ? (<Loader />) : error ? (<Message>{error}</Message>) : (
                <Row>
                    <Col md={5}>
                        <Image src={product.image} alt={product.name} fluid />
                    </Col>
                    <Col md={4}>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h3>{product.name}</h3>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                            </ListGroup.Item>

                            <ListGroup.Item>
                                Price:$ {product.price}
                            </ListGroup.Item>

                            <ListGroup.Item>
                                Description: {product.description}
                            </ListGroup.Item>

                        </ListGroup>
                    </Col>
                    {/* holds the add to cart section */}
                    <Col md={3}>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Price</Col>
                                        <Col>
                                            <strong>${product.price}</strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <Row>
                                        <Col>Status</Col>
                                        <Col>
                                            {product.countInStock > Zero ? 'In stock' : 'Out of stock'}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>

                                {product.countInStock > Zero && (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col className='d-flex align-items-center'>Qty</Col>
                                            <Col xs="auto" className='my-1'>
                                                <Form.Select  value={qty} onChange={(e) => setQty(e.target.value)}>
                                                    {/* Convert the countInStock into a list of options. count of 5 generates an array of [0,1,2,3,4] */}
                                                    {
                                                        [...Array(product.countInStock).keys()].map((x) => (
                                                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                        ))
                                                    }

                                                </Form.Select>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>

                                )}
                                <ListGroup.Item>
                                    <Button className='btn-block btn w-100' disabled={product.countInStock === Zero} type='button' onClick={addToCartHandler}>Add to cart</Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>

            )}

        </div>
    )
}

export default ProductScreen