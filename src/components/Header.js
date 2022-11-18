import { Button } from "@material-tailwind/react";
import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { auth } from "../firebase";
const Header = () => {
  const { user} = useAuth();

  const navigate = useNavigate();

  const logout = () => {
    signOut(auth);
    navigate("/");
  };

  return (
    <div className="h-12 bg-blue-500 text-xl text-white font-semibold flex justify-between">
      <div className="flex my-2 mx-3">
      <a href="/HomePage"> <div className="px-5 hover:text-black cursor-pointer">Home</div></a> 
      <a href="/Contact"> <div className="px-5 hover:text-black cursor-pointer">Contact</div></a> 
      <a href="/About">  <div className="px-5 hover:text-black cursor-pointer">About</div></a>
      </div>
      <div className="flex">
        <div className="text-sm my-3 mx-4 px-2">
          Logged in as : { user ? user.email : navigate("/")}
        </div>
        <Button color="red" onClick={logout} className="px-2 mx-4">
          {" "}
          LOGOUT{" "}
        </Button>
      </div>
    </div>
  );
};

export default Header;
