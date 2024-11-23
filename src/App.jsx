import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DaftarPage from "./pages/daftarPage/DaftarPage.jsx";
import MasukPage from "./pages/masukPage/MasukPage.jsx";
import HomePage from "./pages/homePage/HomePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DaftarPage />
  },
  {
    path: "/masuk",
    element: <MasukPage />
  },
  {
    path: "/home",
    element: <HomePage />
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;