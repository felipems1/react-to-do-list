import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RoutesApp from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer autoClose={2000} />
      <RoutesApp />
    </BrowserRouter>
  );
};

export default App;
