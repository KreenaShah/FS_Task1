import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';

// CSS file
import './Login.css'
// import { makeStyles } from '@mui/material';
// import { ClassNames } from '@emotion/react';

function ButtonAppBar() {
  return (
    <Box >
      <AppBar position="static" sx={{ backgroundColor:'teal',borderBlockStyle:'none',alignItems:'flex-end',height:50}}>
        <Toolbar>
          {/* <Button color="inherit" sx={{ fontSize:15 , color:'black'}}>Home</Button> */}
          <Button color="inherit" sx={{ fontSize:18 , color:'black'}}><Link to="/login" className='nav'>Login</Link></Button>
          <Button color="inherit" sx={{ fontSize:18 , color:'black'}}><Link to="/signUp" className='nav'>Sign Up</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

function Login() {
  const[name , setName] = useState("");
  const[email , setEmail] = useState("");
  const[password , setPassword] = useState("");
  const[role , setRole] = useState("");
  const[error , setError] = useState(false);

  const collectData = () => {
    console.log(name,email,password,role);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name.length === 0 || password.length <= 6 || role.length === 0 || email.length === 0 ) {
      setError(true)
      console.log(error);
    }
    if(name && password) {
    console.log(name,email,password,role);
    }
  }

  return (
    <div className="login_container">
      <form action="/login" method="POST" onSubmit={handleSubmit}>
        <ButtonAppBar />
        <div className="login_subContainer">
          <p className="login_text">Login</p>
          <TextField
            error={error}
            className="input"
            required
            id="outlined-required"
            label="Name"
            // defaultValue="Username"
            placeholder="Kreena"
            name="name"
            sx={{ ml: 2, mt: 1, width: "31ch" }}
            // value= {name}
            onChange={(e) => setName(e.target.value)}
          />
          {error && name.length <= 0 ? <p className="Invalid">Invalid</p> : ""}
          {/* <p className='Invalid'>Invalid</p> */}

          <TextField
            required
            id="outlined-required"
            label="Email"
            // defaultValue="Email"
            sx={{ ml: 2, mt: 2, width: "31ch" }}
            // value={email}
            placeholder="kreenashah61260@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            name="Email"
          />
          {error && name.length <= 0 ? <p className="Invalid">Invalid</p> : ""}
          {/* <p className='Invalid'>Invalid</p> */}
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            sx={{ ml: 2, mt: 2, width: "31ch" }}
            placeholder="Password"
            name="password"
            // value = {password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && name.length <= 0 ? <p className="Invalid">Invalid</p> : ""}
          {/* <p className='Invalid'>Invalid</p> */}
          <TextField
            required
            id="outlined-required"
            label="Role"
            // defaultValue="Role"
            sx={{ ml: 2, mt: 2, width: "31ch" }}
            // value = {role}
            placeholder="Admin/User"
            name="role"
            onChange={(e) => setRole(e.target.value)}
          />
          {error && name.length <= 0 ? <p className="Invalid">Invalid</p> : ""}
          {/* <p className='Invalid'>Invalid</p> */}
          <Button
            type="submit"
            onClick={handleSubmit}
            variant="contained"
            sx={{ ml: 3, mt: 1.4, width: "31ch", backgroundColor: "teal" }}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Login;








