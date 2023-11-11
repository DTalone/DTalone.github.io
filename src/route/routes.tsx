import App from "../pages/App";
import Home from "../pages/Home";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/app",
    element: <App />,
  },
  {
    path: "/tes",
    element: <div>TESSSS</div>,
  },
];

export default routes;
