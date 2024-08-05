// // src/index.js
// import React from "react";
// import ReactDOM from "react-dom";
// import { QueryClient, QueryClientProvider } from "react-query";
// import App from "./App";
// import "./index.css";

// const queryClient = new QueryClient();

// ReactDOM.render(
//   <QueryClientProvider client={queryClient}>
//     <App />
//   </QueryClientProvider>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom/client"; // Import the new API
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
