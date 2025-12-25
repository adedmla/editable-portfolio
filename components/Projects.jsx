const Projects = ({ isEditMode, projectsData, onProjectsChange }) => {
  if (isEditMode) {
    return (
      <div className="flex-1 font-mono">
        <p className="font-black text-left mb-4">projects</p>
        <div className="flex flex-col gap-3">
          {projectsData.map((project, idx) => (
            <div key={idx}>
              <input
                type="text"
                value={project.title}
                onChange={(e) => onProjectsChange(idx, e.target.value)}
                className="w-full p-2 border border-[#7b76c1] rounded font-mono text-[14px] focus:outline-none focus:ring-2 focus:ring-[#7b76c1] focus:ring-opacity-50"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 font-mono text-[14px]">
      <p className="font-black text-left mb-4">projects</p>
      <div className="flex flex-col gap-2">
        {projectsData.map((project, idx) => (
          <p key={idx}>
            <span className="text-[#7b76c1]"> * </span>
            {project.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Projects;
