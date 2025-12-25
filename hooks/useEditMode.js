import { useState } from 'react';

export const useEditMode = (initialData) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [data, setData] = useState(initialData);
  const [pendingData, setPendingData] = useState(initialData);
  const [passwordPromptOpen, setPasswordPromptOpen] = useState(false);

  const handleEditClick = () => {
    setPasswordPromptOpen(true);
  };

  const handlePasswordSubmit = (password) => {
    if (password === 'edit') {
      setPendingData(data);
      setIsEditMode(true);
      setPasswordPromptOpen(false);
    } else {
      alert('Incorrect password');
    }
  };

  const handleCancel = () => {
    setIsEditMode(false);
    setPendingData(data);
  };

  const handleSave = async () => {
    setData(pendingData);
    setIsEditMode(false);
  };

  const updatePendingData = (newData) => {
    setPendingData(newData);
  };

  return {
    isEditMode,
    data,
    pendingData,
    passwordPromptOpen,
    handleEditClick,
    handlePasswordSubmit,
    handleCancel,
    handleSave,
    updatePendingData,
    setPasswordPromptOpen
  };
};