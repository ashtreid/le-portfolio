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

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setIsEmailInvalid(true);
      setIsNameEmpty(false);
      return;
    }

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    setIsNameEmpty(false);
    setIsEmailInvalid(false);
    event.target.reset();
  };

  return (
    <div className='contact'>
      <form className='contact-form main-container' onSubmit={handleSubmit}>
        <div className='contact-items name'>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            name='name'
            onBlur={handleBlur}
          />
          <div className='form-errors'>
            {isNameEmpty && <span className='error'>Name is required</span>}
          </div>
        </div>

        <div className='contact-items email'>
          <label htmlFor='email'>Email:</label>
          <input
            type='text'
            id='email'
            name='email'
            onBlur={handleBlur}
          />
          <div className='form-errors'>
            {isEmailInvalid && <span className='error'>Invalid email address</span>}
          </div>
        </div>

        <div className='contact-items message'>
          <label htmlFor='message'>Message:</label>
          <textarea id='message' name='message' rows={5} />
        </div>

        <div className='contact-items submit'>
          <button type='submit'>Submit</button>
        </div>

      </form>
    </div>
  );
}
