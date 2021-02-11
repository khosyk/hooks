import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const useDeviceOrientation = () => {
  const [state, setState] = useState({
    alpha: null,
    beta: null,
    gamma: null
  });

  const handle = (e) => {
    setState({
      alpha: e.alpha,
      beta: e.beta,
      gamma: e.gamma
    });
  };
  useEffect(() => {
    window.addEventListener("deviceorientation", handle);
    return () => {
      window.removeEventListener("deviceorientation", handle);
    };
  }, []);

  return state;
};

const useFavicon = (initialFaviconUrl) => {
  const [favicon, setFavicon] = useState(initialFaviconUrl);
  const updateFavicon = () => {
    const initialFavicon = "hey";
  };

  return setFavicon;
};

function App() {
  const setFavicon = useFavicon("#");

  const { alpha, beta, gamma } = useDeviceOrientation();

  return (
    <div className="App">
      <h1>Superhooks</h1>
      <b>useDeviceOrientation</b>
      <p>alpha: {alpha}</p>
      <p>beta: {beta}</p>
      <p>gamma: {gamma}</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
