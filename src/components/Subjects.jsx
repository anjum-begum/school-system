import React from 'react'

const Subjects = () => {
  return (
    <div>
        <section id="subjects" className="bg-light">
    <div className="container">
      <h2 className="text-center font-bold text-2xl mb-4">Subjects Offered</h2>
      <div className="table-responsive">
        <table className="table table-bordered text-center">
          <thead className="table-primary">
            <tr>
              <th>Subject</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mathematics</td>
              <td>Develops analytical and problem-solving skills.</td>
            </tr>
            <tr>
              <td>Science</td>
              <td>Encourages exploration and understanding of natural phenomena.</td>
            </tr>
            <tr>
              <td>English</td>
              <td>Focuses on communication, comprehension, and creative writing.</td>
            </tr>
            <tr>
              <td>Social Studies</td>
              <td>Promotes awareness of history, geography, and cultures.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

    </div>
  )
}

export default Subjects
