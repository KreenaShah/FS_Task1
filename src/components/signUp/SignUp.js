import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';

// CSS file
import './SignUp.css'

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

function SignUp() {


  return (
    <div className="signUp_container">
      <ButtonAppBar />
      <div className="signUp_subContainer">
        <p className="signUp_text">Sign Up</p>
        <form>
          <TextField
            required
            id="outlined-required"
            label="Name"
            // defaultValue="Username"
            placeholder="Kreena"
            sx={{ ml: 2, mt: 2, width: "31ch" }}
          />
          <TextField
            required
            id="outlined-required"
            label="Email"
            // defaultValue="Email"
            placeholder="kreenashah61260@gmail.com"
            sx={{ ml: 2, mt: 2, width: "31ch" }}
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            placeholder="Password"
            sx={{ ml: 2, mt: 2, width: "31ch" }}
          />
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            pass
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ ml: 2, mt: 2, width: "31ch" }}
          />
          <TextField
            required
            id="outlined-required"
            label="Role"
            placeholder="Admin/User"
            defaultValue="Role"
            sx={{ ml: 2, mt: 2, width: "31ch" }}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{ ml: 3, mt: 2, width: "31ch", backgroundColor: "teal" }}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
