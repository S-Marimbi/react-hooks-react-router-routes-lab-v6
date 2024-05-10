import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";

const BrowserRouter = createBrowserRouter();

const App = (
  <BrowserRouter>
    <RouterProvider routes={routes}>
      {/* Your root component goes here */}
    </RouterProvider>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(App);