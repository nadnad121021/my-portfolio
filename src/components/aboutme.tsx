import React from "react";

const AboutMe: React.FC = () => {
  return (
    <section className="about section-padding" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <p>
              Greetings! I'm Dan, a highly skilled software engineer
              specializing in React.js and Node.js development. With a passion
              for building robust and scalable web applications, I bring over 5
              years of experience to the table. I thrive in collaborative
              environments and have a proven track record of delivering
              high-quality solutions that meet client requirements. From
              crafting dynamic user interfaces with React.js to designing
              efficient server-side systems with Node.js, I have the expertise
              to bring your ideas to life. Let's work together to create
              exceptional software experiences that drive your business forward.
            </p>
          </div>

          <div className="col-lg-5 mx-auto col-md-6 col-12">
            <img
              src={require("../assets/true-agency.jpg")}
              className="about-image img-fluid"
              alt="Dan's Portfolio Image"
            />
          </div>
        </div>
        <div className="row about-third">
          <div className="col-lg-6 col-md-6 col-12">
            <h3>Coder</h3>
            <p>
              I have a strong passion for coding and thoroughly enjoy exploring
              emerging concepts within the IT industry.
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <h3>Beginner's mindset</h3>
            <p>
              I constantly maintain a beginner's mindset, as it fuels my
              motivation to continuously strive for growth and improvement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
