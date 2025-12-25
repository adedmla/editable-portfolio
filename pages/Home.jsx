import Bio from "../components/Bio";

const Home = ({ isEditMode, data, updateData }) => {
  const handleBioChange = (idx, newValue) => {
    const newBio = [...data.bio];
    newBio[idx] = newValue;
    updateData({ ...data, bio: newBio });
  };

  return (
    <Bio
      isEditMode={isEditMode}
      bioData={data.bio}
      onBioChange={handleBioChange}
    />
  );
};

export default Home;
