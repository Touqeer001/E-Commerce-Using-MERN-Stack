import React,{ useState,useContext} from "react";


import {
  Dialog,
  Box,
  TextField,
  Button,
  Typography,
  styled,
} from "@mui/material";

import {authenticateSignup } from '../../API Services/api.js';
// import { DataContext } from "../../Context/DataProvider.jsx";

const Component = styled(Box)`
  height: 90vh;
  width: 80vh;
  display: flex;
`;
const Color = styled(Box)`
  background: black;
  height: 100%;
  width: 40%;
`;
const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  overflow: ;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;
const LoginButton = styled(Button)`
  text-transform: none;
  background: black;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;
const RequestOTP = styled(Button)`
  text-transform: none;
  background: black;
  color: #fff;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 12px;
`;
const CreateAccount = styled(Typography)`
  margin: auto 0 5px 0;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
`;
const accountInitialValues = {
  login: {
    view: "login",
  },
  signup: {
    view: "signup",
  },
};
const signupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const LoginDailog= ({ open, setOpen,setAccount }) => {
    // const [ login, setLogin ] = useState(loginInitialValues);
    const [ signup, setSignup ] = useState(signupInitialValues);
    const [ error, showError] = useState(false);
    const [ account, toggleAccount ] = useState(accountInitialValues.login);

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.signup);
  };

  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  
  };

  const signupUser=async()=>{
   let response= await authenticateSignup(signup);
   if(!response) return;
   handleClose();
   setAccount(signup.firstname);

  }
  return (
    <Dialog open={open} onClose={handleClose}>
      <Component>
        <Color>
          <Typography>LOGIN</Typography>
        </Color>
        {account.view === "login" ? (
          <Wrapper>
            <TextField
              variant="standard"
              label="Enter Email/Mobile Number"
            ></TextField>
            <TextField variant="standard" label="Enter Password"></TextField>
            <Typography>
              
            </Typography>
            <LoginButton variant="contained">Login</LoginButton>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <RequestOTP variant="contained">Request OTP</RequestOTP>
            <CreateAccount onClick={() => toggleSignup()}>
              Create an account{" "}
            </CreateAccount>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="firstname"
              label="Enter Firstname"
            />
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="lastname"
              label="Enter Lastname"
            />
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="username"
              label="Enter Username"
            />
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="email"
              label="Enter Email"
            />
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="password"
              label="Enter Password"
            />
            {/* <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="phone"
              label="Enter Phone"
            /> */}
            <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
          </Wrapper>
        )}
      </Component>
    </Dialog>
  );
};
export default LoginDailog;


