import React, {useEffect, useState} from 'react';
import { Button, ButtonGroup, Elevation, Card, FormGroup, InputGroup} from "@blueprintjs/core";
import {Link, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../actions/authActions';

const RegisterComponent = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isAuthenticated = useSelector((state)=>state.auth.isAuthenticated);
  const authErrors = useSelector((state)=>state.errors);

  const [errors, setErrors] = useState({});

  const history = useHistory();
  const dispatch = useDispatch();

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
  
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };
  
  const handleSignUp = () => {
    const newUser = {
      name: username,
      email: email,
      password: password,
      password2: confirmPassword
    };

    dispatch(registerUser(newUser, history));
  };

    return(
        <Card interactive={true} elevation={Elevation.TWO} style={{width:"30%", margin:"auto", marginTop:"100px"}}>
          <h1 style={{textAlign:"center", margin:"30px 0px"}}>Register</h1>
          <FormGroup
          label="User Name"
          labelFor="text-input"
          labelInfo={errors.name}
          style={{margin:"20px 0px"}}>
            <InputGroup 
              id="text-input" 
              placeholder="User Name" 
              style={{marginTop:5}}
              onChange={handleUsernameChange}
              value={username} 
            />
          </FormGroup>
          <FormGroup 
          label="Email"
          labelFor="text-input"
          labelInfo={errors.email}
          style={{margin:"20px 0px"}}>
            <InputGroup 
              id="text-input" 
              placeholder="Email" 
              style={{marginTop:5}}
              onChange={handleEmailChange}
              value={email} 
            />
          </FormGroup>
          <FormGroup
          label="Password"
          labelFor="text-input"
          labelInfo={errors.password}
          style={{margin:"20px 0px"}}>
            <InputGroup 
              id="text-input" 
              placeholder="Password" 
              style={{marginTop:5}} 
              onChange={handlePasswordChange}
              value={password}
            />
          </FormGroup>
          <FormGroup
          label="Confirm Password"
          labelFor="text-input"
          labelInfo={errors.password2}
          style={{margin:"20px 0px"}}>
            <InputGroup 
              id="text-input" 
              placeholder="Confirm Password" 
              style={{marginTop:5}}
              onChange={handleConfirmPasswordChange}
              value={confirmPassword} 
            />
          </FormGroup>
          <ButtonGroup fill style={{ marginTop: 40, height: "40px" }}>
            <Link to="/" style={{width:"50%", padding:"0px"}}><Button intent="success" style={{width:"100%", height:"100%"}}>Back</Button></Link>
            <Button intent="primary" style={{width:"50%"}} onClick={handleSignUp}>Sign Up</Button>
          </ButtonGroup>
        </Card>
    )
}

export default RegisterComponent;