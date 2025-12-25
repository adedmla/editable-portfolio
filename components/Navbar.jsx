import { Link } from "react-router-dom";
import gif from "../assets/mvt3.gif";

const NavLink = ({ to, href, children, external = false }) => {
  const classes =
    "mr-[1.2rem] sm:mr-[1.6875rem] font-black text-[16px] sm:text-[18px] text-[#7b76c1]";

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  );
};

const Navbar = () => {
  return (
    <nav
      className="
      flex 
      flex-col sm:flex-row
      items-start 
      gap-4 sm:gap-0
      font-mono 
      mx-4 sm:mx-16 md:mx-32 lg:mx-[25.375rem]
      p-[1.125rem]
    "
    >
      <NavLink to="/">me</NavLink>
      <NavLink to="/work">work</NavLink>
      <NavLink
        href="https://drive.google.com/file/d/1o-haLpoIvwlwPs5qo7WiJ1fYyUYqFDnk/view?usp=sharing"
        external
      >
        cv
      </NavLink>
      <img
        src={gif}
        alt="todoro gif"
        className="h-[50px] sm:h-[60px] md:h-[79px] w-auto object-contain self-center sm:self-auto sm:ml-auto"
      />
    </nav>
  );
};

export default Navbar;
