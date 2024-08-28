import React from "react";
import "./Posts.css";
import { LinkedInEmbed } from "react-social-media-embed";
import { useTranslation } from "react-i18next";

const Posts = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="posts">
        <h2 className="main-section-title">
          {i18n.language === "es" ? (
            <>
              <p className="title-first-word">{t("posts")}</p>
              <span className="accent">{t("featured")}</span>
            </>
          ) : (
            <>
              <p className="title-first-word">{t("featured")}</p>
              <span className="accent">{t("posts")}</span>
            </>
          )}
        </h2>

        <div className="social-media-section">
          <div
            style={{
              border: "1px solid  #b565ff",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              height: "max-content",
              width: "max-content",
            }}
          >
            <LinkedInEmbed
              url="https://www.linkedin.com/embed/feed/update/urn:li:share:7232501683925221376"
              postUrl="https://www.linkedin.com/posts/squadra-labs_nuevoscomienzos-trabajoenequipo-squadralabs-activity-7232501685032542208-KY8a?utm_source=share&utm_medium=member_desktop"
              width={420}
              height={670}
            />
          </div>

          <div
            style={{
              border: "1px solid  #b565ff",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              height: "max-content",
              width: "max-content",
            }}
          >
            <LinkedInEmbed
              url="https://www.linkedin.com/embed/feed/update/urn:li:share:7229181138823520256"
              postUrl="https://www.linkedin.com/posts/squadra-labs_en-squadra-labs-sabemos-que-muchas-activity-7204978078383587329-jryY?utm_source=share&utm_medium=member_desktop"
              width={420}
              height={670}
            />
          </div>
          <div
            style={{
              border: "1px solid  #b565ff",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              height: "max-content",
              width: "max-content",
            }}
          >
            <LinkedInEmbed
              url="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7219778919191740416"
              postUrl="https://www.linkedin.com/posts/squadra-labs_squadralabs-innovaciaejn-coworking-activity-7223761765262589952-VvVC?utm_source=share&utm_medium=member_desktop"
              width={420}
              height={670}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
