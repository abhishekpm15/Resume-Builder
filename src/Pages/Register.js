import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  Typography,
  Input,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
const Register = () => {
  let navigate = useNavigate();
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  

  const register = async () => {
    createUserWithEmailAndPassword(auth, registerEmail, registerPassword).then(
      (response) => {
        toast.success("Sucessfully registered");
        navigate("/Signout");
        console.log(response);
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
            Sign Up
          </Typography>
          <Input
            label="Email"
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
          />
          <Input
            label="Password"
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
          />
        </CardBody>
        <CardFooter>
          <Button onClick={register}> Register </Button>
          <Typography color="blue" className="my-5">
            Already a user?<Link to="/"> Login </Link>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
