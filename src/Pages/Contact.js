import React, { useState } from "react";
import Header from "../components/Header";
import ReactLoading from "react-loading"

const Contact = () => {
  const [build, setBuild] = useState(false);

  useState(() => {
    setTimeout(() => {
      setBuild(true);
    }, 2000);
  });

  return (
    <div>
      <Header />
      {!build ? (
        <div className="flex justify-center my-[10%]">
          <ReactLoading
            type="bubbles"
            color="#00BFFF"
            height={667}
            width={375}
          />
        </div>
      ) : (
        <div> </div>
      )}
    </div>
  );
};

export default Contact;
