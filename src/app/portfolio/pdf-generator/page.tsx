"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { v5 as uuidv5 } from "uuid";

import { FaFilePdf, FaRegFilePdf } from "react-icons/fa6";
import { IoTrashBin } from "react-icons/io5";

import usePdfs from "../../../lib/zustand/pdfs";
import Popup from "../../../../components/popup";
import Link from 'next/link';

const PDFGenrator = () => {
  const router = useRouter();

  const [showAddPDF, setShowAddPDF] = useState(false);
  const [newPDF, setNewPDF] = useState({
    name: "",
    author: "",
    size: "A4",
    id: "",
    content: [],
  });
  const [error, setError] = useState("");

  const { pdfs, clearPdfs, removePdfs, addPdfs } = usePdfs();

  useEffect(() => {
    const pdfStorage = localStorage.getItem("pdfs");
    if (!pdfStorage) {
      clearPdfs();
    }
  }, []);

  const handlePDFName = (e) => {
    const MY_NAMESPACE = "1b671a64-40d5-491e-99b0-da01ff1f3341";
    const id = uuidv5(e.target.value + +new Date(), MY_NAMESPACE);
    setNewPDF((perv) => ({ ...perv, id, name: e.target.value }));
  };

  const handleAddPDF = () => {    
    if (newPDF.name === "") {
      setError("file name must not be empty");
    }
    addPdfs(newPDF);
    router.push(`/portfolio/pdf-generator/pdf-editor?id=${newPDF.id}`);
  };

  useEffect(() => {
    console.log(newPDF);
  }, [newPDF]);

  return (
    <div className="bg-background w-full h-[100vh] px-5 flex flex-col justify-start items-center gap-3">
      <h1 className="py-10 w-full text-center text-foreground font-semibold text-4xl select-none">
        PDF Generator
      </h1>
      <div
        onClick={() => clearPdfs()}
        className="ml-auto px-5 py-2 rounded-xl flex justify-center items-center gap-2 cursor-pointer hover:bg-accent hover:text-light"
      >
        <h6>Clear</h6>
        <IoTrashBin />
      </div>
      <div className="w-full flex-auto rounded-2xl shadow-xl bg-surface p-5 flex justify-center items-start flex-wrap gap-20">
        <div
          onClick={() => setShowAddPDF(true)}
          className="w-40 p-5 rounded-2xl border border-dashed border-primary flex flex-col justify-center items-center gap-3 cursor-pointer"
        >
          <FaRegFilePdf className="text-5xl text-primary" />
          <h1>Create</h1>
        </div>
        {pdfs.map((pdf) => (
          <Link href={{pathname:'/portfolio/pdf-generator/pdf-editor',query: { id: pdf.id }}}
            key={pdf.id}
            className="w-40 p-5 rounded-2xl flex flex-col justify-center items-center gap-3 hover:bg-blue-200 cursor-pointer"
          >
            <FaFilePdf className="text-5xl text-primary" />
            <h1>{pdf.name}</h1>
          </Link>
        ))}
      </div>
      {showAddPDF && (
        <Popup
          style="bg-surface w-4/5 h-4/5 p-5 rounded-xl flex flex-col justify-start items-center"
          setShow={setShowAddPDF}
        >
          <div className="w-full grow flex flex-col justify-start items-start gap-0.5 px-20">
            <h1>File name</h1>
            <input
              type="text"
              className="border border-secondText pl-2 py-2 rounded w-full mb-5"
              onChange={(e) => handlePDFName(e)}
            />
            <h1>Author name</h1>
            <input
              type="text"
              className="border border-secondText pl-2 py-2 rounded w-full mb-5"
              onChange={(e) =>
                setNewPDF((perv) => ({ ...perv, author: e.target.value }))
              }
            />

            <h1>Page size</h1>
            <select
              className="border border-secondText pl-2 py-2 rounded w-full mb-5"
              onChange={(e) =>
                setNewPDF((perv) => ({ ...perv, size: e.target.value }))
              }
            >
              <option value="A4" selected>
                A4
              </option>
              <option value="A3">A3</option>
            </select>
          </div>
          <div
            className="my-4 px-5 py-2 bg-primary rounded shadow-xl cursor-pointer text-light font-semibold capitalize"
            onClick={() => handleAddPDF()}
          >
            create new PDF
          </div>
        </Popup>
      )}
    </div>
  );
};

export default PDFGenrator;
