"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var client_1 = require("react-dom/client");
var react_router_dom_1 = require("react-router-dom");
var router_1 = require("@/app/router");
require("./index.css");
client_1.default.createRoot(document.getElementById("root")).render(<react_1.default.StrictMode>
    <react_router_dom_1.RouterProvider router={router_1.router}/>
  </react_1.default.StrictMode>);
