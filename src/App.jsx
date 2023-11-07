import React, { useState, useEffect } from "react";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Recommendations } from "./components/Recommendations";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Services } from "./components/services";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
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
  console.log(landingPageData.About)
  return (

    <div>
      <Header data={landingPageData.Header} />
      <Features title="Conteúdo" data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Services data={landingPageData.Services} />
      <Recommendations data={landingPageData.Recommendations} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
