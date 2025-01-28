import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Home.jsx";
import MathQuiz from "./components/Show.jsx";
import QuizLandingPage from "./components/Home.jsx";
import QuizAppCard from "./components/Home.jsx";
import Show from "./components/Show.jsx";


createRoot(document.getElementById("root")).render(
 
    <StrictMode>
      <App />
    </StrictMode>
);
