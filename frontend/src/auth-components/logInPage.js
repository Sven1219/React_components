import React, {useEffect, useState} from 'react';
import { Button, ButtonGroup, Elevation, Card, FormGroup, InputGroup} from "@blueprintjs/core";
import {Link, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../actions/authActions';


const LogInComponent = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const history = useHistory();
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state)=>state.auth.isAuthenticated);
  const authErrors = useSelector((state)=>state.errors);

  const [errors, setErrors] = useState({});

  useEffect(()=>{
    if(isAuthenticated){
      history.push('/homePage');
    }
  }, [isAuthenticated, history]);

  useEffect(()=>{
    if(authErrors){
      setErrors(authErrors);
    }
  }, [authErrors]);

  const handleSignUp = () => {
    const newUser = {
      name: username,
      email: email,
      password: password
    };

    dispatch(loginUser(newUser));
  };
    return(
      
        <Card interactive={true} elevation={Elevation.TWO} style={{width:"30%", margin:"auto", marginTop:"100px"}}>
          <h1 style={{textAlign:"center", margin:"30px 0px"}}>Log In</h1>
          <FormGroup
          label="User Name"
          labelFor="text-input"
          labelInfo="(required)"
          style={{margin:"20px 0px"}}>
            <InputGroup id="text-input" 
              placeholder="User Name" 
              style={{marginTop:5}} 
              onChange={handleUsernameChange}
              value={username}/>
          </FormGroup>
          <FormGroup 
          label="Email"
          labelFor="text-input"
          labelInfo="(required)"
          style={{margin:"20px 0px"}}>
            <InputGroup id="text-input" 
              placeholder="Email" 
              style={{marginTop:5}} 
              onChange={handleEmailChange}
              value={email}/>
          </FormGroup>
          <FormGroup
          label="Password"
          labelFor="text-input"
          labelInfo="(required)"
          style={{margin:"20px 0px"}}>
            <InputGroup id="text-input" 
              placeholder="Password" 
              style={{marginTop:5}} 
              onChange={handlePasswordChange}
              value={password}/>
          </FormGroup>
          <ButtonGroup fill style={{ marginTop: 40, height: "40px" }}>
            <Button intent="success" style={{width:"50%"}} onClick={handleSignUp}>Log In</Button>
            <Link to="/register" style={{width:"50%", padding:"0px"}}><Button intent="primary" style={{width:"100%", height:"100%"}}>Register</Button></Link>
          </ButtonGroup>
        </Card>
    )
}

export default LogInComponent;