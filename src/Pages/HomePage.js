import React from "react";
import { getAuth } from "firebase/auth";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const user2 = auth.currentUser;
  // console.log(user2);
  if (!user2) {
    navigate("/");
  }
  return (
    <div>
      <Header />
      <div className="text-3xl mb-7 mt-4">Welcome to Easy Click</div>
      <div className="text-2xl">
        Easy Click will help you build your personal resume using LinkedIn
        profile
      </div>
      <div className="text-center text-3xl my-24">
        Contact Import
        <div
          className="p-6 my-5 mx-auto border-4 border-blue-500 w-80 text-sm"
          onDragOver={(e) => {
            e.preventDefault();
          }}
          onDrop={(e) => {
            //e.preventDefault();
              <h1>e</h1>
            console.log(e);
          }}
        >
          DROP HERE
        </div>
      </div>
    </div>
  );
};

export default HomePage;
