import React from "react";

const Footer = () => {
    function handleSubmit(){
        console.log('Here for handleSubmit')
    }
  return (
    <div className="container">
      <div className="row">
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
        <div className="col-md-6">FOrm here</div>
      </div>
    </div>
  );
};
export default Footer;
