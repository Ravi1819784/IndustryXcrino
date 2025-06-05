
import React from "react";
import "./EdTechSolution.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";
import { HiOutlineLightBulb } from "react-icons/hi";
const EdTechSolution = () => {
  return (
    <>

    {/* header */}

      <div className="Ed-Tech-Header">
        <div className="ed-tech-background-image">
          {" "}
          <div className="text">
            <div className="text-1">
              <h3>we are Dedicated</h3>
              <h1>EdTech Solutions</h1>{" "}
              <div className="solution-btn">
                <button>
                  {" "}
                  <div className="home-link">Home</div>
                  <div className="arrow">
                    <FaLongArrowAltRight />
                  </div>
                  <div className="Edtechsolution-link">EdTech Solutions</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section-1 */}


      <div className="main-section1">
        {" "}
        <div className="section1">
          <div className="left-section1">
            <div className="left-text">
              {" "}
              <h3>SERVICES BUSINESS SOLUTIONS</h3>
              <h1>Empower Your Education with Cutting-Edge EdTech Solutions</h1>
            </div>
          </div>
          <div className="right-section1">
            <p>
              At Services Business Solutions, we recognize the vital role
              education plays in shaping the future. Our LMS learning management
              system solutions empower schools, universities, and training
              centers by creating dynamic, interactive learning environments. As
              a leader in EdTech, we develop the best educational apps tailored
              to your unique needs, ensuring seamless learning experiences for
              educators and students alike. Partner with us to revolutionize
              digital education!
            </p>
          </div>
        </div>
      </div>


{/* section-2 */}


      <div className="main-section">
        {" "}
        <div className="common-section2">
          {" "}
          <div className="section2">
            <div className="left-section2">
              {" "}
              <div className="left-section21">
                <h1>
                  Unlock the Future of Learning with Best Educational App
                  Development Company - Your Trusted EdTech Partner!
                </h1>
                <button className="contact-btn">Contact Us</button>
              </div>
            </div>

            <div className="right-section2">
              <div className="right-section2-icons">
                <FaGraduationCap />
                <GiOpenBook />
                <HiOutlineLightBulb />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section-3 */}

      

      <div className="common-section3">
        {" "}
        <div className="main-section3">
          <div className="section3">
            {" "}
            <div className="left-section3">
              <div className="left-section3-text">
                {" "}
                <h2>#EDTECHSOLUTIONS</h2>
                <h1>
                  Reap the benefits of the most influential trends in
                  educational technology
                </h1>
              </div>
            </div>
            <div className="right-section3">
              <div className="right-section3-text">
                {" "}
                <p>
                  Discover how Xcrino Business Solutions leverages cutting-edge
                  online learning management software to transform education.
                  Our tailored EdTech services integrate the latest
                  advancements, ensuring seamless and interactive learning
                  experiences.{" "}
                </p>{" "}
                <p>
                  From personalized content development to innovative learning
                  platforms, we help educational institutions stay ahead in the
                  digital era. As a trusted partner, we provide a cloud-based
                  learning management system that enhances engagement, boosts
                  efficiency, and streamlines education. Elevate learning with
                  Xcrino and embrace the future of EdTech today!
                </p>
              </div>
            </div>
          </div>

          <div className="main-section-32">
            <div className="section32">
               <div className="number">
                <h1>01.</h1>
                     <h2>AI-based solutions</h2>
              <p>
                AI enables education technology firms and educational
                institutions to build and alter customized educational
                experiences for students.
              </p>
              </div>
         

              <div className="number">
                <h1>02.</h1>
                    <h2>Deep experiences</h2>
              <p>
                3D, AR, and VR make the learning action interesting and
                contribute to learning via experience.Future-oriented UI/UX
              </p>
              </div>
          

              <div className="number">
                <h1>03.</h1>
                 <h2>Future-oriented UI/UX</h2>
              <p>
                Better UX and UI can assist professors in better managing
                classes and students learn new topics.
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EdTechSolution;
