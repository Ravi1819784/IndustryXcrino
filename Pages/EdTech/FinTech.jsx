import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { PiBookBookmarkFill } from "react-icons/pi";
import { FaDigitalOcean } from "react-icons/fa";
import "./FinTech.css";
const FinTech = () => {
  return (
    <>
      {/* Header */}

      <div className="Fin-Tech-Header">
        <div className="Fin-tech-background-image">
          {" "}
          <div className="text">
            <div className="text-1">
              <h3>we are Dedicated</h3>
              <h1>FinTech Solutions</h1>{" "}
              <div className="solution-btn">
                <button>
                  {" "}
                  <div className="home-link">Home</div>
                  <div className="arrow">
                    <FaLongArrowAltRight />
                  </div>
                  <div className="FinTechSolution-link">
                    FinTech Innovations
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section-1 */}

      <div className="common-section">
        <div className="main-section1">
          {" "}
          <div className="section1">
            <div className="left-section1">
              <img
                src="./src/Pages/Image/edtech-image2.png"
                alt=""
              />
            </div>
            <div className="right-section1">
              <div className="right-section1-text">
                {" "}
                <h1>
                  Accelerate Your Financial Future with Xcrino's Cutting-Edge
                  FinTech App Development!
                </h1>
                <p>
                  Experience the future of finance with Xcrino, a leading
                  FinTech app development company. We specialize in building
                  custom digital banking platforms, blockchain solutions, and
                  robo-advisory services to help businesses and individuals
                  thrive in the digital economy.
                </p>
                <p>
                  As a trusted FinTech software development company, we
                  prioritize security, scalability, and innovation to transform
                  financial operations and unlock new opportunities. Partner
                  with Xcrino Business Solutions today and accelerate your
                  journey toward financial success!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section-2 */}

      <div className="common-section">
        <div className="main-section3">
          <div className="section3">
            <div className="section31">
              <h3>#SERVICES</h3>
              <h1>Revolutionize Your Finances with Services Game-Changing</h1>
              <h2>FinTech Solutions!</h2>
              <p className="p1">
                At Services Business Solutions, we understand the impact of
                FinTech in revolutionizing the financial industry. Our FinTech
                software development services empower businesses, financial
                institutions, and individuals with cutting-edge solutions
                tailored for the digital economy.
              </p>{" "}
              <p>
                {" "}
                From secure transactions to seamless user experiences, our
                finance mobile app development solutions help you stay ahead in
                the evolving financial landscape. Partner with us to drive
                innovation and transform the future of finance!
              </p>
            </div>
            
              {" "}
              <div className="section32">
                <PiBookBookmarkFill className="book-icon" />
                <h2>Custom FinTech Solutions</h2>
                <p>
                  We provide custom FinTech software development solutions,
                  designed to tackle unique challenges and unlock new
                  opportunities for businesses in the evolving financial
                  landscape.
                </p>

                <FaDigitalOcean className="digital-icon" />
                <h2>Digital Wallet Development</h2>
                <p>
                  We create secure and user-friendly digital wallet applications
                  that enable users to store, send, and receive funds
                  conveniently from their mobile devices.
                </p>
              </div>
          

            <div className="section33"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinTech;
