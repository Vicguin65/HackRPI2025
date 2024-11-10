import React, { useState } from 'react';
import './UserInputForm.css';

function UserInputForm() {
  // Initialize state to store the user input
  const [inputValue, setInputValue] = useState('');

  // Handler to update state as user types in the input field
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Submit handler (optional) to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    alert(`User input: ${inputValue}`); // Process the input value
  };

  return (
    <div>
      {/* <h1>React User Input Example</h1> */}
      <form onSubmit={handleSubmit}>
        <label>
          <input 
            type="text"
            value={inputValue} // Bind input value to React state
            onChange={handleInputChange} // Update state on input change
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserInputForm;
