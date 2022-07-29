import React, { useRef } from "react";
import "./styles/contact.scss";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9teygqs",
        "template_wmvquos",
        form.current,
        "user_ySF9MUXdvfyTYBHvuWzS9"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('✅Your message has been sent Successfully..!!!');
        },
        (error) => {
          console.log(error.text);
          alert('❗ Sorry there was a problem. Please contact via LinkedIn/twitter');
        }
      );
  };

  return (
    <div id="contact">
      <br />
      <br />
      <br />
      <div className="contact">
        <div className="connect">
          <p>
            Discuss a Project <span>OR</span> Just want to say <span>Hi!</span>{" "}
            <br /> My inbox is open for All <span>...</span>{" "}
          </p>
        </div>
        <div className="form-container">
          <h4>Get in Touch</h4>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder=" Name" required />
            <input type="email" name="email" placeholder=" Email" required />
            <textarea
              type="text"
              name="message"
              placeholder=" Message"
              required
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
