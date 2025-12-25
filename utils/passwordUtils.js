const CORRECT_PASSWORD = import.meta.env.VITE_EDIT_PASSWORD;

export const verifyPassword = async (inputPassword) => {
  return inputPassword === CORRECT_PASSWORD;
};
