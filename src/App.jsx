// App.jsx
import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Description } from "./components/description";
import { Banner } from "./components/banner";
import { Gallery } from "./components/gallery";
import { Footer } from "./components/footer";
import { Infosection } from "./components/infosection";
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

  // Check if landingPageData is available before rendering
  if (!landingPageData.Banner || !landingPageData.Gallery) {
    return null; // or render a loading state
  }

  // Infosection items for the first Infosection
  const infoSectionItems1 = [
    { icon: "fa-train", text: landingPageData.Infosection.byTrainParagraph },
    { icon: "fa-bus", text: landingPageData.Infosection.byBusParagraph },
    { icon: "fa-ship", text: landingPageData.Infosection.byBoatParagraph },
  ];

  // Infosection items for the second Infosection
  const infoSectionItems2 = [
    { icon: "fa-male", text: landingPageData.Infosection.byFootParagraph },
  ];

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Description data={landingPageData.Description} />

      {/* First Banner */}
      {landingPageData.Banner.byVehicleText && (
        <Banner
          title="Come arrivare alla Baia da Salerno"
          text={landingPageData.Banner.byVehicleText}
        />
      )}

      {/* First Infosection */}
      <Infosection items={infoSectionItems1} />

      {/* Second Banner */}
      {landingPageData.Banner.byFootText && (
        <Banner
          title="Come arrivare alla Baia da Salerno"
          text={landingPageData.Banner.byFootText}
        />
      )}

      {/* Second Infosection */}
      <Infosection items={infoSectionItems2} />

      {/* Third Banner */}
      <Banner title="Gallery" text="" />

      <Gallery data={landingPageData.Gallery} />
      <Footer data={landingPageData.Contact} />
    </div>
  );
};

export default App;
