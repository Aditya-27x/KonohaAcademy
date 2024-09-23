import React, { useState } from 'react';

function AttendanceForm() {
  const [isFormVisible, setFormVisible] = useState(false);
  const [rollNumber, setRollNumber] = useState('');

  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };

  const handleInputChange = (e) => {
    setRollNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Roll Number Submitted:', rollNumber);
    // Handle form submission logic here
    setRollNumber(''); // Clear the input field after submission
    setFormVisible(false); // Hide the form after submission
  };

  return (
    <div>
      <button className='attendance' onClick={toggleFormVisibility}>
        {isFormVisible ? 'Attendance' : 'Attendance'}
      </button>
      {isFormVisible && (
        <form className='attendance attendance-form' onSubmit={handleSubmit}>
          <label>
            Roll Number:
            <input
              type="number"
              value={rollNumber}
              onChange={handleInputChange}
              required
            />
          </label>
          <button className='attendance attendance-btn' type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default AttendanceForm;
