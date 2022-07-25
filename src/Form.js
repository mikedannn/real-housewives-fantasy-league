import './App.css';
import React from 'react';

function Form() {
  return (
    <div className="form">
      <h3>Create New Housewife Card</h3>
        <form>
            <input type='text' name='name' placeholder='Housewife Name' />
            <input type='text' name='image' placeholder='Add Image URL' />
            <input type='text' name='city' placeholder='City of Origin' />
            <input type='text' name='age' placeholder='Age' />
            <button className='formButton' type='submit'>Create Card</button>
        </form>
    </div>
  );
}

export default Form;
