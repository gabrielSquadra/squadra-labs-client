import React from "react";
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
import cloudIcon from '../assets/img/services/icon_de_1.webp';
import ctlLogo from "../assets/img/clients/client-ctl.webp";
import squadraLogo from "../assets/img/sq/isologo-trim.webp";
import aiImage from "../assets/img/services/ai_image_lamp.webp";
import dsIcon from "../assets/img/services/icon_ds_2.webp";
import aerowiseLogo from '../assets/img/clients/client-aerowise.webp';
import graphextLogo from '../assets/img/clients/client-graphext.webp';

//COMPONENTS
import DataMaturityQuiz from "../components/forms/DataMaturityQuiz";

const Home = ({ showPopup, hidePopup }) => {
const scrollToSection = (event, sectionId) => {
  event.preventDefault();
  const section = document.getElementById(sectionId);
  if (section) {
    const targetPosition = section.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 10; // Duración en milisegundos
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const progressPercentage = Math.min(progress / duration, 1); // Asegurarse de no pasar el 100%
      window.scrollTo(0, startPosition + distance * progressPercentage);
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }
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
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="#services" onClick={(e) => scrollToSection(e, 'services')}>
                  Services
                </a>
              </li>
              <li>
                <a href="#benefits" onClick={(e) => scrollToSection(e, 'benefits')}>
                  Benefits
                </a>
              </li>
              <li>
                <a href="/success-cases.pdf" target="_blank">
                  Cases
                </a>
              </li>
              <li>
                <button
                  onClick={() => {
                    showPopup(<DataMaturityQuiz hidePopup={hidePopup} />);
                  }}
                >
                  Test
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="hero">
        <div className="container">
          <div className="hero-content spacing">
            <h1 className="text-xxl text-upper">
              Empower your business with <span className="accent">data</span>
            </h1>
            <p className="hero-description">
              We help organizations transform data into actionable insights by
              implementing AI and Cloud architecture solutions
            </p>
            <a
              href="https://calendly.com/mariano-allevato-squadra/30min"
              target="_blank"
              className="btn"
            >
              Schedule a meeting
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
              Our <span className="accent">Services</span>
            </h2>
            <p className="section-description text-center">
              We create data products and services that enable organizations to
              unlock the power of their data and solve their business processes.
            </p>

            <div className="card-container shadow">
              <div className="card">
                <img src={cloudIcon} alt="Cloud Infrastructure design" />
                <h3 className="card-title text-left text-upper">
                  Data Engineering
                </h3>
                <p className="card-description text-sm">
                  Collect, store and analyze data with a robust cloud
                  architecture.
                </p>
              </div>
              <div className="card">
                <img src={aiImage} alt="AI design" />
                <h3 className="card-title text-left text-upper">
                  Artificial Intelligence
                </h3>
                <p className="card-description text-sm">
                  Create intelligent data products and services to solve
                  businesses processes.
                </p>
              </div>
              <div className="card">
                <img src={dsIcon} alt="" />
                <h3 className="card-title text-left text-upper">
                  Data Science
                </h3>
                <p className="card-description text-sm">
                  Make data-driven decisions by building predictive models to
                  identify patterns and trends.
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
              Our <span className="accent">Benefits</span>
            </h2>
            <p className="section-description text-center">
              By developing systems to ingest, transform and store data we can
              later create custom analysis and AI products. Whether you need a
              data-driven application, a machine learning model or a cloud data
              platform, we specialize to deliver results that meet your specific
              needs.
            </p>
            <div className="card-container shadow-light">
              <div className="card bg-primary">
                <h3 className="card-title text-left text-upper">
                  Maximize Revenue
                </h3>
                <p className="card-description text-sm">
                  Predict customers behaviors to understand customer needs and
                  preferences, personalize marketing efforts and increase
                  customer acquisition.
                </p>
              </div>
              <div className="card bg-primary">
                <h3 className="card-title text-left text-upper">
                  Empower Your Teams
                </h3>
                <p className="card-description text-sm">
                  Enhance trust in data and ensure reliable measurement of KPIs,
                  such as ROI, CAC, and MRR to empower data-driven
                  decision-making across all departments, from marketing to
                  finance.
                </p>
              </div>
              <div className="card bg-primary">
                <h3 className="card-title text-left text-upper">
                  Understand Your Business
                </h3>
                <p className="card-description text-sm">
                  Integrate multiple data sources into the cloud to enable a
                  comprehensive view of your customers, helping to identify
                  opportunities that may otherwise go unnoticed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Clients and Partners */}
        <section className="testimonies" id="testimonies">
          <div className="container spacing">
            <h2 className="section-title text-xl text-upper text-center">
              Our <span className="accent">Testimonies</span>
            </h2>
            <p className="section-description text-center">
              Explore glowing recommendations from some of our key partners and
              clients
            </p>
            <div className="card-container shadow">
              <div className="card">
                <img src={aerowiseLogo} alt="Aerowise Private Aviation" />
                <h3 className="card-title text-left text-upper">
                  Perla - CEO @Aerowise
                </h3>
                <p className="card-description text-sm">
                  Our collaboration with Squadra Labs has been outstanding. They
                  are a team of skilled professionals who have helped us
                  leverage data to enhance our business processes and achieve
                  better outcomes. We highly recommend Squadra to any firm
                  looking to create cutting-edge technology tailored to their
                  requirements.
                </p>
              </div>
              <div className="card">
                <img src={graphextLogo} alt="Graphext" />
                <h3 className="card-title text-upper">
                  Victoriano - CEO @Graphext
                </h3>
                <p className="card-description text-sm">
                  We love what the Squadra Labs team is doing! They have a deep
                  understanding of how to leverage data to drive business
                  outcomes. We highly recommend Squadra Labs to anyone looking
                  to make their company more data-driven.
                </p>
              </div>
              <div className="card">
                <img src={ctlLogo} alt="CTL Information Technology" />
                <h3 className="card-title text-left text-upper">
                  Juan Guido - CEO @CTL
                </h3>
                <p className="card-description text-sm">
                  Squadra Labs was an excellent partner for our latest project.
                  Their expertise in data integration complemented our strengths
                  perfectly, and we collaborated closely to develop a solution
                  that exceeded our expectations. We are eager to continue
                  working with Squadra Labs and highly recommend their services.
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
