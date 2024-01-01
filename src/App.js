import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MainApp from "./pages";

function App() {
  return (
    <div>
      <MainApp />
      <ToastContainer />
    </div>
  );
}

export default App;
