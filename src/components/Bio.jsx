const Bio = ({ isEditMode, bioData, onBioChange }) => {
  if (isEditMode) {
    return (
      <div className="mx-4 sm:mx-16 md:mx-32 lg:mx-[25.375rem] p-[1.125rem] font-mono">
        <h1 className="text-[27px] font-bold font-sans mb-0">ade</h1>
        <p className="mb-4">evanston, il.</p>
        <div className="mt-4 flex flex-col gap-[0.5rem]">
          {bioData.map((paragraph, idx) => (
            <textarea
              key={idx}
              value={paragraph}
              onChange={(e) => onBioChange(idx, e.target.value)}
              className="w-full p-3 border border-[#7b76c1] rounded resize-none focus:outline-none focus:ring-2 focus:ring-[#7b76c1] focus:ring-opacity-50 font-mono text-[14px]"
              rows="4"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-4 sm:mx-16 md:mx-32 lg:mx-[25.375rem] p-[1.125rem] font-mono">
      <h1 className="text-[27px] font-bold font-sans mb-0">ade</h1>
      <p className="mb-4">evanston, il.</p>
      <div className="mt-4 flex flex-col gap-[0.5rem]">
        {bioData.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default Bio;
