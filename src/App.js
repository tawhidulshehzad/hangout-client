import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Router/Routes/Routes";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <div className="max-w-[1200px] mx-auto px-3">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
