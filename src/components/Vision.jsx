import React from 'react';

const Vision = () => {
  return (
    <div>
      <section id="vision" className="vision-section text-white">
        <div className="overlay"></div>
        <div className="container">
          <div className="vision-header text-center mb-5">
            <h2 className="fw-bold">Our Vision &amp; Mission</h2>
            <p className="lead">
              Inspiring minds, shaping the future, and creating lifelong learners who contribute positively to society.
            </p>
          </div>

          <div className="row text-center g-4">
            {/* <!-- Card 1 --> */}
            <div className="col-md-4">
              <div className="vision-card">
                <div className="icon mb-3">
                  <i className="fa-solid fa-lightbulb"></i>
                </div>
                <h4>Inspiring Innovation</h4>
                <p>
                  We encourage students to think creatively, question deeply, and embrace innovation in all aspects of learning.
                </p>
              </div>
            </div>

            {/* <!-- Card 2 --> */}
            <div className="col-md-4">
              <div className="vision-card">
                <div className="icon mb-3">
                  <i className="fa-solid fa-graduation-cap"></i>
                </div>
                <h4>Academic Excellence</h4>
                <p>
                  Our mission is to provide quality education that helps students achieve excellence and succeed globally.
                </p>
              </div>
            </div>

            {/* <!-- Card 3 --> */}
            <div className="col-md-4">
              <div className="vision-card">
                <div className="icon mb-3">
                  <i className="fa-solid fa-hand-holding-heart"></i>
                </div>
                <h4>Values &amp; Integrity</h4>
                <p>
                  We believe in building strong moral foundations — promoting honesty, compassion, and respect for all.
                </p>
              </div>
            </div>
          </div>

          <div className="vision-footer mt-5 text-center">
            <p className="mb-0 fs-5">
              “Education is not the learning of facts, but the training of the mind to think.” <br /> — <strong>Albert Einstein</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vision;
