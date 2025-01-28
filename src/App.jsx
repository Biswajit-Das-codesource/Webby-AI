import React from "react";
import Navbar from "./components/Navbar";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Home from "./components/Home";
import Show from "./components/Show";
import QuizAppCard from "./components/Show";
import About from "./components/About";

function App() {
  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path:"/show",
      element:<Show/>
    },
    {
      path:"/about",
      element:<About/>
    }
  ]);

  return (
    <div className="h-screen w-full overflow-hidden">
      <Navbar />
      <RouterProvider router={approuter}>
        <Home />
      </RouterProvider>
    </div>
  );
}
export default App;
