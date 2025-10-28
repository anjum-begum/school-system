import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Faculty from "./components/Faculty";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
import Vision from "./components/Vision";
import Subjects from "./components/Subjects";
import Footer from "./components/Footer";

const App = () => {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  const addOrUpdateStudent = (student) => {
    if (editingStudent) {
      setStudents(students.map(s => s.email === student.email ? student : s));
      setEditingStudent(null);
    } else {
      setStudents([...students, student]);
    }
  };

  const deleteStudent = (email) => {
    setStudents(students.filter(s => s.email !== email));
  };

  const editStudent = (student) => {
    setEditingStudent(student);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Home />
      <StudentForm addOrUpdateStudent={addOrUpdateStudent} editingStudent={editingStudent} />
      <StudentTable students={students} deleteStudent={deleteStudent} editStudent={editStudent} />
      <Faculty />
      <Vision />
      <Subjects />
      <Footer />
    </div>
  );
};

export default App;
