import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import Header from "../components/Header";

const BuildPage3 = () => {
  const [build, setBuild] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setBuild(true);
    }, 2000);
  }, []);

  return (
    <div>
      <div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
      <Header />
      {!build ? (
        <div className="flex justify-center my-[10%]">
          <ReactLoading
            type="bubbles"
            color="#7854F3"
            height={667}
            width={375}
          />
        </div>
      ) : (
        <div className=" stepscontainer bg-[url('https://www.resumonk.com/assets/bgs/pattern-a22a4b6635b785fb8a96255f4b0377efdee937e81e32cf3c3e7d23c4b95768da.png')] bg-contain w-screen h-screen">
        </div>
      )}
    </div>
  );
};

export default BuildPage3;
