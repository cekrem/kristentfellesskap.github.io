import logo from "./assets/logo.png";
import "./App.css";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import { Creed, Home } from "./Content.jsx";

const links = [
  {
    text: "Vi tror",
    iconClass: "fa fa-book-bible",
    url: "#vi-tror",
  },
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

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="vi-tror" element={<Creed />} />
    </Route>
  </Routes>
);
const Layout = () => {
  const { pathname } = useLocation();
  const hashPath = pathname.replace("/", "#");

  return (
    <>
      <section>
        <a href="/">
          <img src={logo} className="logo pulse-and-blur-in" alt="Logo" />
        </a>

        <div className="title">
          <h1>Kristent Fellesskap</h1>
          <h2>Indre Østfold</h2>
        </div>

        <div className="content">
          <Outlet />
        </div>

        <div className="links">
          {links.map(({ iconClass, url, text }) => (
            <a
              key={url}
              className={hashPath === url ? "icon-link active" : "icon-link"}
              href={url}
            >
              <i className={iconClass}></i>
              {text}
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default App;
