import React, { useState, useEffect } from "react";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Footer } from "./components/footer";
import { Form } from "./components/form"; 
import { References } from "./components/references";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (

    <div>
      <Header data={landingPageData.Header} />
      <Features title="Conteúdo" data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Services data={landingPageData.Recommendations} />
      <Form />
      <References />
      <Footer />
    </div>
  );
};

export default App;
