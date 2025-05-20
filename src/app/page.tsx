import React from "react";
import Header from '../../components/header';
import useTheme from '../lib/zustand/theme';

const Page = () => {
  const {theme} = useTheme()
  return (
    <>
      <Header />
      <main>
        <section>{theme}</section>
      </main>
    </>
  );
};

export default Page;
