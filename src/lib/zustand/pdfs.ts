import { create } from "zustand";
import { persist } from "zustand/middleware";

const usePdfs = create(
  persist(
    (set) => ({
      pdfs: [],
      addPdfs: (pdf) =>set((state) => ({ pdfs:[...state.pdfs,pdf] })),
      removePdfs: (i) =>set((state) => ({ pdfs:state.pdfs.filter(pdf => pdf.id !== i ) })),
      clearPdfs:()=>set({pdfs:[]})
    }),
    {
      name: "pdfs",
    }
  )
);

export default usePdfs;