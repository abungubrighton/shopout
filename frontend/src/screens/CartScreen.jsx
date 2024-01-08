import {useEffect} from 'react';
import {Link, useParams,useSearchParams} from 'react-router-dom';
import { Form,Row,Col,ListGroup,Image,Button,Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import { addToCart } from '../actions/cartActions';

const CartScreen = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const productId = id;
    const [searchParams] = useSearchParams();
    const qty = searchParams.get('qty');

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    return (
        <div>CartScreen</div>

    )
}

export default CartScreen