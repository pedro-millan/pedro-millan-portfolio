import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import HomePage from "@/features/home/HomePage";
import ProjectsPage from "@/features/projects/ProjectsPage";
import FrontendProjectsPage from "@/features/frontend-projects/FrontendProjectsPage";
import FrontendProjectDetail from "@/features/frontend-projects/FrontendProjectDetail";
import ShopifyDevPage from "@/features/shopify-dev/ShopifyDevPage";
import ShopifyDevDetail from "@/features/shopify-dev/ShopifyDevDetail";
import WebAppsPage from "@/features/web-apps/WebAppsPage";
import WebAppDetail from "@/features/web-apps/WebAppDetail";
import AboutPage from "@/features/about/AboutPage";
import ContactPage from "@/features/contact/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/",                    element: <HomePage /> },
      { path: "/projects",            element: <ProjectsPage /> },
      { path: "frontend-projects",    element: <FrontendProjectsPage /> },
      { path: "frontend-projects/:id",element: <FrontendProjectDetail /> },
      { path: "shopify-dev",          element: <ShopifyDevPage /> },
      { path: "shopify-dev/:id",      element: <ShopifyDevDetail /> },
      { path: "web-apps",             element: <WebAppsPage /> },
      { path: "web-apps/:id",         element: <WebAppDetail /> },
      { path: "/about",               element: <AboutPage /> },
      { path: "/contact",             element: <ContactPage /> },
    ],
  },
]);
