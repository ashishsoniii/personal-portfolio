import React from "react";
import Form from "../components/Form";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AiFillGitlab, AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

function HomePage4() {
  return (
    <>
      <div className="homepage3-heading">Contact</div>
      <div className="hp4">
        <div className="hp4Form ">
          <div className="form-heading form-bg">Get In Touch With Me!</div>
          <div className="form-inputs-center form-bg">
            <Form />
          </div>
        </div>
        {/* Find Me At!! */}
        <div className="contact-text">
          <div className="contact-text-heading">Find Me At!</div>
          <div className="contact-text-content">
            <div className="contact-text-content-1">
              {/* <div className="contact-text-content-1-heading">Email</div> */}
              {/* <div className="contact-text-content-1-content"> */}
              <AiOutlineMail className="mail-icon" />
              <a
                className="contact-text-content-1-content"
                href="mailto:ashishsoni2002@gmail.com"
                target="__blank"
              >
                ashishsoni2002@gmail.com
              </a>
              {/* </div> */}
            </div>
            <br />
            <BsFillTelephoneFill className="mail-icon" />
            <a
              className="contact-text-content-1-content"
              href="tel:9660688940"
              target="__blank"
            >
              9660688940
            </a>
          </div>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/ashishsoniii/"
              target="__blank"
            >
              <FaLinkedin />
            </a>
            {/* <a href="https://twitter.com/Ashishsoni_1" target="__blank">
              <FaInstagram />
            </a> */}
            <a href="https://twitter.com/Ashishsoni_1" target="__blank">
              <FaTwitter />
            </a>
            <a href="https://github.com/ashishsoniii" target="__blank">
              <FaGithub />
            </a>
            <a href="https://gitlab.torproject.org/ashishsoniii"  target="__blank">
              <AiFillGitlab/>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage4;
