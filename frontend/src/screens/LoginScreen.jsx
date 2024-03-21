import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { login } from "../actions/userActions";
import FormContainer from '../components/FormContainer';

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const redirect = searchParams.get('redirect');
    // if there is a redirect url user needs to got to after login else go to home
    const redirectURL = redirect ? redirect : '/';
    // get user info from store
    const userLogin = useSelector(state => state.userLogin);
    const { loading, userInfo, error } = userLogin;
    useEffect(() => {
        if (userInfo) {
            // if user is already logged in send them to a redirect page, default is Homepage
            navigate(redirectURL);
        }
    }, [navigate, userInfo, redirectURL]);
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    };
    return (
        <FormContainer>
            <h1>Sign In</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label> Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button type='submit' variant='primary' className='my-3'>Sign In</Button>
            </Form>
            <Row className="py-3">
                <Col>
                    New Customer ?
                    <Link to={redirect ? `/register?${redirect}` : '/'} >Register</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default LoginScreen