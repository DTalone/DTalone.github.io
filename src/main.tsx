import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./router/index.ts";
import { RouterProvider } from "react-router-dom";
import Footer from "./components/Footer/index.tsx";
import Container from "./components/Container/index.tsx";
import Header from "./components/Header/index.tsx";
import Hotjar from "@hotjar/browser";

const siteId = 2451226;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Container>
      <Header />
      <div className="pt-20">
        <RouterProvider router={router} />
      </div>
      <Footer />
    </Container>
  </React.StrictMode>
);
