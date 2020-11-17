import React from 'react';

const Footer = () => {
  function handleSubmit() {
    console.log('Here for handleSubmit');
  }
  return (
    <div className="container">
      <div className="row">
        <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>
          Leave a message and I'll definitely get back
        </h2>
        <div className="col-md-6">
          <h2>Contact me</h2>
          <form onSubmit={handleSubmit}>
            <div className="col-md-12">
              <label htmlFor="name">Name:</label>
              <input id="name" type="text" placeholder="Enter your Name" />
            </div>
            <div className="col-md-12">
              <label htmlFor="email">Email:</label>
              <input type="text" id="email" placeholder="Enter your Email" />
            </div>
            <div className="col-md-12">
              <label htmlFor="subject">Subject:</label>
              <input type="text" id="subject" placeholder="Enter your Subject" />
            </div>
            <div className="col-md-12">
              <label htmlFor="message">Message:</label>
              <input type="text" id="message" placeholder="Enter your Message" />
            </div>
            <div className="col-md-12">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <h2>Address</h2>
          <div className="col-md-12">
            <div>Eric Jose Joy</div>
            <div>B-14/A, vishwakarma colony</div>
            <div>New Delhi-110044,India</div>
            <div>+91-9970375650</div>
          </div>
          <h2>Twitter</h2>
          <div className="col-md-12">
            <div>Follow me on Twitter</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
