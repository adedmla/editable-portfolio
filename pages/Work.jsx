import Projects from "../components/Projects";
import Experience from "../components/Experience";
import SchoolLeadership from "../components/SchoolLeadership";

const Work = () => {
  return (
    <>
      <div className="mx-4 sm:mx-16 md:mx-32 lg:mx-[25.375rem] p-[1.125rem] flex flex-col sm:flex-row gap-8 sm:gap-4">
        <Projects />
        <Experience />
      </div>
      <SchoolLeadership />
    </>
  );
};

export default Work;
