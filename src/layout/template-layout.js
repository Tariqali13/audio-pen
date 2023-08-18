import React from "react";
import { Header, Footer } from "./components";

const TemplateLayout = ({ handleOpenLoginSignUpModel, children }) => {
  return (
    <>
      <Header handleOpenLoginSignUpModel={handleOpenLoginSignUpModel} />
      {children}
      <Footer />
    </>
  );
};

export default TemplateLayout;
