import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import azure from "../assets/img/tools/logo-azure.webp";
import gcp from "../assets/img/tools/logo-gcp.webp";
import aws from "../assets/img/tools/logo-aws.webp";
import airflow from "../assets/img/tools/logo-airflow.webp";
import dbt from "../assets/img/tools/logo-dbt.webp";
import postgresql from "../assets/img/tools/logo-postgresql.webp";
import python from "../assets/img/tools/logo-python.webp";
import django from "../assets/img/tools/logo-django.webp";
import powerbi from "../assets/img/tools/logo-powerbi.webp";
import sigma from "../assets/img/tools/logo-sigma.webp";
import cloudIcon from "../assets/img/services/icon_de_1.webp";
import ctlLogo from "../assets/img/clients/client-ctl.webp";
import squadraLogo from "../assets/img/sq/isologo-trim.webp";
import aiImage from "../assets/img/services/ai_image_lamp.webp";
import dsIcon from "../assets/img/services/icon_ds_2.webp";
import aerowiseLogo from "../assets/img/clients/client-aerowise.webp";
import graphextLogo from "../assets/img/clients/client-graphext.webp";

//COMPONENTS
import DataMaturityQuiz from "../components/forms/DataMaturityQuiz";

const Home = ({ showPopup, hidePopup }) => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const changeLanguage = (lng) => {
    setSelectedLanguage(lng);
    i18n.changeLanguage(lng);
  };

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const targetPosition =
        section.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 10; // Duración en milisegundos
      let start = null;

      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const progressPercentage = Math.min(progress / duration, 1);
        window.scrollTo(0, startPosition + distance * progressPercentage);
        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }
  };

  const getDownloadLink = () => {
    return i18n.language === "es"
      ? "/casos-de-exito.pdf"
      : "/success-cases.pdf";
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/">
              <img src={squadraLogo} width="50" alt="Squadra Labs" />
            </Link>
          </div>
          <div className="navbar-menu" role="navigation">
            <ul>
              <li>
                <Link className="navbar-link" to="/">
                  {t("home")}
                </Link>
              </li>
              <li>
                <a
                  className="navbar-link"
                  href="#services"
                  onClick={(e) => scrollToSection(e, "services")}
                >
                  {t("services")}
                </a>
              </li>
              <li>
                <a
                  className="navbar-link"
                  href="#benefits"
                  onClick={(e) => scrollToSection(e, "benefits")}
                >
                  {t("benefits")}
                </a>
              </li>
              <li>
                <a
                  className="navbar-link"
                  href={getDownloadLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("cases")}
                </a>
              </li>
              <li>
                <a
                  className="navbar-link"
                  onClick={() => {
                    showPopup(<DataMaturityQuiz hidePopup={hidePopup} />);
                  }}
                >
                  {t("test")}
                </a>
              </li>
            </ul>
          </div>
          <div className="language-buttons">
            <button
              className={`button-language ${
                selectedLanguage === "en" ? "selected" : ""
              }`}
              style={{ borderRight: "solid 0.5px white" }}
              onClick={() => changeLanguage("en")}
            >
              EN
            </button>
            <button
              className={`button-language ${
                selectedLanguage === "es" ? "selected" : ""
              }`}
              onClick={() => changeLanguage("es")}
            >
              ES
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="hero">
        <div className="container">
          <div className="hero-content spacing">
            <h1 className="text-xxl text-upper">
              {t("empower_your_business")}{" "}
              <span className="accent">{t("data")}</span>
            </h1>
            <p className="hero-description">{t("transform_data")}</p>
            <a
              href="https://calendly.com/mariano-allevato-squadra/30min"
              target="_blank"
              className="btn"
            >
              {t("schedule_meeting")}
            </a>
          </div>
        </div>
      </header>

      {/* Content */}
      <main>
        {/* Services */}
        <section className="services bg-light" id="services">
          <div className="container spacing">
            <h2 className="section-title text-xl text-upper text-center">
              {t("our")} <span className="accent">{t("services")}</span>
            </h2>
            <p className="section-description text-center">
              {t("services_description")}
            </p>

            <div className="card-container shadow">
              <div className="card">
                <img
                  className="card-services-image"
                  src={cloudIcon}
                  alt={t("cloud_infrastructure_design")}
                />
                <h3 className="card-title text-left text-upper">
                  {t("data_engineering")}
                </h3>
                <p className="card-description text-sm">
                  {t("data_engineering_description")}
                </p>
              </div>
              <div className="card">
                <img
                  className="card-services-image"
                  src={aiImage}
                  alt={t("ai_design")}
                />
                <h3 className="card-title text-left text-upper">
                  {t("artificial_intelligence")}
                </h3>
                <p className="card-description text-sm">
                  {t("artificial_intelligence_description")}
                </p>
              </div>
              <div className="card">
                <img
                  className="card-services-image"
                  src={dsIcon}
                  alt={t("data_science")}
                />
                <h3 className="card-title text-left text-upper">
                  {t("data_science")}
                </h3>
                <p className="card-description text-sm">
                  {t("data_science_description")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="tools" id="tools">
          <div className="tools">
            <div className="tools-slide">
              <img src={azure} alt="Azure" />
              <img src={gcp} alt="GCP" />
              <img src={aws} alt="AWS" />
              <img src={airflow} alt="Airflow" />
              <img src={dbt} alt="dbt" />
              <img src={postgresql} alt="PostgreSQL" />
              <img src={python} alt="Python" />
              <img src={django} alt="Django" />
              <img src={powerbi} alt="PowerBI" />
              <img src={sigma} alt="Sigma" />
              <img src={azure} alt="Azure" />
              <img src={gcp} alt="GCP" />
              <img src={aws} alt="AWS" />
              <img src={airflow} alt="Airflow" />
              <img src={dbt} alt="dbt" />
              <img src={postgresql} alt="PostgreSQL" />
              <img src={python} alt="Python" />
              <img src={django} alt="Django" />
              <img src={powerbi} alt="PowerBI" />
              <img src={sigma} alt="Sigma" />
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="benefits bg-secondary" id="benefits">
          <div className="container spacing">
            <h2 className="section-title text-xl text-upper text-center">
              {t("our")} <span className="accent">{t("benefits")}</span>
            </h2>
            <p className="section-description text-center">
              {t("benefits_description")}
            </p>
            <div className="card-container shadow-light">
              <div className="card bg-primary">
                <h3 className="card-title text-left text-upper">
                  {t("maximize_revenue")}
                </h3>
                <p className="card-description text-sm">
                  {t("maximize_revenue_description")}
                </p>
              </div>
              <div className="card bg-primary">
                <h3 className="card-title text-left text-upper">
                  {t("empower_your_teams")}
                </h3>
                <p className="card-description text-sm">
                  {t("empower_your_teams_description")}
                </p>
              </div>
              <div className="card bg-primary">
                <h3 className="card-title text-left text-upper">
                  {t("understand_your_business")}
                </h3>
                <p className="card-description text-sm">
                  {t("understand_your_business_description")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Clients and Partners */}
        <section className="testimonies" id="testimonies">
          <div className="container spacing">
            <h2 className="main-section-title">
            <p className="title-first-word">{t("our")}</p> <span className="accent">{t("testimonies")}</span>
            </h2>
            <p className="section-description text-center">
              {t("testimonies_description")}
            </p>
            <div className="card-container shadow">
              <div className="card">
                <div className="image-container">
                  <img
                    src={aerowiseLogo}
                    alt="Aerowise Private Aviation"
                    style={{ width: "250px", height: "auto" }}
                  />
                </div>
                <h3 className="card-title text-left text-upper">
                  {t("perla")}
                </h3>
                <p className="card-description text-sm">
                  {t("perla_description")}
                </p>
              </div>
              <div className="card">
                <img
                  className="card-clients-image"
                  src={graphextLogo}
                  alt="Graphext"
                />
                <h3 className="card-title text-upper">{t("victoriano")}</h3>
                <p className="card-description text-sm">
                  {t("victoriano_description")}
                </p>
              </div>
              <div className="card">
                <img
                  className="card-clients-image"
                  src={ctlLogo}
                  alt="CTL Information Technology"
                />
                <h3 className="card-title text-left text-upper">
                  {t("juan_guido")}
                </h3>
                <p className="card-description text-sm">
                  {t("juan_guido_description")}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
