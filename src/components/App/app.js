import React, { useState, useEffect } from 'react'
import { Header } from '../header/header'
import { Intro } from '../intro/intro'
import { Description } from '../description/description'
import { Banner } from '../banner/banner'
import { Gallery } from '../gallery/gallery'
import { Footer } from '../footer/footer'
import { Infosection } from '../infoSection/infoSection'
import { ScrollToTopButton } from '../scrollToTopButton/scrollToTopButton'

import JsonData from '../../common/data.json'
import SmoothScroll from 'smooth-scroll'
import './app.css'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  // Check if landingPageData is available before rendering
  if (!landingPageData.Banner || !landingPageData.Gallery) {
    return null
  }

  // Infosection items for the first Infosection
  const infoSectionItems1 = [
    { icon: 'fa-train', text: landingPageData.Infosection.byTrainParagraph },
    { icon: 'fa-bus', text: landingPageData.Infosection.byBusParagraph },
    { icon: 'fa-ship', text: landingPageData.Infosection.byBoatParagraph }
  ]

  // Infosection items for the second Infosection
  const infoSectionItems2 = [
    { icon: 'fa-male', text: landingPageData.Infosection.byFootParagraph }
  ]

  return (
    <div className='App'>
      <Header />
      <Intro data={landingPageData.ImageBlock} />
      <Description data={landingPageData.Description} />

      <Banner title='Gallery' text='' />

      <Gallery data={landingPageData.Gallery} />

      {landingPageData.Banner.byVehicleText && (
        <Banner
          title='Come arrivare alla Baia da Salerno'
          text={landingPageData.Banner.byVehicleText}
        />
      )}

      <Infosection items={infoSectionItems1} />

      {landingPageData.Banner.byFootText && (
        <Banner
          title='Come arrivare alla Baia da Salerno'
          text={landingPageData.Banner.byFootText}
        />
      )}

      <Infosection items={infoSectionItems2} />

      <Footer data={landingPageData.Contact} />
       <ScrollToTopButton />
    </div>
  )
}

export default App
