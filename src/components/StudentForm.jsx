import React, { useState } from "react";

const StudentForm = ({ addOrUpdateStudent, editingStudent }) => {
  const [form, setForm] = useState(
    editingStudent || {
      fullName: "",
      dob: "",
      email: "",
      contact: "",
      grade: "",
    }
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrUpdateStudent(form);
    setForm({ fullName: "", dob: "", email: "", contact: "", grade: "" });
  };

  return (
    <div id="admission" className="max-w-md mx-auto my-8 bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">Admission Form</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="fullName" value={form.fullName} onChange={handleChange} placeholder="Full Name" className="border p-2 rounded" required />
        <input type="date" name="dob" value={form.dob} onChange={handleChange} className="border p-2 rounded" required />
        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email Address" className="border p-2 rounded" required />
        <input name="contact" value={form.contact} onChange={handleChange} placeholder="Contact Number" className="border p-2 rounded" required />
        <input name="grade" value={form.grade} onChange={handleChange} placeholder="Grade Level Applying For" className="border p-2 rounded" required />
        <button className="bg-blue-900 text-white py-2 rounded hover:bg-blue-1000">
          {editingStudent ? "Update" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
