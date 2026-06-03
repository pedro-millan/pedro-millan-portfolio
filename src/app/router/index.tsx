import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import HomePage from "@/features/home/HomePage";
import ProjectsPage from "@/features/projects/ProjectsPage";
import FrontendProjectsPage from "@/features/frontend-projects/FrontendProjectsPage";
import ShopifyDevPage from "@/features/shopify-dev/ShopifyDevPage";
import AboutPage from "@/features/about/AboutPage";
import ContactPage from "@/features/contact/ContactPage";
import FrontendProjectDetail from "@/features/frontend-projects/FrontendProjectDetail";
import ShopifyDevDetail from "@/features/shopify-dev/ShopifyDevDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/projects", element: <ProjectsPage /> },
      { path: "/frontend-projects", element: <FrontendProjectsPage /> },
      { path: "frontend-projects/:id", element: <FrontendProjectDetail /> },
      { path: "/shopify-dev", element: <ShopifyDevPage /> },
      { path: "shopify-dev/:id",       element: <ShopifyDevDetail /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
]);



