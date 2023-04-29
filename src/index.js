import React from "react";
import {createRoot} from "react-dom/client"


let nodeRoot = document.getElementById("root");
let root = createRoot(nodeRoot);
root.render(<h1>Welcome to react</h1>)
