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
    </>
  );
};

export default App;
