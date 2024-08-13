import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { InstagramEmbed } from "react-social-media-embed";
import { LinkedInEmbed } from "react-social-media-embed";

const Footer = () => {
  return (
    <>
      <div className="banner">
        <div className="social-media-section">
          <div className="linkedin-posts">
            <div className="instagram-post">
              <InstagramEmbed
                url="https://www.instagram.com/p/Cp0LpR1Ma-V/"
                width={400}
                containerTagName="div"
              />
              <InstagramEmbed
                url="https://www.instagram.com/p/Cp0LpR1Ma-V/"
                width={400}
                containerTagName="div"
              />
              <InstagramEmbed
                url="https://www.instagram.com/p/Cp0LpR1Ma-V/"
                width={400}
                containerTagName="div"
              />
            </div>
            <div className="instagram-post">
            <LinkedInEmbed
              url="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7204977927338287105"
              postUrl="https://www.linkedin.com/posts/squadra-labs_en-squadra-labs-sabemos-que-muchas-activity-7204978078383587329-jryY?utm_source=share&utm_medium=member_desktop"
              width={"40%"}
              height={570}
            />
            <LinkedInEmbed
              url="https://www.linkedin.com/embed/feed/update/urn:li:share:7196520293496975360"
              postUrl="https://www.linkedin.com/posts/squadra-labs_iagenerativa-genai-cxday-activity-7196520294314831874-BHXl?utm_source=share&utm_medium=member_desktop"
              width={"40%"}
              height={570}
            />
            <LinkedInEmbed
              url="https://www.linkedin.com/embed/feed/update/urn:li:share:7196520293496975360"
              postUrl="https://www.linkedin.com/posts/squadra-labs_iagenerativa-genai-cxday-activity-7196520294314831874-BHXl?utm_source=share&utm_medium=member_desktop"
              width={"40%"}
              height={570}
            />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
