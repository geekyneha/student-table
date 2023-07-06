import React, { useState } from "react";
import style from "./student-table.module.css";

const StudentTAble = () => {
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    email: "",
    phone: "",
  });

  const [studentList, setStudentList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudentList((prevStudentList) => [...prevStudentList, formData]);
    setFormData({
      name: "",
      rollNo: "",
      email: "",
      phone: "",
    });
  };

  return (
    <div className={style.studentForm}>
      <form onSubmit={handleSubmit}>
        <div className={style.inputContainer}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={style.inputContainer}>
          <input
            type="text"
            name="rollNo"
            placeholder="Roll No"
            value={formData.rollNo}
            onChange={handleChange}
            required
          />
        </div>
        <div className={style.inputContainer}>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={style.inputContainer}>
          <input
            type="text"
            name="phone"
            placeholder="Phone No"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className={style.submitContainer}>
          <button type="submit">Submit</button>
        </div>
      </form>

      {studentList.length > 0 && (
        <div className={style.studentTable}>
          <h3>Student Table</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Roll No</th>
                <th>Email</th>
                <th>Phone No</th>
              </tr>
            </thead>
            <tbody>
              {studentList.map((student, index) => (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.rollNo}</td>
                  <td>{student.email}</td>
                  <td>{student.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StudentTAble
