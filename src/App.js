import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    birthDate: '',
    score: '',
    image: ''
  });
  const [registeredStudents, setRegisteredStudents] = useState([]);
  const [currentStudent, setCurrentStudent] = useState({});
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = {
      ...formData,
      [name]: value
    };
    setFormData(updatedFormData);
    setCurrentStudent(updatedFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.surname || !formData.birthDate || !formData.score || !formData.image) {
      setMessage('Please fill in all fields');
      return;
    }
    setRegisteredStudents([...registeredStudents, formData]);
    setMessage('Student registered successfully');
    setFormData({
      name: '',
      surname: '',
      birthDate: '',
      score: '',
      image: ''
    });
    setCurrentStudent({});
  };

  return (
    <div className="App">
      <div className="left">
        <h2>Registered Students</h2>
        <ul>
          {registeredStudents.map((student, index) => (
            <li key={index}>
              <div><strong>Name:</strong> {student.name}</div>
              <div><strong>Surname:</strong> {student.surname}</div>
              <div><strong>Birth Date:</strong> {student.birthDate}</div>
              <div><strong>Score:</strong> {student.score}</div>
              <div><strong>Image:</strong> <img src={student.image} alt="Student" style={{ maxWidth: '200px', maxHeight: '200px', marginTop: '10px' }} /></div>
            </li>
          ))}
          {Object.keys(currentStudent).length > 0 && (
            <li>
              <div><strong>Name:</strong> {currentStudent.name}</div>
              <div><strong>Surname:</strong> {currentStudent.surname}</div>
              <div><strong>Birth Date:</strong> {currentStudent.birthDate}</div>
              <div><strong>Score:</strong> {currentStudent.score}</div>
              <div><strong>Image:</strong> <img src={currentStudent.image} alt="Student" style={{ maxWidth: '200px', maxHeight: '200px', marginTop: '10px' }} /></div>
            </li>
          )}
        </ul>
        <p>{message}</p>
        <button onClick={() => setRegisteredStudents([])}>Clear Registered Students</button>
      </div>
      <div className="right">
        <h2>Register a Student</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              Name:
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
          </div>
          <div className="form-group">
            <label>
              Surname:
              <input type="text" name="surname" value={formData.surname} onChange={handleChange} />
            </label>
          </div>
          <div className="form-group">
            <label>
              Birth Date:
              <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} />
            </label>
          </div>
          <div className="form-group">
            <label>
              Score:
              <input type="number" name="score" value={formData.score} onChange={handleChange} />
            </label>
          </div>
          <div className="form-group">
            <label>
              Image URL:
              <input type="text" name="image" value={formData.image} onChange={handleChange} />
            </label>
          </div>
          {formData.image && (
            <div className="image-preview">
              <img src={formData.image} alt="Student Preview" style={{ maxWidth: '200px', maxHeight: '200px', marginTop: '10px' }} />
            </div>
          )}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
