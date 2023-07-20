import React, { useState } from 'react';

export default function Contact() {
  const [isNameEmpty, setIsNameEmpty] = useState(false);
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);

  const handleBlur = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value.trim();

    if (fieldName === 'name') {
      setIsNameEmpty(fieldValue === '');
    }

    if (fieldName === 'email') {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsEmailInvalid(!emailPattern.test(fieldValue));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Check for empty fields
    if (!name) {
      setIsNameEmpty(true);
      return;
    }
    if (!email) {
      setIsEmailInvalid(false);
      setIsNameEmpty(false);
      return;
    }

    // Check for a valid email address using a simple regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setIsEmailInvalid(true);
      setIsNameEmpty(false);
      return;
    }

    // If all checks pass, handle the form submission and reset the form
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    setIsNameEmpty(false);
    setIsEmailInvalid(false);
    event.target.reset();
  };

  return (
    <div className='contact'>
      <h2>Contact me</h2>
      <form className='contact-form' onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          id='name'
          name='name'
          onBlur={handleBlur} 
        />
        {isNameEmpty && <span className='error'>Name is required</span>}

        <label htmlFor='email'>Email:</label>
        <input
          type='text'
          id='email'
          name='email'
          onBlur={handleBlur}
        />
        {isEmailInvalid && <span className='error'>Invalid email address</span>}

        <label htmlFor='message'>Message:</label>
        <textarea id='message' name='message' rows={5} />

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
