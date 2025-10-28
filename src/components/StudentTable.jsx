import React from "react";

const StudentTable = ({ students, deleteStudent, editStudent }) => {
  return (
    <div className="max-w-4xl mx-auto mt-6 bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">Applied Candidates</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Grade</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, index) => (
            <tr key={index} className="text-center">
              <td className="border p-2">{s.fullName}</td>
              <td className="border p-2">{s.email}</td>
              <td className="border p-2">{s.grade}</td>
              <td className="border p-2">
                <button onClick={() => editStudent(s)} className="bg-yellow-400 px-2 py-1 rounded mr-2">Edit</button>
                <button onClick={() => deleteStudent(s.email)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
