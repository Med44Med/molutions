"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import { PDFViewer, Document, Page, View, Text } from "@react-pdf/renderer";
import Popup from "@molutions/popup";

import { IoText } from "react-icons/io5";
import { FaImage, FaTable  } from "react-icons/fa";


import usePdfs from "../../../../lib/zustand/pdfs";
import Accordion from "@molutions/accordion"

const NewPdfGenratorpage = () => {
  const { pdfs } = usePdfs();
  const id = useSearchParams().get("id");

  const [pdf, setPdf] = useState(null);

  const [addText, setAddText] = useState(true)

  useEffect(() => {
    if (pdfs === []) {
      return;
    }
    setPdf(pdfs.filter((e) => e.id === id)[0]);
  }, [pdfs]);

  useEffect(() => {
    console.log(pdf);
  }, [pdf]);

  return (
    <>
      <div className="w-full h-[100vh] flex">
        <div className="flex-3/4 h-full bg-secondText"></div>
        <div className="bg-primary flex-1/4 p-2 flex flex-col justify-start items-start">
          <div className="w-full flex flex-col justify-center items-center gap-1">
            <h1 className="w-full text-center text-light font-semibold text-4xl select-none">
              PDF Generator
            </h1>
            <h6 className="w-full text-center text-light font-medium text-lg select-none ml-24">
              by React-PDF
            </h6>
          </div>
          <Accordion className="w-full flex flex-col" defaultIndex={2}>
            <Accordion.Item
              index={1}
              title="File Proprities"
              className="flex flex-col gap-1"
            >
              <h1 className="text-sm text-light mt-2">File name</h1>
              <input
                type="text"
                className="border border-light rounded bg-light text-dark w-4/5 outline-none px-2 py-1"
                value={pdf?.name}
                onChange={(e) =>
                  setPdf((perv) => ({ ...perv, name: e.target.value }))
                }
                placeholder="File name"
              />
              <h1 className="text-sm text-light mt-2">Author name</h1>
              <input
                type="text"
                className="border border-light rounded bg-light text-dark w-4/5 outline-none px-2 py-1"
                value={pdf?.author}
                onChange={(e) =>
                  setPdf((perv) => ({ ...perv, author: e.target.value }))
                }
                placeholder="Author name"
              />
              <h1 className="text-sm text-light mt-2">Page size</h1>
              <select
                className="border border-light rounded bg-light text-dark w-4/5 outline-none px-2 py-1"
                onChange={(e) =>
                  setPdf((perv) => ({ ...perv, size: e.target.value }))
                }
                value={pdf?.size}
              >
                <option value="A3">A3</option>
                <option value="A4">A4</option>
              </select>
              <div className="mt-5 mx-auto border border-light bg-primary text-light px-10 py-1 rounded cursor-pointer shadow">
                Modify
              </div>
            </Accordion.Item>
            <Accordion.Item index={2} title="Add Contents" className="flex flex-col gap-2">
              <div className='rounded shadow py-2 bg-light flex justify-center items-center gap-2 cursor-pointer select-none'>
                <IoText className='text-xl' />
                <h1 className='text-md'>Text</h1>
              </div>
              <div className='rounded shadow py-2 bg-light flex justify-center items-center gap-2 cursor-pointer select-none'>
                <FaTable  className='text-xl' />
                <h1 className='text-md'>Table</h1>
              </div>
              <div className='rounded shadow py-2 bg-light flex justify-center items-center gap-2 cursor-pointer select-none'>
                <FaImage className='text-xl' />
                <h1 className='text-md'>Image</h1>
              </div>
            </Accordion.Item>
          </Accordion>
        </div>
        {addText && <Popup setShow={setAddText} className='w-2/3 h-1/2 bg-accent flex justify-center items-center'><h1>hello</h1><h6>hi</h6></Popup>}
      </div>
    </>
  );
};

export default NewPdfGenratorpage;
