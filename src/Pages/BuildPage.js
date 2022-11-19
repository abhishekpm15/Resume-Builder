import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ReactLoading from "react-loading";
import { Button } from "@material-tailwind/react";
import { results2 } from "./HomePage";
import "./BuildPage.css";
// function saveDocumentToFile(doc, fileName) {
//   Packer.toBlob(doc).then((blob) => {
//     saveAs(blob, fileName);
//   });
// }

const BuildPage = () => {
  const [build, setBuild] = useState(false);

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
        <div className="content">
          <div>Please be patient.. We are building your Resume</div>
          <div>
            {/* <img src={Building} alt="Building" /> */}
            <Button>Download</Button>
          </div>
        <div className="flex justify-center">
          {
            <div className="float-left">
              <div className="my-10">
                <hr className="border-2"></hr>
                <div className="mx-3">
                <div className="text-2xl flex justify-start font-bold"> Certificates </div>
                  <div className="flex justify-start my-1">{results2[0][1][0]}</div>
                  <div className="flex justify-start my-1"> {results2[0][2][0]}</div>
                  <div className="flex justify-start my-1">{results2[0][3][0]}</div>
                  <div className="flex justify-start my-1">{results2[0][4][0]}</div>
                  <div className="flex justify-start my-1">{results2[0][5][0]}</div>
                  <div className="flex justify-start my-1">{results2[0][6][0]}</div>
                  <div className="flex justify-start my-1">{results2[0][7][0]}</div>
                  <div className="flex justify-start my-1">{results2[0][8][0]}</div>
                </div>
              </div>
            </div>
          }
          {
            <div className="float-right">
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
          }
          </div>
          <div className="flex justify-center">
          {
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
          }
          {
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
            </div>
          }
          </div>
          
        </div>
      )}
    </div>
  );
};

export default BuildPage;
