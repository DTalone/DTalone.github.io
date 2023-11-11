import App from "../pages/App";
import ComingSoon from "../pages/ComingSoon";
import Home from "../pages/Home";

const routes = [
  {
    path: "/",
    element: <ComingSoon />,
  },
  {
    path: "/hehe",
    element: <Home />,
  },
  {
    path: "/hehehe",
    element: <App />,
  },
  {
    path: "/hehehehe",
    element: <div>TESSSS</div>,
  },
];

export default routes;
