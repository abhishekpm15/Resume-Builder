import { Button } from "@material-tailwind/react";
import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const user2 = auth.currentUser;

  const logout = () => {
    signOut(auth);
    navigate("/");
  };

  return (
    <div className="h-12 bg-blue-gray-900 text-xl text-white font-semibold flex justify-between navbar">
      <div className="flex my-2 mx-3">
        <a href="/">
          {" "}
          <div className="px-5 hover:text-blue-200 cursor-pointer">Home</div>
        </a>
        <a href="/Contact">
          {" "}
          <div className="px-5 hover:text-blue-200 cursor-pointer">Contact</div>
        </a>
        <a href="/About">
          {" "}
          <div className="px-5 hover:text-blue-200 cursor-pointer">About</div>
        </a>
      </div>
      <div className="flex">
        {user2 ? (
          <>
            <div className="text-sm my-3 mx-4 px-2">
              Logged in as : {user2.email}
            </div>

            <Button color="red" onClick={logout} className="px-2 mx-4">
              {" "}
              LOGOUT{" "}
            </Button>
          </>
        ) : (
         <a href="/Login"> <Button className="my-1 mx-4">Sign In</Button></a>
        )}
      </div>
    </div>
  );
};

export default Header;
