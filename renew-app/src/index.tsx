import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ProjectPage from "./pages/ProjectPage";
import Problem from "./pages/Problem";
import Team from "./pages/Team";

// Define the routes, including the ProjectPage route
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/project",
    element: <ProjectPage />,
  },
  {
    path: "/about",
    element: <Problem/>,
  },
  {
    path: "/team",
    element: <Team/>,
  }
]);

// Render the router
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// Measure performance
reportWebVitals();
