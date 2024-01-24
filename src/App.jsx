import logo from "./assets/logo.png";
import "./App.css";
import { useEffect } from "react";

const links = [
  {
    text: "Podcast",
    iconClass: "fa fa-spotify",
    url: "https://podcasters.spotify.com/pod/show/kfio",
  },
  {
    text: "Facebook",
    iconClass: "fa fa-facebook",
    url: "https://www.facebook.com/people/Kristent-Fellesskap-Indre-%C3%98stfold/61552520630809/",
  },
];

const App = () => {
  useEffect(() => {
    if (window.location.hash === "") {
      window.location.replace(
        "https://www.facebook.com/people/Kristent-Fellesskap-Indre-%C3%98stfold/61552520630809/",
      );
    }
  }, []);
  return (
    <>
      <section>
        <img src={logo} className="logo" alt="Logo" />

        <div className="title">
          <h1>Kristent Fellesskap</h1>
          <h2>Indre Østfold</h2>
        </div>

        <div className="description">
          <p>
            Vi er disipler av Jesus som samles jevnlig til fellesskap med Gud og
            med hverandre.
          </p>
          <hr />
        </div>

        <div className="links">
          {links.map(({ iconClass, url, text }) => (
            <a key={url} className="icon-link" href={url}>
              <i className={iconClass}></i>
              {text}
            </a>
          ))}
        </div>
      </section>
      {/*<section>*/}
      {/*  <div className="description">*/}
      {/*    <h3>Vi tror på Gud, han som skapte himmelen og jorden</h3>*/}
      {/*    <p>*/}
      {/*      Han er fullkomment god og uforanderlig, og har en god plan for sitt*/}
      {/*      skaperverk.*/}
      {/*    </p>*/}
      {/*    <hr />*/}

      {/*    <h3>Vi tror at Bibelen er Guds ord</h3>*/}
      {/*    <p>*/}
      {/*      Hver bok er innblåst av Gud, full av liv og sannhet. Bibelen lærer*/}
      {/*      oss hvem Gud er, hvem vi er, og hvordan han lengter etter å sette*/}
      {/*      alt i rett stand igjen.*/}
      {/*    </p>*/}

      {/*    <h3>Vi tror at Bibelen handler om Jesus</h3>*/}
      {/*    <p>*/}
      {/*      Snekkersønnen fra Nasaret er bokens kjerne og stjerne, både i det*/}
      {/*      nye og det gamle testamentet. Han er utstrålingen av Guds herlighet*/}
      {/*      og bildet av hans vesen, og han bærer alt ved sitt mektige ord.*/}
      {/*    </p>*/}

      {/*    <h3>Vi tror at Jesus er Guds sønn</h3>*/}
      {/*    <p>*/}
      {/*      Sann Gud av sann Gud, og samtidig fullt og helt menneske. Evighetens*/}
      {/*      mysterium og historiens håp.*/}
      {/*    </p>*/}

      {/*    <h3>*/}
      {/*      Vi tror at Jesu liv, død og oppstandelse er historiske realiteter*/}
      {/*    </h3>*/}
      {/*    <p>*/}
      {/*      Disse hendelsene deler både vår og verdens historie i et “før” og et*/}
      {/*      “etter”. Dette er forutsetningen for vår frimodighet i møte med Gud,*/}
      {/*      både nå og på dommens dag. Jesu død og oppstandelse betalte vår*/}
      {/*      skyld, og kledde oss i hans rettferdighet.*/}
      {/*    </p>*/}

      {/*    <h3>Vi tror at Jesus gir mennesker en ny start og et nytt liv</h3>*/}
      {/*    <p>*/}
      {/*      Han setter oss fri fra synd, undertrykkelse, ødeleggelse og død. Han*/}
      {/*      gir oss en ny fortid, nåtid og framtid. Det gamle er borte, og alt*/}
      {/*      har blitt nytt!*/}
      {/*    </p>*/}

      {/*    <h3>Vi tror at vi kan kjenne og erfare Jesus i dag</h3>*/}
      {/*    <p>*/}
      {/*      Den hellige ånd flytter inn i oss når vi blir født på ny, og han*/}
      {/*      lever ut Jesus-livet gjennom oss. Menigheten er Jesu kropp på*/}
      {/*      jorden, og i forsamlingen av de troende er det hans hjerteslag som*/}
      {/*      gir liv, glede og fred!*/}
      {/*    </p>*/}
      {/*  </div>*/}
      {/*</section>*/}
    </>
  );
};

export default App;
