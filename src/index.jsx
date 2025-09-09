// // import React from 'react';
// // import ReactDOM from 'react-dom/client';
// // import './index.css';
// // import App from './App';
// // import { BrowserRouter } from 'react-router-dom'; // ✅ Import BrowserRouter
// // import reportWebVitals from './reportWebVitals';

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //      <BrowserRouter>         
// //       <App />
// //     </BrowserRouter> 

// //   </React.StrictMode>
// // );

// // reportWebVitals();
// // import React from 'react';
// // import ReactDOM from 'react-dom/client';
// // import Projects from './pages/Projects/Projects'; // Adjust path if needed
// // import './index.css';

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <Projects />
// //   </React.StrictMode>
// // );
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// // import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
// import { HashRouter } from 'react-router-dom';

// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <BrowserRouter>
// //       <App />
// //     </BrowserRouter>
// //   </React.StrictMode>
// // );
// root.render(
//   <React.StrictMode>
//     <HashRouter>
//       <App />
//     </HashRouter>
//   </React.StrictMode>
// );
// index.jsx or main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Events from "./pages/Events/Events";
import Team from "./pages/Team/Team";
import Error from "./pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/team",
    element: <Team />,
  },
]);

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find the root element");
}
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);