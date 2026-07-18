import Layout from "./Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

export const routes = [
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "contact", Component: Contact },
    ],
  },
];
