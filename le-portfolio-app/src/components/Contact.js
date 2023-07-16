import React from 'react';

export default function Contact() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        event.target.reset();
    };
    return (
        <div className='contact'>
            <h2>Contact me</h2>
            <form className='contact-form' onSubmit={handleSubmit}>
                <label htmlFor='name'>Name:</label>
                <input type='text' id='name' name='name' />

                <label htmlFor='email'>Email:</label>
                <input type='text' id='email' name='email' />

                <label htmlFor='message'>Message:</label>
                <textarea id='message' name='message' rows={5} />

                <button type='submit'>Submit</button>
            </form>
        </div>

    );
}

//_________________EXAMPLE FOR ERROR STATE HANDLING_______// FROM: https://react.dev/learn/managing-state_______________


// import { useState } from 'react';

// export default function Form() {
//   const [answer, setAnswer] = useState('');
//   const [error, setError] = useState(null);
//   const [status, setStatus] = useState('typing');

//   if (status === 'success') {
//     return <h1>That's right!</h1>
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setStatus('submitting');
//     try {
//       await submitForm(answer);
//       setStatus('success');
//     } catch (err) {
//       setStatus('typing');
//       setError(err);
//     }
//   }

//   function handleTextareaChange(e) {
//     setAnswer(e.target.value);
//   }

//   return (
//     <>
//       <h2>City quiz</h2>
//       <p>
//         In which city is there a billboard that turns air into drinkable water?
//       </p>
//       <form onSubmit={handleSubmit}>
//         <textarea
//           value={answer}
//           onChange={handleTextareaChange}
//           disabled={status === 'submitting'}
//         />
//         <br />
//         <button disabled={
//           answer.length === 0 ||
//           status === 'submitting'
//         }>
//           Submit
//         </button>
//         {error !== null &&
//           <p className="Error">
//             {error.message}
//           </p>
//         }
//       </form>
//     </>
//   );
// }

// function submitForm(answer) {
//   // Pretend it's hitting the network.
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let shouldError = answer.toLowerCase() !== 'lima'
//       if (shouldError) {
//         reject(new Error('Good guess but a wrong answer. Try again!'));
//       } else {
//         resolve();
//       }
//     }, 1500);
//   });
// }