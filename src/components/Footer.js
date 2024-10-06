//import {LINKEDIN_LINK} from "../../../../public/common/constants";
import { LNKDIN_URL } from "../utils/constants";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <span>❤️</span>
      <a className="linkedin-name" href={LNKDIN_URL} target="_blank">
        Reshma
      </a>
      <span>&copy;</span>
      {year}
      <strong>
        <span> Spoons &  Forks</span>
      </strong>
    </div>
  );
};

export default Footer;