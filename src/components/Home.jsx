import React from 'react'

const Home = () => {
  return (
    <div>
       <section id="home" className="pt-5">
    <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238" className="d-block w-100" alt="School" />
          <div className="carousel-caption d-none d-md-block">
            <h2>Welcome to Our School</h2>
            <p>Empowering students for a brighter future.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://plus.unsplash.com/premium_photo-1661333596510-33d60b54ad80?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3R1ZHlpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500" class="d-block w-100" alt="Students" />
          <div className="carousel-caption d-none d-md-block">
            <h2>Quality Education</h2>
            <p>Where learning meets excellence.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  </section>

    </div>
  )
}

export default Home
