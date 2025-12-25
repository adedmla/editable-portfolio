import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
import Home from "./pages/Home";
import Work from "./pages/Work";

function App() {
  return (
    <BrowserRouter>
      <MainContainer>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
        </Routes>
        <Footer />
        <Copyright />
      </MainContainer>
    </BrowserRouter>
  );
}

export default App;
