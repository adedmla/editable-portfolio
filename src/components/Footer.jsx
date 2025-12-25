const FooterLink = ({ href, children, external = false }) => {
  const classes = [
    "text-[#7b76c1]",
    "underline",
    "decoration-[#7b76c1]",
    "font-sans",
    "text-[12px]",
    "font-bold",
  ].join(" ");
  return (
    <a
      href={href}
      className={classes}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
    </a>
  );
};

const Footer = () => {
  return (
    <footer
      className="
      mx-4 sm:mx-16 md:mx-32 lg:mx-[25.375rem]
      p-[1.125rem]
      flex
      flex-row
      flex-wrap sm:flex-nowrap
      justify-center sm:justify-start
      items-center
      gap-2 sm:gap-3
      border-y
      border-[#7b76c1]
      font-mono
      font-bold
    "
    >
      <FooterLink href="https://github.com/adedmla" external>
        github
      </FooterLink>

      <span className="text-[#7b76c1] hidden sm:inline">·</span>

      <FooterLink
        href="https://www.linkedin.com/in/adedamola-adejumobi-358492213/"
        external
      >
        linkedin
      </FooterLink>

      <span className="text-[#7b76c1] hidden sm:inline">·</span>
      <FooterLink href="#" external>
        twitter
      </FooterLink>

      <span className="text-[#7b76c1] hidden sm:inline">·</span>

      <p className="text-[#7b76c1] underline text-[12px] font-sans ">
        adedamolaadejumobi2027 [at] northwestern [dot] edu
      </p>
    </footer>
  );
};

export default Footer;
