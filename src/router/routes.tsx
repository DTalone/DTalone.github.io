import App from "../pages/App";
import ComingSoon from "../pages/ComingSoon";
import Home from "../pages/Home";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/hehe",
    element: <ComingSoon />,
  },
  {
    path: "/hehehe",
    element: <App />,
  },
];

export default routes;
