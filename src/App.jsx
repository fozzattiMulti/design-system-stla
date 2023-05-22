import SideBar from "./components/SideBar";
import Home from "./pages/Home";
import Screens from "./pages/Screens";
import Components from "./pages/Components";
import Typhografy from "./pages/Typhografy";
import ColorGuide from "./pages/ColorGuide";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex ">
      <SideBar />

      <div className="flex flex-col justify-center w-full lg:ml-72 sm:mx-auto">
        <div className="py-20 bg-gray-100 px-8">
          <h1 className="text-4xl text-blue py-1 font-bold">
            STELLANTIS 3580/3590
          </h1>
          <h2 className="text-1xl text-gray-500">Desing System</h2>
          <p className=" text-sm text-gray-500">
            Reviewed 05/23/2023 by Felipe Fozzatti - Software Engineer
          </p>
        </div>
        <div className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/screens" element={<Screens />} />
          <Route path="/components" element={<Components />} />
          <Route path="/typhografy" element={<Typhografy />} />
          <Route path="/colorguide" element={<ColorGuide />} />
        </Routes>

        </div>
        
      </div>
    </div>
  );
}

export default App;
