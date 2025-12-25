const SchoolLeadership = ({
  isEditMode,
  leadershipData,
  onLeadershipChange,
}) => {
  if (isEditMode) {
    return (
      <div className="flex-1 font-mono">
        <p className="font-black text-left mb-4">school leadership</p>
        <div className="flex flex-col gap-3">
          {leadershipData.map((role, idx) => (
            <div key={idx}>
              <input
                type="text"
                value={role.title}
                onChange={(e) => onLeadershipChange(idx, e.target.value)}
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
      <p className="font-black text-left mb-4">school leadership</p>
      <div className="flex flex-col gap-2">
        {leadershipData.map((role, idx) => (
          <p key={idx}>
            <span className="text-[#7b76c1]"> * </span>
            {role.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SchoolLeadership;
