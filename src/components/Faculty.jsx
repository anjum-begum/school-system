import React from 'react'

const Faculty = () => {
  return (
    // <!-- Faculty Section -->
  <section id="faculty" className="bg-light">
    <div className="container">
      <h2 className="text-center text-2xl font-bold mb-4">Our Faculty</h2>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100">
            <img src = "https://themehakiqbal.github.io/Everglow-School-Website1/images/mehakiqbal.png" className="card-img-top" alt="Teacher" />
            <div className="card-body">
              <h5 className="card-title">Ms. Sarah Johnson</h5>
              <p className="card-text"><strong>Subjects:</strong> English, Literature</p>
              <p className="card-text">Passionate about nurturing creativity and communication skills in students.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <img src = "https://t4.ftcdn.net/jpg/05/22/11/23/240_F_522112353_aSznFh7yyJ8RFQDZGGa91oJgfXx36pFk.jpg" className="card-img-top" alt="Teacher" />
            <div className="card-body">
              <h5 className="card-title">Mr. David Lee</h5>
              <p className="card-text"><strong>Subjects:</strong> Mathematics</p>
              <p className="card-text">Believes in learning through problem-solving and logical reasoning.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <img src="https://i.pinimg.com/736x/e9/88/ff/e988ffa329dfb3227942ff964bcace6f.jpg" className="card-img-top" alt="Teacher" />
            <div className="card-body">
              <h5 className="card-title">Mrs. Emily Brown</h5>
              <p className="card-text"><strong>Subjects:</strong> Science</p>
              <p className="card-text">Encourages curiosity and hands-on experiments in learning.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}

export default Faculty
