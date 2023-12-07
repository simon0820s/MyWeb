import { BsWhatsapp, BsLinkedin, BsGithub, BsTwitter, BsInstagram } from "react-icons/bs";
import "./styles.css";

const ContactMe = () => {
  return (
    <div className="contactMe-box">
      <span></span>
      <div className="card-content">
        <span></span>
        <h2>Contact Me</h2>

        <p className="normal-text">You can contact me by the following means</p>

        <div className="contacts-container">
          <a href="https://api.whatsapp.com/send/?phone=3002540388&text&type=phone_number&app_absent=0" target="_blank"><BsWhatsapp /></a>
          <a href="https://www.instagram.com/arboledaramirezsimon/"  target="_blank"><BsInstagram /></a>
          <a href="linkedin.com/in/simón-arboleda-02b892247"  target="_blank"><BsLinkedin /></a>
          <a href="https://github.com/simon0820s"  target="_blank"><BsGithub/></a>
          <a href="https://twitter.com/SimnArboleda4"  target="_blank"><BsTwitter /></a>
        </div>
        
      </div>
    </div>
  );
};

export default ContactMe;
