import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { css } from "@emotion/css";

const globalStyles = css`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
  }

  a {
    -webkit-tap-highlight-color: transparent;
  }

  body {
    height: 100vh;
    width: 100%;
    overflow: hidden;
    background-color: #000;
  }

  @keyframes rotarColor {
    0% {
      --linear-1: 45deg;
      --linear-2: 135deg;
    }
    100% {
      --linear-1: 405deg;
      --linear-2: 495deg;
    }
  }

  @property --linear-1 {
    syntax: '<angle>';
    inherits: true;
    initial-value: 45deg;
  }

  @property --linear-2 {
    syntax: '<angle>';
    inherits: true;
    initial-value: 135deg;
  }
`;

const rectangle = css`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: #111;
  position: relative;
  background-size: cover;
  background-position: center;
  filter: saturate(500%);

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: -5px;
    background: linear-gradient(var(--linear-1), mediumpurple, springgreen, red),
                linear-gradient(var(--linear-2), mediumpurple, springgreen, red);
    background-blend-mode: hue;
    z-index: -1;
    animation: rotarColor 10s ease alternate infinite both;
  }

  &::after {
    filter: blur(800px);
  }
`;

const App = () => {
  useEffect(() => {
    document.body.classList.add(globalStyles);
  }, []);

  return <aside className={rectangle}></aside>;
};

const rootDiv = document.createElement("div");
document.body.appendChild(rootDiv);
const root = createRoot(rootDiv);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
