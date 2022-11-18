import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { signInWithEmailAndPassword,getAuth } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { user , setUser} = useAuth();
  const navigate = useNavigate();
  const auth = getAuth();
  const user2 = auth.currentUser;
  if(user2){
    navigate("/HomePage");
    // setUser(user2);
    // console.log(user2); 
  }
  // else{
  //   setUser(null);
  // }
 
  const [loginEmail, setloginEmail] = useState("");
  const [loginPassword, setloginPassword] = useState("");

  const { SignUp } = useAuth();


  const signInWithGoogle = () => {
    SignUp();
  };


  const signIn = async () => {
    signInWithEmailAndPassword(auth, loginEmail, loginPassword).then(
      (response) => {
        toast.success("Sucessfully LoggedIn");
        navigate("/HomePage");
        // console.log(response);
      },
      (err) => {
        toast.error(err.message);
      }
    );
  };
  return (
    <div className="flex justify-center my-[9%]">
      <ToastContainer />
      <Card className="w-96  border-blue-gray-700 shadow-2xl">
        <CardBody className="flex flex-col gap-4">
          <Typography variant="h3" color="blue">
            Sign In
          </Typography>
          <Input
            label="Email"
            onChange={(event) => {
              setloginEmail(event.target.value);
            }}
          />
          <Input
            label="Password"
            onChange={(event) => {
              setloginPassword(event.target.value);
            }}
          />
        </CardBody>
        <CardFooter>
          <Button onClick={signIn}> Login </Button>
          <Typography color="blue" className="my-5">
            Not registered?<Link to="/Register"> Register </Link>
          </Typography>
          <GoogleButton
            className="mx-auto"
            onClick={signInWithGoogle}
          ></GoogleButton>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
