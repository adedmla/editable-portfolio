const ExperienceRow = ({ years, role, company }) => {
  return (
    <div className="flex flex-row items-center gap-2 text-[14px] sm:text-[14px]">
      <span>{years}</span>
      <span className="flex-grow h-px bg-[#ccc]"></span>
      <span>{role}</span>
      <span className="text-[#ccc]">{company}</span>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    { years: "2025 - now", role: "swe intern", company: "givelify" },
    { years: "2025 - 2025", role: "swe intern", company: "dimensional" },
    { years: "2024 - 2025", role: "ta", company: "northwestern" },
    { years: "2024 - 2024", role: "it intern", company: "harris county" },
    { years: "2022 - 2023", role: "math tutor", company: "ieducate" },
  ];

  return (
    <div className="flex-1 font-mono text-[14px]">
      <p className="font-black text-left mb-2">experiences</p>
      <div className="flex flex-col gap-1">
        {experiences.map((exp, index) => (
          <ExperienceRow key={index} {...exp} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
