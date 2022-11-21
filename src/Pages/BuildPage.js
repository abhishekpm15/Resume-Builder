import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ReactLoading from "react-loading";
import { Button } from "@material-tailwind/react";
import { useCSVReader } from "react-papaparse";
import "./BuildPage.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
// function saveDocumentToFile(doc, fileName) {
//   Packer.toBlob(doc).then((blob) => {
//     saveAs(blob, fileName);
//   });
// }

// export const results2 = [[]]
const flag = 0;
const flag2 = 0;
const flag3 = 0;

const BuildPage = () => {
  const SettingResult = (e)=>{
    console.log(results3)
    setResults3(e)
  }
  // const {results2,setResults2,results3,setResults3,results4,setResults4} = useAuth()
  const {results3,setResults3} = useAuth();
  const navigate = useNavigate();
  
  // const [results3, setResults3] = useState([])
  const { CSVReader } = useCSVReader();
  const [build, setBuild] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [flag1 ,setFlag1] = useState(false);
  const [flag2 ,setFlag2] = useState(false);
  const [flag3 ,setFlag3] = useState(false);
  const [buttons ,setButton] = useState(false);
 
  const PreviewNavigate = () => {
    navigate("/PreviewPage");
  };
  //   let doc = new Document();
  //   doc.createParagraph("Hello World");
  // saveDocumentToFile(doc,"First.docx");

  useEffect(() => {
    setTimeout(() => {
      setBuild(true);
    }, 2000);
  }, []);

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
        <div className=" stepscontainer bg-[url('https://www.resumonk.com/assets/bgs/pattern-a22a4b6635b785fb8a96255f4b0377efdee937e81e32cf3c3e7d23c4b95768da.png')] bg-contain w-screen h-screen">
          <div className="content ">
            <div className="text-xl flex justify-center">
              <div className="mt-20">
                <div className="mt-10 m-5 upload text-lg">
                  Upload your Certificates.csv file
                </div>
                <CSVReader
                  onUploadAccepted={(results: any) => {
                    // console.log(results.data[1][0]);
                    // results2.push(results.data);
                    SettingResult(results.data);
                    
                    // setResults2(results.data[0]);
                    // console.log(results2)
                    setUploaded(true);
                    setFlag1(true)
                  }}
                >
                  {({
                    getRootProps,
                    acceptedFile,
                    ProgressBar,
                    getRemoveFileProps,
                  }) => (
                    <>
                      <div className="my-auto mx-auto w-36">
                        <Button className="btn" {...getRootProps()}>
                          Browse file
                        </Button>
                        <div className=" mx-7 border-solid border-black h-5 my-3 text-sm">
                          {acceptedFile && acceptedFile.name}
                        </div>
                        {acceptedFile && acceptedFile.name ? (
                          <>
                            <Button
                              {...getRemoveFileProps()}
                              color="red"
                              className="px-4 inline-block btn"
                            >
                              Remove
                            </Button>
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                      {/* <ProgressBar className="bg-red" /> */}
                    </>
                  )}
                </CSVReader>
              </div>
              <div className="mt-20">
                <div className="mt-10 m-5 upload text-lg">
                  Upload your Profile.csv file
                </div>
                <CSVReader
                  onUploadAccepted={(results: any) => {
                    // console.log(results.data);
                    // setResults3(results.data);
                    // console.log(results3)
                    setUploaded(true);
                    setFlag2(true)
                  }}
                >
                  {({
                    getRootProps,
                    acceptedFile,
                    ProgressBar,
                    getRemoveFileProps,
                  }) => (
                    <>
                      <div className="my-auto mx-auto w-36">
                        <Button className="btn" {...getRootProps()}>
                          Browse file
                        </Button>
                        <div className=" mx-7 border-solid border-black h-5 my-3 text-sm">
                          {acceptedFile && acceptedFile.name}
                        </div>
                        {acceptedFile && acceptedFile.name ? (
                          <>
                            <Button
                              {...getRemoveFileProps()}
                              color="red"
                              className="px-4 inline-block btn"
                            >
                              Remove
                            </Button>
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                      {/* <ProgressBar className="bg-red" /> */}
                    </>
                  )}
                </CSVReader>
              </div>
              <div className="mt-20">
                <div className="mt-10 m-5 upload text-lg">
                  Upload your Skills.csv file
                </div>
                <CSVReader
                  onUploadAccepted={(results: any) => {
                    // console.log(results.data);
                    // setResults4(results.data[0]);
                    // console.log(results4)
                    setUploaded(true);
                    setFlag3(true)
                  }}
                >
                  {({
                    getRootProps,
                    acceptedFile,
                    ProgressBar,
                    getRemoveFileProps,
                  }) => (
                    <>
                      <div className="my-auto mx-auto w-36">
                        <Button className="btn" {...getRootProps()}>
                          Browse file
                        </Button>
                        <div className=" mx-7 border-solid border-black h-5 my-3 text-sm">
                          {acceptedFile && acceptedFile.name}
                        </div>
                        {acceptedFile && acceptedFile.name ? (
                          <>
                            <Button
                              {...getRemoveFileProps()}
                              color="red"
                              className="px-4 inline-block btn"
                            >
                              Remove
                            </Button>
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                      {/* <ProgressBar className="bg-red" /> */}
                    </>
                  )}
                </CSVReader>
              </div>
            </div>

            <div className="flex justify-center">
          
            <div className="float-left">
              <div className="my-10">
                <hr className="border-2"></hr>
                <div className="mx-3">
                <div className="text-2xl flex justify-start font-bold"> Certificates </div>
                  {/* <div className="flex justify-start my-1">{results3[1][0]}</div> */}
                  {/* <div className="flex justify-start my-1"> {results3[0][2][0]}</div>
                  <div className="flex justify-start my-1">{results2[0][3][0]}</div>
                  <div className="flex justify-start my-1">{results2[0][4][0]}</div>
                  <div className="flex justify-start my-1">{results2[0][5][0]}</div>
                  <div className="flex justify-start my-1">{results2[0][6][0]}</div>
                  <div className="flex justify-start my-1">{results2[0][7][0]}</div>
                  <div className="flex justify-start my-1">{results2[0][8][0]}</div> */}
                </div>
              </div>
            </div>
          
          
            {/* <div className="float-right">
              <div className="my-10">
                <hr className="border-2"></hr>
                <div className="mx-3">
                <div className="text-2xl font-bold flex justify-start"> Link </div>
                  <div className="flex justify-start my-1">{results2[0][1][1]}</div>
                  <div className="flex justify-start my-1"> {results2[0][2][1]}</div>
                  <div className="flex justify-start my-1">{results2[0][3][1]}</div>
                  <div className="flex justify-start my-1">{results2[0][4][1]}</div>
                  <div className="flex justify-start my-1">{results2[0][5][1]}</div>
                  <div className="flex justify-start my-1">{results2[0][6][1]}</div>
                  <div className="flex justify-start my-1">{results2[0][7][1]}</div>
                  <div className="flex justify-start my-1">{results2[0][8][1]}</div>
                </div>
              </div>
            </div>
          
          </div>
          <div className="flex justify-center">
          
            <div className="float-left">
              <div className="my-10">
                <hr className="border-2"></hr>
                <div className="mx-3">
                <div className="text-2xl font-bold flex justify-start"> Company </div>
                  <div className="flex justify-start my-1">{results2[0][1][2]}</div>
                  <div className="flex justify-start my-1"> {results2[0][2][2]}</div>
                  <div className="flex justify-start my-1">{results2[0][3][2]}</div>
                  <div className="flex justify-start my-1">{results2[0][4][2]}</div>
                  <div className="flex justify-start my-1">{results2[0][5][2]}</div>
                  <div className="flex justify-start my-1">{results2[0][6][2]}</div>
                  <div className="flex justify-start my-1">{results2[0][7][2]}</div>
                  <div className="flex justify-start my-1">{results2[0][8][2]}</div>
                </div>
              </div>
            </div>
          
            <div className="float-right">
              <div className="my-10">
                <hr className="border-2"></hr>
                <div className="mx-3">
                <div className="text-2xl font-bold flex justify-start"> Date of Start </div>
                  <div className="flex justify-start my-1">{results2[0][1][3]}</div>
                  <div className="flex justify-start my-1"> {results2[0][2][3]}</div>
                  <div className="flex justify-start my-1">{results2[0][3][3]}</div>
                  <div className="flex justify-start my-1">{results2[0][4][3]}</div>
                  <div className="flex justify-start my-1">{results2[0][5][3]}</div>
                  <div className="flex justify-start my-1">{results2[0][6][3]}</div>
                  <div className="flex justify-start my-1">{results2[0][7][3]}</div>
                  <div className="flex justify-start my-1">{results2[0][8][3]}</div>
                </div>
              </div>
            </div> */}
          
          </div>
            {(flag1 && flag2 && flag3) ? (
              <>
                <div className="mt-[15%]">
                  Please be patient.. We are building your Resume
                </div>
                <div>
                 {
                   setTimeout(() => {
                     setButton(true);
                   }, 1000)
                 }
                 {
                    (buttons) ? <Button className="mt-4 mx-4" onClick={PreviewNavigate}>PREVIEW</Button> : <div></div>
                  }
                  {
                    (buttons) ? <Button className="mt-4 mx-4">Download</Button> : <div></div>
                  }
                  
                </div>
              </>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default BuildPage;
