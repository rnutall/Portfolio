import {useState} from 'react';
import "./contact.css";
export default function Contact() {
// logic for contact form goes here

const [contact, setContact] = useState('Welcome! ');

  return (
    <div className="container mt-5">
    <h2 className="mb-3">React Contact Form Component Example</h2>
    <form onSubmit={''}>
      <div className="mb-3">
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input className="form-control" type="text" id="name" required />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input className="form-control" type="email" id="email" required />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="message">
          Message
        </label>
        <textarea className="form-control" id="message" required />
      </div>
      <button className="btn btn-danger" type="submit">
        {/* {formStatus} */}
        Send
      </button>
    </form>
  </div>
  );
}
