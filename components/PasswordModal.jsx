import { useState } from "react";

const PasswordModal = ({ isOpen, onSubmit, onCancel }) => {
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(password);
    setPassword("");
  };

  const handleCancel = () => {
    setPassword("");
    onCancel();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded w-80 font-mono border border-[#7b76c1]">
        <h2 className="text-lg font-black text-[#7b76c1] mb-4">
          unlock edit mode
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            className="w-full px-3 py-2 mb-4 font-mono text-sm border border-[#ccc] rounded focus:outline-none focus:border-[#7b76c1]"
            autoFocus
          />
          <div className="flex gap-2">
            <button
              type="submit"
              className="flex-1 bg-[#7b76c1] text-white font-black py-2 rounded hover:bg-opacity-80 transition"
            >
              unlock
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="flex-1 border border-[#7b76c1] text-[#7b76c1] font-black py-2 rounded hover:bg-[#f5f5f5] transition"
            >
              cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordModal;
