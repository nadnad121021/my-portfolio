import React from "react";

const Projects: React.FC = () => {
  return (
    <>
      <section className="faq section-padding" id="testimonials">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <h3 className="mb-5">Previous Shool & Intership Projects</h3>

              <div className="accordion" id="accordionExample">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-link"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        {`Lear Clinic System`}
                      </button>
                    </h2>
                  </div>

                  <div
                    id="collapseOne"
                    className="collapse"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <p>
                        <b>Role:</b> FULLSTACK DEVELOPER
                      </p>
                      <p>
                        <b>Yr:</b> 2018 - 2019 (During Internship)
                      </p>
                      <p>
                        <b>Project About:</b> This application, built using .NET
                        Framework, MS SQL Server, JQuery, and IIS, serves the
                        purpose of tracking OPD balance and issued slips for
                        each employee at Lear. It also enables monitoring the
                        total PR amount, usage, and balance for vendors, with a
                        primary focus on the Lear Clinic.
                      </p>
                      <img
                        src={require("../assets/projects/LCS.png")}
                        className="about-image img-fluid"
                        alt="Dan's Portfolio Image"
                      />
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        {`Lear Employee Certification System`}
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <p>
                        <b>Role:</b> FULLSTACK DEVELOPER
                      </p>
                      <p>
                        <b>Yr:</b> 2018 - 2019 (During Internship)
                      </p>
                      <p>
                        <b>Project About:</b> Skills Matrix application for
                        every employee at Lear, designed to effectively track
                        their certifications, including both certified and
                        recertified employees. This application was developed
                        using a combination of .NET Framework, MS SQL Server,
                        JQuery, IIS, and Bootstrap.
                      </p>
                      <img
                        src={require("../assets/projects/LECS.png")}
                        className="about-image img-fluid"
                        alt="Dan's Portfolio Image"
                      />
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        {`Task King System`}
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <p>
                        <b>Role:</b> BACK-END DEVELOPER
                      </p>
                      <p>
                        <b>Yr:</b> 2018 - 2019 (During College)
                      </p>
                      <p>
                        <b>Project About:</b> A straightforward application that
                        automates task assignment for students. This application
                        was built using Node.js, MySQL, JavaScript, and jQuery.
                      </p>
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                          <img
                            src={require("../assets/projects/TaskKingLog.PNG")}
                            className="about-image img-fluid"
                            alt="Dan's Portfolio Image"
                          />
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                          <img
                            src={require("../assets/projects/TaskKing.PNG")}
                            className="about-image img-fluid"
                            alt="Dan's Resume HTML Template"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header" id="headingFour">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        {`DCISM Web-Based Resource Management System`}
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseFour"
                    className="collapse"
                    aria-labelledby="headingFour"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <p>
                        <b>Role:</b> DEVELOPMENT LEAD
                      </p>
                      <p>
                        <b>Yr:</b> 2018 - 2019 (During College)
                      </p>
                      <p>
                        <b>Project About:</b> A capstone project with a range of
                        features, including inventory management, borrowing, and
                        reservation functionalities, all integrated with SMS
                        notifications. This project was developed using .NET
                        Framework, MS SQL Server, jQuery, IIS, and Bootstrap.
                      </p>
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-12">
                          <img
                            src={require("../assets/projects/DCISM.PNG")}
                            className="about-image img-fluid"
                            alt="Dan's Portfolio Image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faq">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <h3 className="mb-5">Previous Exercise Projects</h3>

              <div className="accordion" id="accordionExerciseProjects">
                <div className="card">
                  <div className="card-header" id="headingOneExerciseProjects">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-link"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOneExerciseProjects"
                        aria-expanded="true"
                        aria-controls="collapseOneExerciseProjects"
                      >
                        {`Covid-19 Tracker`}
                      </button>
                    </h2>
                  </div>

                  <div
                    id="collapseOneExerciseProjects"
                    className="collapse"
                    aria-labelledby="headingOneExerciseProjects"
                    data-parent="#accordionExerciseProjects"
                  >
                    <div className="card-body">
                      <p>
                        <b>Role:</b> FULLSTACK DEVELOPER
                      </p>
                      <p>
                        <b>Yr:</b> 2019 - 2020
                      </p>
                      <p>
                        <b>Project About:</b> An application utilized by
                        React.js, Leaflet, Material UI, the Disease.sh API, and
                        deployed to Firebase. The primary objective behind
                        developing this application was to improve and practice
                        coding skills using the aforementioned tools. To view
                        the application's output, kindly follow the link
                        provided:{" "}
                        <a
                          href="https://covid-19-tracker-acb75.web.app/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Covid-19 Tracker
                        </a>
                      </p>

                      <img
                        src={require("../assets/projects/Covid-19-tracker.png")}
                        className="about-image img-fluid"
                        alt="Dan's Portfolio Image"
                      />
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header" id="headingTwoExerciseProjects">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseTwoExerciseProjects"
                        aria-expanded="false"
                        aria-controls="collapseTwoExerciseProjects"
                      >
                        {`Quarantine Exercise Portal`}
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseTwoExerciseProjects"
                    className="collapse"
                    aria-labelledby="headingTwoExerciseProjects"
                    data-parent="#accordionExerciseProjects"
                  >
                    <div className="card-body">
                      <p>
                        <b>Role:</b> FULLSTACK DEVELOPER
                      </p>
                      <p>
                        <b>Yr:</b> 2019 - 2020 (During Pandemic)
                      </p>
                      <p>
                        <b>Project About:</b>An application utilizing the
                        Laravel Framework, Apache, and Bootstrap, with MySQL
                        serving as the database. This application facilitates
                        the random assignment of tables and tasks. For more
                        information, please refer to the following link:{" "}
                        <a
                          href="https://drive.google.com/file/d/1lHplh83Yx_LcbIz6q6SJaz_JqOlTjTRa/view"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Quarantine Exercise Portal
                        </a>
                      </p>

                      <img
                        src={require("../assets/projects/QurantineEP.PNG")}
                        className="about-image img-fluid"
                        alt="Dan's Portfolio Image"
                      />
                    </div>
                  </div>
                </div>

                <span className="faq-info-text">
                  Please send me a message if you have anything to say. Send an
                  email message to <strong>alingasadan@gmail.com</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
