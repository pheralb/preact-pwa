import { Route, Routes } from "react-router-dom";

// Pages =>
import { Home } from "@/pages";

// Service Worker =>
import ServiceWorker from "@/pwa/serviceWorker";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ServiceWorker />
    </>
  );
};

export default App;
