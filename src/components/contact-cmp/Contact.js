import React from "react";
import SecondHeader from "../global-cmp/SecondHeader";

const Contact = () => {
  return (
    <div className="contact_us">
      <SecondHeader />
      <div className="contact_form">
        <form>
          <div className="name common">
            <label htmlFor="name">First Name:</label>
            <input type="text" />
          </div>
          <div className="last common">
            <label htmlFor="name">Last Name:</label>
            <input type="text" />
          </div>
          <div className="email common">
            <label htmlFor="email">Email:</label>
            <input type="email" />
          </div>
          <div className="phone">
            <label htmlFor="phone">Phone No.:</label>
            <input type="text" />
          </div>
          <div className="name">
            <label htmlFor="name">Name:</label>
            <textarea
              name="text"
              id="text"
              rows="6"
              placeholder="message Goes here"
            ></textarea>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
