import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import EventList from "./pages/EventList.jsx";
import Event from "./pages/Event.jsx";
import NousContacter from "./pages/NousContacter.jsx";
import PolitiqueConf from "./pages/PolitiqueConf.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/categorie/:id",
        element: <EventList />,
      },
      {
        path: "/event/:id",
        element: <Event />,
      },
      {
        path: "/nouscontacter",
        element: <NousContacter />,
      },
      {
        path: "/politiquedeconfidentialité",
        element: <PolitiqueConf />,
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
