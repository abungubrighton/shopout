import React, { useEffect, useState } from 'react';
import { Form,Button,Col,Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { register } from "../actions/userActions";
import FormContainer from '../components/FormContainer';
import Loader from "../components/Loader";
import Message from "../components/Message";

const RegisterScreen = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const redirect = searchParams.get('redirect');
    // if there is a redirect url user needs to got to after login else go to home
    const redirectURL = redirect ? redirect : '/';
    // get user info from store
    const userRegister = useSelector(state => state.userRegister);
    const { loading, userInfo, error } = userRegister;
    useEffect(() => {
        if (userInfo) {
            // if user is already logged in send them to a redirect page, default is Homepage
            navigate(redirectURL);
        }
    }, [navigate, userInfo, redirectURL]);
    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage("Password do not match")
        } else {
            dispatch(register(name, email, password))
            
        }
    };
    return (
        <FormContainer>
            <h1>Sign Up</h1>
            {message && <Message variant="danger">{message} </Message>}
            {error && <Message variant="danger">{error} </Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control required type="name" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control required type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label> Password</Form.Label>
                    <Form.Control required type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="Confirm password">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control required type="confirm password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </Form.Group>
                <Button type='submit' variant='primary' className='my-3'>Register</Button>
            </Form>
            <Row className="py-3">
                <Col>
                    Have an account ?
                    <Link to={redirect ? `/login?${redirect}` : '/login'} >Sign In</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default RegisterScreen