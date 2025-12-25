import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "./services/supabaseClient";
import { verifyPassword } from "./utils/passwordUtils";
import { initialPortfolioData } from "./data/portfolioData";
import MainContainer from "./components/MainContainer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
import PasswordModal from "./components/PasswordModal";
import Home from "./pages/Home";
import Work from "./pages/Work";

function App() {
  const [supabaseData, setSupabaseData] = useState(initialPortfolioData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [editData, setEditData] = useState(supabaseData);
  const [isEditMode, setIsEditMode] = useState(false);
  const [pendingData, setPendingData] = useState(editData);
  const [passwordPromptOpen, setPasswordPromptOpen] = useState(false);

  useEffect(() => {
    setEditData(supabaseData);
  }, [supabaseData]);

  useEffect(() => {
    fetchDataFromSupabase();
  }, []);

  const fetchDataFromSupabase = async () => {
    try {
      setLoading(true);

      const { data: result, error: err } = await supabase
        .from("portfolio_data")
        .select("*")
        .eq("id", 1)
        .single();

      if (err) {
        throw err;
      }

      if (!result) {
        throw new Error("No data returned");
      }

      const transformedData = {
        bio: result.bio,
        experiences: result.experiences,
        schoolLeadership: result.school_leadership,
        projects: result.projects,
      };

      setSupabaseData(transformedData);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = () => {
    setPasswordPromptOpen(true);
  };

  const handlePasswordSubmit = async (password) => {
    try {
      const isCorrect = await verifyPassword(password);
      if (isCorrect) {
        setPendingData(editData);
        setIsEditMode(true);
        setPasswordPromptOpen(false);
      } else {
        alert("Incorrect password");
      }
    } catch (err) {
      console.error("Error verifying password:", err);
      alert("Error verifying password");
    }
  };

  const handleCancel = () => {
    setIsEditMode(false);
    setPendingData(editData);
  };

  const handleSave = async () => {
    try {
      const { error: err } = await supabase
        .from("portfolio_data")
        .update({
          bio: pendingData.bio,
          experiences: pendingData.experiences,
          school_leadership: pendingData.schoolLeadership,
          projects: pendingData.projects,
          updated_at: new Date(),
        })
        .eq("id", 1);

      if (err) {
        throw err;
      }

      setIsEditMode(false);
      await fetchDataFromSupabase();
    } catch (err) {
      console.error("Error during save:", err);
      alert("Failed to save: " + err.message);
    }
  };

  const updatePendingData = (newData) => {
    setPendingData(newData);
  };

  if (loading) {
    return (
      <MainContainer>
        <div className="flex items-center justify-center h-screen">
          <p className="font-mono text-[#7b76c1]">loading your portfolio...</p>
        </div>
      </MainContainer>
    );
  }

  if (error) {
    return (
      <MainContainer>
        <div className="flex items-center justify-center h-screen">
          <p className="font-mono text-red-500">Error: {error}</p>
        </div>
      </MainContainer>
    );
  }

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
                data={isEditMode ? pendingData : editData}
                updateData={updatePendingData}
              />
            }
          />
          <Route
            path="/work"
            element={
              <Work
                isEditMode={isEditMode}
                data={isEditMode ? pendingData : editData}
                updateData={updatePendingData}
              />
            }
          />
        </Routes>
        <Footer />
        <Copyright />
      </MainContainer>
    </BrowserRouter>
  );
}

export default App;
