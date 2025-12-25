const Experiences = ({ isEditMode, experiencesData, onExperienceChange }) => {
  if (isEditMode) {
    return (
      <div className="flex-1 font-mono">
        <p className="font-black text-left mb-4">experiences</p>
        <div className="flex flex-col gap-4">
          {experiencesData.map((exp, idx) => (
            <div key={idx} className="border border-[#7b76c1] p-3 rounded">
              <label className="block text-[12px] text-[#7b76c1] mb-2">
                Dates
              </label>
              <input
                type="text"
                value={exp.dates}
                onChange={(e) =>
                  onExperienceChange(idx, "dates", e.target.value)
                }
                className="w-full p-2 mb-3 border border-[#ccc] rounded font-mono text-[14px] focus:outline-none focus:border-[#7b76c1]"
              />

              <label className="block text-[12px] text-[#7b76c1] mb-2">
                Title
              </label>
              <input
                type="text"
                value={exp.title}
                onChange={(e) =>
                  onExperienceChange(idx, "title", e.target.value)
                }
                className="w-full p-2 mb-3 border border-[#ccc] rounded font-mono text-[14px] focus:outline-none focus:border-[#7b76c1]"
              />

              <label className="block text-[12px] text-[#7b76c1] mb-2">
                Company
              </label>
              <input
                type="text"
                value={exp.company}
                onChange={(e) =>
                  onExperienceChange(idx, "company", e.target.value)
                }
                className="w-full p-2 border border-[#ccc] rounded font-mono text-[14px] focus:outline-none focus:border-[#7b76c1]"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 font-mono text-[14px]">
      <p className="font-black text-left mb-4">experiences</p>
      <div className="flex flex-col gap-2">
        {experiencesData.map((exp, idx) => (
          <div key={idx} className="flex flex-row items-center gap-2">
            <span>{exp.dates}</span>
            <span className="flex-grow h-px bg-[#ccc]"></span>
            <span>{exp.title}</span>
            <span className="text-[#ccc]">{exp.company}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
