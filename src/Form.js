import './App.css';
import React from 'react';

function Form() {
  return (
    <div className="form">
      <h2>Create New Housewife Card</h2>
        <form>
            <input type='text' name='name' placeholder='Housewife Name' />
            <input type='text' name='image' placeholder='Add Image URL' />
            <input type='text' name='city' placeholder='City of Origin' />
            <input type='number' name='age' placeholder='Age' />
            <button className='formButton' type='submit'>Create Card</button>
        </form>
    </div>
  );
}

export default Form;
