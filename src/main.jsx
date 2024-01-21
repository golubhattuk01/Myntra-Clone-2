import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home.jsx";
import MyBag from "./MyBag.jsx";
import { Provider } from "react-redux";
import MyStore from "../store/index.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/bag", element: <MyBag /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <Provider store={MyStore}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </div>
);
