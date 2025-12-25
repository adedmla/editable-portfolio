import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEditMode } from "./hooks/useEditMode";
import { initialPortfolioData } from "./data/portfolioData";
import MainContainer from "./components/MainContainer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
import PasswordModal from "./components/PasswordModal";
import Home from "./pages/Home";
import Work from "./pages/Work";

function App() {
  const {
    isEditMode,
    data,
    pendingData,
    passwordPromptOpen,
    handleEditClick,
    handlePasswordSubmit,
    handleCancel,
    handleSave,
    updatePendingData,
    setPasswordPromptOpen,
  } = useEditMode(initialPortfolioData);

  return (
    <BrowserRouter>
      <MainContainer>
        <PasswordModal
          isOpen={passwordPromptOpen}
          onSubmit={handlePasswordSubmit}
          onCancel={() => setPasswordPromptOpen(false)}
        />

        {isEditMode && (
          <div className="fixed bottom-6 right-6 flex gap-3 z-40">
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-[#7b76c1] text-white font-black text-sm rounded hover:bg-opacity-80 transition font-mono"
            >
              save
            </button>
            <button
              onClick={handleCancel}
              className="px-4 py-2 border border-[#7b76c1] text-[#7b76c1] font-black text-sm rounded hover:bg-[#f5f5f5] transition font-mono"
            >
              cancel
            </button>
          </div>
        )}

        <Navbar onEditClick={handleEditClick} isEditMode={isEditMode} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                isEditMode={isEditMode}
                data={isEditMode ? pendingData : data}
                updateData={updatePendingData}
              />
            }
          />
          <Route path="/work" element={<Work />} />
        </Routes>
        <Footer />
        <Copyright />
      </MainContainer>
    </BrowserRouter>
  );
}

export default App;
