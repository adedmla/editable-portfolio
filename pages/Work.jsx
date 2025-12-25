import Experiences from "../components/Experiences";
import SchoolLeadership from "../components/SchoolLeadership";
import Projects from "../components/Projects";

const Work = ({ isEditMode, data, updateData }) => {
  const handleExperienceChange = (idx, field, newValue) => {
    const newExperiences = [...data.experiences];
    newExperiences[idx] = {
      ...newExperiences[idx],
      [field]: newValue,
    };
    updateData({ ...data, experiences: newExperiences });
  };

  const handleLeadershipChange = (idx, newValue) => {
    const newLeadership = [...data.schoolLeadership];
    newLeadership[idx] = { ...newLeadership[idx], title: newValue };
    updateData({ ...data, schoolLeadership: newLeadership });
  };

  const handleProjectsChange = (idx, newValue) => {
    const newProjects = [...data.projects];
    newProjects[idx] = { ...newProjects[idx], title: newValue };
    updateData({ ...data, projects: newProjects });
  };

  return (
    <div className="mx-4 sm:mx-16 md:mx-32 lg:mx-[25.375rem] p-[1.125rem]">
      <div className="flex flex-col gap-8">
        <div className="flex flex-row gap-8">
          <Projects
            isEditMode={isEditMode}
            projectsData={data.projects}
            onProjectsChange={handleProjectsChange}
          />
          <Experiences
            isEditMode={isEditMode}
            experiencesData={data.experiences}
            onExperienceChange={handleExperienceChange}
          />
        </div>
        <SchoolLeadership
          isEditMode={isEditMode}
          leadershipData={data.schoolLeadership}
          onLeadershipChange={handleLeadershipChange}
        />
      </div>
    </div>
  );
};

export default Work;
