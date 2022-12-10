import React, { useCallback, useEffect, useState } from "react";
import Header from "../components/Header";
import ReactLoading from "react-loading";
import { Button } from "@material-tailwind/react";
import "./BuildPage2.css";
import { useNavigate } from "react-router-dom";

let i = 0;
const names = [
  "Please wait while we process your Resume",
  "Just few more moments",
  "Here is your Resume",
];

const LinkedInUpload = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setBuild(true);
    }, 2000);
  }, []);

  const [loaded, setLoaded] = useState(false);

  const upload = () => {
    setLoaded(true);
    setTimeout(() => {
      i = 0;
      setLoaded(false);
      navigate("/ResumePage");
    }, 15000);
  };

  const [newName, setnewName] = useState("");

  const shuffle = useCallback(() => {
    setnewName(names[i++]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 5000);
    return () => clearInterval(intervalID);
  }, [shuffle]);

  const [build, setBuild] = useState(false);
  return (
    <div>
      <div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
      <Header />
      {loaded ? (
        <div className="justify-center my-[10%]">
          <div className="text-3xl all-names">{newName}</div>
          <div className="flex justify-center">
            <ReactLoading
              type="cubes"
              color="#7854F3"
              height={667}
              width={375}
            />
          </div>
        </div>
      ) : (
        <>
          {!build ? (
            <div className="flex justify-center my-[6%]">
              <ReactLoading
                type="bubbles"
                color="#7854F3"
                height={667}
                width={375}
              />
            </div>
          ) : (
            <>
              <div className=" stepscontainer bg-[url('https://www.resumonk.com/assets/bgs/pattern-a22a4b6635b785fb8a96255f4b0377efdee937e81e32cf3c3e7d23c4b95768da.png')] bg-contain w-screen h-screen">
              <input
                  type={"file"}
                  accept={".zip"}
                  className="my-9"
                  name="file"
                />
                <Button
                  type="submit"
                  name="submit"
                  onClick={upload}
                  className="mx-4"
                >
                  Submit
                </Button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default LinkedInUpload;
