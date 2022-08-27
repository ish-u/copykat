const footerLinks = [
  "FAQ",
  "Help Centre",
  "Account",
  "Media Centre",
  "Investor Relations",
  "Jobs",
  "Ways to Watch",
  "Terms of Use",
  "Privacy",
  "Cookie Preferences",
  "Corporate Information",
  "Contact Us",
  "Speed Test",
  "Legal Notices",
  "Only on Netflix",
];

const Footer = () => {
  return (
    <div className="w-full bg-black border-t-8 border-[#222222] flex justify-center p-16">
      <div className="w-4/6 text-white/40 text-sm">
        Questions? Call 000-800-040-1843
        <div className="flex flex-wrap mt-4">
          {footerLinks.map((link) => (
            <span className="w-[25%] p-1 text-[12px] font-thin hover:cursor-pointer hover:underline">
              {link}
            </span>
          ))}
        </div>
        <div className="mt-8 w-fit">
          <div className="border-white/50 border flex items-center p-2 text-sm">
            <span className="material-icons">language</span>
            <select
              className="bg-black focus:outline-none"
              name="Languages"
              id="language"
            >
              <option value="english" selected>
                English
              </option>
              <option value="hindi">Hindi</option>
            </select>
          </div>
        </div>
        <div className="pt-4 text-[12px]">
          <span>Netflix India</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
