import React from "react";
import Animation from "../Animation";
import "./home.css";

const Home = () => {
  return (
    <div style={{ height: "619px" }} className="home">
      <h1 className="text">Stream Movie For You</h1>
      <h2 className="texte2">Enjoy your time</h2>
      <Animation />
    </div>
  );
};

export default Home;
