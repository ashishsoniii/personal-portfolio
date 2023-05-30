import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Form() {
  const form = useRef();
  const [errors, setErrors] = useState({});

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    emailjs
      .sendForm(
        "ashish-send-mail-9281236",
        "template_e9frzm7",
        form.current,
        "K-DEOmyDJkHECTVjd"
      )
      .then(
        (result) => {
          form.current.reset();
          //   console.log(result.text);
          console.log("Message has been sent successfully!");
        },
        (error) => {
          //   console.log(error.text);
        }
      );
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!form.current.elements.user_name.value.trim()) {
      errors.user_name = "Name is required";
      isValid = false;
    }

    if (!form.current.elements.email.value.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.current.elements.email.value)) {
      errors.email = "Invalid email address";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  return (
    <>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="form-inputs-center form-bg"
      >
        <input
          type="text"
          className="transparent-input"
          placeholder="Name"
          name="user_name"
        />
        {errors.user_name && (
          <p className="error-message">{errors.user_name}</p>
        )}
        <input
          type="email"
          className="transparent-input"
          placeholder="Email"
          name="email_em"
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
        <textarea
          name="message_msg"
          id="msg"
          placeholder="Text Here"
          className="transparent-input-textarea"
          rows="4"
          cols="50"
        ></textarea>
        <div className="submit-btn form-bg">
          <button className="form-button-sbmt">Send Mail</button>
        </div>
      </form>
    </>
  );
}

export default Form;

// email template

// From {{user_name}}

// Name: {{user_name}}

// Email: {{email_em}}

// Message: {{message_msg}}
