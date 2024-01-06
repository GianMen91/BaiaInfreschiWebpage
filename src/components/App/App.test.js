import React from 'react';
import { shallow } from 'enzyme';
import App from './index';
import { Header } from '../Header';
import { ImageBlock } from '../ImageBlock';
import { Description } from '../Description';
import { Banner } from '../Banner';
import { Gallery } from '../Gallery';
import { Footer } from '../Footer';
import { Infosection } from '../InfoSection';
import { ScrollToTopButton } from '../ScrollToTopButton';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const mockData = {
  
    "Header": {
      "title": "La Baia degli Infreschi"
     },
    "Description": {
      "paragraph": "Vorresti avere info su come arrivare a Baia Infreeschi da Salerno? Allora sei giunto nel posto giusto!\n\nIndiscutibile meta turistica, la Baia degli infreschi è la meta perfetta, sia per gli amanti del trekking, sia per chi invece preferisce prendere il sole e rilassarsi in spiaggia.\n\nLa Baia degli Infreschi (o Cala degli Infreschi o Punta Infreschi) è un’area marina protetta ricca di fascino situata ad est di Marina di Camerota. \n\nInfatti è una delle baie più famose del Cilento!\n\nQuesto perchè con le sue acque dai colori del mare che spaziano dal blu cobalto al verde smeraldo non smette di affascinare i turisti da tutto il mondo!\n\n\nEletta anche  spiaggia più bella d’Italia 2014 è raggiungibile tramite mare, macchina e a piedi. Ci sono quindi molti modi per arrivare alla Baia Infreschi da Salerno. \n\nContinua a leggere per conoscerli !!"
    },
    "Infosection": {
      "byTrainParagraph": "Dalla stazione di Salerno, prendete il treno per Sapri e scendere alla stazione di Palinuro-Centola (Il viaggio con il treno dura circa un'ora e mezza.)\n \nSia all’andata che al ritorno ci sono molti treni. Il costo del biglietto è 5.70 €.\n\nPer conoscere gli orari vi basta andare sul sito di <a href='https://www.trenitalia.com' target='_blank' rel='noopener noreferrer'>Trenitalia</a>.",
      "byBusParagraph": "All’uscita della stazione di Palinuro-Centola potrete trovare un bus della compagnia “Infante” per Marina di Camerota che potrà portarvi direttamente al porto dove prendere la barca per la Baia degli Infreschi. Il viaggio con il bus  dura circa tre quarti d’ora.\n\nIl prezzo del bus è 2,40 €! \n\nPer ulteriori informazioni potete contattare la compagnia tramite i numeri 0974 93 29 38 / 0974 93 20 26 o visitare il loro <a href='https://www.agenziainfanteviaggi.it/it/home.aspx' target='_blank' rel='noopener noreferrer'>sito web</a> dal quale è possibile anche consultare gli orari dei bus.",
      "byBoatParagraph": "Una volta arrivati al porto di Marina di Camerota, per arrivare a Baia Infreschi dovrete utilizzare una barca.\n\nTra le varie opzioni  vi è la Cooperativa Cilento Mare che organizza escursioni anche alla Baia degli Infreschi con rientro il pomeriggio. Per saperne di più e scoprire le ulteriori escursioni organizzate da loro e consultare la tabella degli orari potete andare sul loro <a href='https://www.coopcilentomare.com/' target='_blank' rel='noopener noreferrer'>sito</a>.\n\nLa barca impiegherà circa 40 minuti per arrivare alla Baia degli Infreschi e il costo è di 20 €.  Il prezzo varia in base alle fasce d’età. Per saperne di più, clicca <a href='https://www.coopcilentomare.com/tour/porto-infreschi/' target='_blank' rel='noopener noreferrer'>qui</a>.",
      "byFootParagraph":"Una volta arrivati a Marina di Camerota, si può arrivare alla Baia deli Infreschi partendo da Monte di Luna.  Per arrivare alla baia vi occorreranno circa tre ore di cammino.\n\nQuesto percorso è molto lungo ma tramite esso si potranno raggiungere anche Cala Bianca e le spiagge del Pozzallo.\n\nIl percorso più panoramico e suggestivo, però, è sicuramente quello che parte da Spiaggia di Lentiscelle. \n\nLungo il sentiero infatti si possono ammirare le spiagge di Cala Fortuna e Cala Bianca. Anche questo percorso durerà circa tre ore.\n\nEssendo molto lunghi vi suggeriamo di indossare scarpe comode, un cappello per riparti dal sole, e molte bottiglie d’acqua"
    },
    "Banner": {
      "byVehicleText": "con i mezzi pubblici",
      "byFootText": "a piedi"
    },
    "Gallery": [
      {
        "title": "Arrivo all Baia degli Infreschi",
        "largeImage": "img/gallery/arrivo_spiaggia_infreschi.jpg",
        "smallImage": "img/gallery/arrivo_spiaggia_infreschi.jpg"
      },
      {
        "title": "Baia degli Infreschi",
        "largeImage": "img/gallery/baia_infreschi.jpg",
        "smallImage": "img/gallery/baia_infreschi.jpg"
      },
      {
        "title": "Il mare della Baia degli Infreschi",
        "largeImage": "img/gallery/il_mare_baia_infreschi.jpg",
        "smallImage": "img/gallery/il_mare_baia_infreschi.jpg"
      },
      {
        "title": "Baia degli Infreschi vista dal mare",
        "largeImage": "img/spiaggia_infreschi_vista_mare.jpg",
        "smallImage": "img/gallery/spiaggia_infreschi_vista_mare.jpg"
      },
      {
        "title": "Baia degli Infreschi vista dalla barca",
        "largeImage": "img/gallery/vista_dalla_barca.jpg",
        "smallImage": "img/gallery/vista_dalla_barca.jpg"
      },
      {
        "title": "Baia degli Infreschi vista del mare",
        "largeImage": "img/gallery/vista_delmare_baia_infreschi.jpg",
        "smallImage": "img/gallery/vista_delmare_baia_infreschi.jpg"
      }
    ]
    
};

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
    // Set mock data in the component state
    jest.spyOn(React, 'useEffect').mockImplementationOnce(f => f());
    jest.spyOn(React, 'useState').mockImplementationOnce(() => [mockData, jest.fn()]);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders <Header /> component with correct title', () => {
    console.log(wrapper.find(Header).debug());

  
    expect(wrapper.find(Header).prop('title')).toEqual("La Baia degli Infreschi");
  });

  it('renders <ImageBlock /> component', () => {
    expect(wrapper.find(ImageBlock).exists()).toBe(true);
  });

  it('renders <Description /> component with correct paragraph', () => {
    expect(wrapper.find(Description).exists()).toBe(true);
    expect(wrapper.find(Description).prop('data').paragraph).toEqual(mockData.Description.paragraph);
  });

  it('renders <Banner /> components with correct data', () => {
    expect(wrapper.find(Banner).exists()).toBe(true);

    // Assuming you have more than one Banner component, adjust the indexes accordingly
    expect(wrapper.find(Banner).at(0).prop('title')).toEqual("Gallery");
    expect(wrapper.find(Banner).at(0).prop('text')).toEqual("");

    expect(wrapper.find(Banner).at(1).prop('title')).toEqual("Come arrivare alla Baia da Salerno");
    expect(wrapper.find(Banner).at(1).prop('text')).toEqual(mockData.Banner.byVehicleText);
  });

  it('renders <Gallery /> component with correct data', () => {
    expect(wrapper.find(Gallery).exists()).toBe(true);
    expect(wrapper.find(Gallery).prop('data')).toEqual(mockData.Gallery);
  });

  it('renders <Infosection /> components with correct data', () => {
    expect(wrapper.find(Infosection).exists()).toBe(true);

    // Assuming you have more than one Infosection component, adjust the indexes accordingly
    expect(wrapper.find(Infosection).at(0).prop('items')).toEqual([
      { icon: "fa-train", text: mockData.Infosection.byTrainParagraph },
      // ... (other infosection items)
    ]);

    expect(wrapper.find(Infosection).at(1).prop('items')).toEqual([
      { icon: "fa-male", text: mockData.Infosection.byFootParagraph },
    ]);
  });

  it('renders <Footer /> component', () => {
    expect(wrapper.find(Footer).exists()).toBe(true);
    // You can add more assertions based on your Footer component's structure and data
  });

  it('renders <ScrollToTopButton /> component', () => {
    expect(wrapper.find(ScrollToTopButton).exists()).toBe(true);
  });
});