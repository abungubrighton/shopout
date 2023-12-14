import { Link,useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap';
import Rating from "../components/Rating";
import products from "../products";
const Zero = 0;
const ProductScreen = () => {
    const { id } = useParams();
    const product = products.find((product) => product._id === id)
    return (
        <div>
            <Link to="/" className='btn btn-light my-3'>Go Back</Link>
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
                            <Rating  value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Price:$ {product.price}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>

                    </ListGroup>
                </Col>
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

                            <ListGroup.Item>
                                <Button className='btn-block btn w-100' disabled={product.countInStock == Zero} type='button'>Add to cart</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
            
        </div>
    )
}

export default ProductScreen